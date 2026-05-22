import React, { useState, useEffect } from "react";
import {
  IoSearchOutline,
  IoAdd,
  IoCheckmarkDoneOutline,
  IoArrowBack,
  IoCallOutline,
  IoVideocamOutline,
  IoEllipsisVertical,
  IoMicOutline,
  IoLinkOutline,
  IoSendOutline,
} from "react-icons/io5";
import Profilesidebar from "./Profilesidebar";

export default function Messages() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const API_URL = "https://api-zyzn.onrender.com/api/messages";
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    fetch(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : data.messages || [];
        setConversations(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching conversations:", err);
        setLoading(false);
      });
  }, [token]);

  const handleChatClick = (conv) => {
    setActiveId(conv.chatId);
    setActiveChat(conv);
    fetch(`${API_URL}/${conv.chatId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages(Array.isArray(data) ? data : data.messages || []);
      })
      .catch((err) => console.error("Error fetching messages:", err));
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !activeChat) return;

    try {
      const response = await fetch(`${API_URL}/${activeChat.chatId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: newMessage }),
      });

      if (response.ok) {
        setMessages([
          ...messages,
          { text: newMessage, sender: "me", time: "Just now" },
        ]);
        setNewMessage(""); 
      }
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-row-reverse items-stretch overflow-x-hidden" dir="rtl">
      <main className="flex-1 h-screen overflow-y-auto border-l border-gray-50">
        <div className="max-w-5xl mx-auto p-10 flex flex-col" dir="ltr">
          <h1 className="text-4xl font-bold text-left text-black mb-10">All Messages</h1>

          <div className="relative mb-12 w-full max-w-[600px]">
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-[#34b38a] size-6" />
            <input
              type="text"
              placeholder="Start typing to search"
              className="w-full h-[48px] pl-14 pr-6 rounded-full border border-gray-100 outline-none shadow-sm focus:border-[#34b38a] transition-all"
            />
          </div>

          <h2 className="text-2xl font-semibold text-left text-gray-900 mb-6">Messages</h2>

          <div className="space-y-6">
            {loading ? (
              <p className="text-center text-gray-400">Loading...</p>
            ) : (
              conversations.map((conv) => (
                <div
                  key={conv.chatId}
                  onClick={() => handleChatClick(conv)}
                  className={`flex items-center p-4 bg-white rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] cursor-pointer border-2 transition-all max-w-5xl ${
                    activeId === conv.chatId ? "border-[#34b38a] bg-[#f0f9f6]" : "border-transparent"
                  }`}
                >
                  <img
                    src={conv.contact?.avatar}
                    className="w-16 h-16 rounded-[20px] object-cover shrink-0"
                    alt=""
                  />
                  <div className="ml-5 flex-1 text-left">
                    <div className="flex justify-between items-center">
                      <h3 className="font-bold text-gray-900 text-lg">{conv.contact?.name}</h3>
                      <span className="text-xs text-gray-400">{conv.lastTime || "6:00 pm"}</span>
                    </div>
                    <p className="text-sm text-gray-400 truncate w-48">{conv.lastMessage}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      <aside 
        className={`bg-white h-screen sticky top-0 shadow-xl z-20 flex flex-col transition-all duration-500 ${
          activeChat ? 'w-[450px]' : 'w-fit lg:w-72'
        }`}
      >
        {activeChat ? (
          <div className="flex flex-col h-full bg-white rounded-l-[40px] overflow-hidden" dir="ltr">
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b border-gray-50">
              <div className="flex items-center gap-4">
                <button onClick={() => { setActiveChat(null); setActiveId(null); }} className="text-gray-400 hover:text-black">
                  <IoArrowBack size={24} />
                </button>
                <div>
                  <h4 className="font-bold text-gray-900">{activeChat.contact?.name}</h4>
                  <p className="text-xs text-[#34b38a]">Online</p>
                </div>
              </div>
              <div className="flex gap-4 text-gray-500">
                <IoCallOutline size={22} className="cursor-pointer hover:text-black" />
                <IoVideocamOutline size={22} className="cursor-pointer hover:text-black" />
                <IoEllipsisVertical size={22} className="cursor-pointer hover:text-black" />
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]">
              <p className="text-center text-xs text-gray-400 my-4">Today</p>
              
              {messages.map((m, idx) => (
                <div key={idx} className={`flex flex-col ${m.sender === "me" ? "items-end" : "items-start"}`}>
                  <div className={`${m.sender === "me" ? "bg-[#999]" : "bg-[#34b38a]"} text-white p-4 rounded-2xl ${m.sender === 'me' ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm max-w-[85%]`}>
                    <p className="text-sm font-medium">{m.text}</p>
                    <span className="text-[10px] opacity-70 block text-right mt-1">{m.time || "Now"}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white border-t border-gray-50">
              <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-full border border-gray-100">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message"
                  className="flex-1 bg-transparent outline-none px-4 text-sm"
                />
                <div className="flex items-center gap-2 pr-2">
                  <IoMicOutline className="text-gray-400 cursor-pointer" size={20} />
                  <IoLinkOutline className="text-gray-400 cursor-pointer" size={20} />
                  <button onClick={sendMessage} className="bg-[#34b38a] text-white p-2 rounded-full shadow-md hover:bg-[#2da17c] transition-all">
                    <IoSendOutline size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="pt-24 px-2 lg:px-4 h-full overflow-y-auto" dir="ltr">
            <Profilesidebar />
          </div>
        )}
      </aside>

    </div>
  );
}