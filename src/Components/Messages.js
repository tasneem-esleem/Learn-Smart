import React, { useState, useEffect } from "react";
import { IoSearchOutline, IoAddCircle } from "react-icons/io5";
import Profilesidebar from "./Profilesidebar";
import ChatPanel from "./ChatPanel";

function decodeToken(token) {
  try {
    const payload = token.split(".")[1];
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(normalized));
  } catch (err) {
    return null;
  }
}

function normaliseConversation(item) {
  if (item.contact) {
    return {
      chatId: item.chatId || item.contact._id,
      name: item.contact.name || "Unknown",
      avatar: item.contact.avatar || null,
      lastMessage: item.lastMessage || "",
      unread: item.unreadCount || 0,
      time: item.updatedAt || item.createdAt || null,
    };
  }
  return {
    chatId: item._id,
    name: item.name || "Unknown",
    avatar: item.avatar || null,
    lastMessage: "",
    unread: 0,
    time: null,
  };
}

function formatRelativeTime(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  const now = new Date();
  const diffDays = Math.floor((now - date) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "yesterday";
  return date.toLocaleDateString([], { day: "numeric", month: "numeric", year: "numeric" });
}

const BASE_URL = "https://educational-platform-backend-935l.onrender.com/api/messages";

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const token = localStorage.getItem("userToken");
  const decoded = token ? decodeToken(token) : null;
  const currentUserId = decoded?.id;

  // ── Fetch conversations ──
  useEffect(() => {
    if (!token) { setLoading(false); return; }
    fetch(`${BASE_URL}/conversations`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const raw = data.conversations || data.data?.conversations || [];
        setConversations(raw.map(normaliseConversation));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  useEffect(() => {
    if (!token) return;
    fetch(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const raw = data.users || data.data?.users || [];
        setAllUsers(raw.map(normaliseConversation));
      })
      .catch(() => {});
  }, [token]);

  const handleChatClick = (chat) => {
    setActiveId(chat.chatId);
    setActiveChat(chat);
    setMessages([]);

    fetch(`${BASE_URL}/${chat.chatId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const list = data.messages || data.data?.messages || [];
        setMessages(list);
      })
      .catch((err) => console.error("Error fetching messages:", err));
  };

  // ── Send a message ──
  const sendMessage = async () => {
    if (!newMessage.trim() || !activeId || sending) return;
    setSending(true);
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ receiverId: activeId, content: newMessage }),
      });
      const data = await response.json();
      if (response.ok) {
        const sentMessage = data.message || data.data?.message;
        if (sentMessage) setMessages((prev) => [...prev, sentMessage]);
        setNewMessage("");
      }
    } catch (err) {
      console.error("Error sending message:", err);
    } finally {
      setSending(false);
    }
  };

  // ── Filter list by search query ──
  const displayList = (conversations.length > 0 ? conversations : allUsers).filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-row items-stretch overflow-x-hidden">

      {/* ── Conversation List ── */}
      <main className="flex-1 h-screen overflow-y-auto border-r border-gray-50">
        <div className="max-w-2xl mx-auto p-8 flex flex-col">
          <h1 className="text-3xl font-bold text-black mb-6">All Messages</h1>

          {/* Search */}
          <div className="relative mb-8">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Start typing to search"
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#34b38a] transition-colors"
            />
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages</h2>

          {/* List */}
          <div className="space-y-3">
            {loading ? (
              <p className="text-center text-gray-400 py-10">Loading...</p>
            ) : displayList.length === 0 ? (
              <p className="text-center text-gray-400 py-10">No conversations found.</p>
            ) : (
              displayList.map((chat) => (
                <div
                  key={chat.chatId}
                  onClick={() => handleChatClick(chat)}
                  className={`flex items-center p-4 bg-white rounded-[25px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] cursor-pointer border-2 transition-all duration-200 ${
                    activeId === chat.chatId
                      ? "border-[#34b38a] bg-[#f1faf8]"
                      : "border-transparent hover:border-[#34b38a]/40"
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-[16px] overflow-hidden bg-gray-100">
                      {chat.avatar ? (
                        <img
                          src={chat.avatar}
                          alt={chat.name}
                          className="w-full h-full object-cover"
                          style={{ background: "transparent" }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 font-bold text-lg">
                          {chat.name?.[0]?.toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-[#34b38a] rounded-full border-2 border-white" />
                  </div>

                  {/* Info */}
                  <div className="ml-4 flex-1 min-w-0 text-left">
                    <h3 className="font-bold text-gray-900 text-sm">{chat.name}</h3>
                    <p className="text-xs text-gray-400 truncate">{chat.lastMessage || "Start a conversation"}</p>
                  </div>

                  {/* Time + Unread */}
                  <div className="ml-2 flex flex-col items-end gap-1 flex-shrink-0">
                    <span className={`text-xs ${chat.unread ? "text-[#34b38a] font-semibold" : "text-gray-400"}`}>
                      {formatRelativeTime(chat.time)}
                    </span>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 bg-[#34b38a] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FAB */}
          <button
            className="fixed bottom-8 left-[340px] w-12 h-12 bg-[#34b38a] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2a9070] transition-colors z-30"
            title="New message"
          >
            <IoAddCircle size={28} className="text-white" />
          </button>
        </div>
      </main>

      {/* ── Right Sidebar: Chat Panel or Profile Sidebar ── */}
      <aside
        className={`bg-white h-screen sticky top-0 shadow-xl z-20 flex flex-col transition-all duration-500 ${
          activeChat ? "w-[420px]" : "w-fit lg:w-72"
        }`}
      >
        {activeChat ? (
          <ChatPanel
            activeChat={activeChat}
            messages={messages}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sending={sending}
            sendMessage={sendMessage}
            currentUserId={currentUserId}
            onClose={() => { setActiveChat(null); setActiveId(null); setMessages([]); }}
          />
        ) : (
          <div className="pt-24 px-4 h-full">
            <Profilesidebar />
          </div>
        )}
      </aside>

    </div>
  );
}