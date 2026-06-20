import React, { useEffect, useRef } from "react";
import {
  IoArrowBack,
  IoCallOutline,
  IoVideocamOutline,
  IoEllipsisVertical,
  IoMicOutline,
  IoLinkOutline,
  IoSendOutline,
} from "react-icons/io5";

function formatRelativeTime(iso) {
  if (!iso) return "";
  const date = new Date(iso);
  const now = new Date();
  const diffDays = Math.floor((now - date) / 86400000);
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "yesterday";
  return date.toLocaleDateString([], { day: "numeric", month: "numeric", year: "numeric" });
}

function formatTime(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function ChatPanel({
  activeChat,
  messages,
  newMessage,
  setNewMessage,
  sending,
  sendMessage,
  currentUserId,
  onClose,
}) {
  const messagesEndRef = useRef(null);

  // ── Auto-scroll to latest message ──
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // ── Group messages by date ──
  const groupedMessages = messages.reduce((groups, msg) => {
    const label = formatRelativeTime(msg.createdAt);
    if (!groups[label]) groups[label] = [];
    groups[label].push(msg);
    return groups;
  }, {});

  return (
    <div className="flex flex-col h-full bg-white rounded-r-[40px] overflow-hidden">

      {/* ── Header ── */}
      <div className="p-5 border-b border-gray-100 flex items-center gap-4">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-[#34b38a] transition-colors"
        >
          <IoArrowBack size={22} />
        </button>

        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100">
          {activeChat.avatar ? (
            <img
              src={activeChat.avatar}
              alt={activeChat.name}
              className="w-full h-full object-cover"
              style={{ background: "transparent" }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-bold">
              {activeChat.name?.[0]?.toUpperCase()}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-gray-900 truncate">{activeChat.name}</h4>
          <p className="text-xs text-[#34b38a]">Online</p>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <IoCallOutline size={20} className="cursor-pointer hover:text-[#34b38a]" />
          <IoVideocamOutline size={20} className="cursor-pointer hover:text-[#34b38a]" />
          <IoEllipsisVertical size={20} className="cursor-pointer hover:text-[#34b38a]" />
        </div>
      </div>

      {/* ── Messages Area ── */}
      <div className="flex-1 overflow-y-auto p-5 space-y-2 bg-gray-50">
        {messages.length === 0 ? (
          <p className="text-center text-gray-400 text-sm mt-10">No messages yet. Say hi 👋</p>
        ) : (
          Object.entries(groupedMessages).map(([dateLabel, msgs]) => (
            <div key={dateLabel}>
              <div className="text-center text-xs text-gray-400 my-3">{dateLabel}</div>
              {msgs.map((m, i) => {
                const isMine =
                  m.sender?._id === currentUserId || m.sender === currentUserId;
                return (
                  <div
                    key={i}
                    className={`flex mb-1 ${isMine ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm ${
                        isMine
                          ? "bg-[#34b38a] text-white rounded-br-sm"
                          : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                      }`}
                    >
                      <p>{m.content}</p>
                      <span className={`text-[10px] mt-1 block ${isMine ? "text-green-100 text-right" : "text-gray-400"}`}>
                        {formatTime(m.createdAt)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* ── Input Area ── */}
      <div className="p-4 border-t bg-white flex items-center gap-3">
        <button className="text-gray-400 hover:text-[#34b38a] flex-shrink-0">
          <IoLinkOutline size={22} />
        </button>
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#34b38a] transition-colors"
          placeholder="Type a message..."
        />
        <button className="text-gray-400 hover:text-[#34b38a] flex-shrink-0">
          <IoMicOutline size={22} />
        </button>
        <button
          onClick={sendMessage}
          disabled={sending || !newMessage.trim()}
          className="bg-[#34b38a] text-white rounded-full p-2 flex-shrink-0 hover:bg-[#2a9070] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <IoSendOutline size={18} />
        </button>
      </div>

    </div>
  );
}