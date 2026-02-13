"use client";

import React, { useState } from "react";
import {
  Send,
  Phone,
  Video,
  Search as SearchIcon,
  Info,
  Smile,
  Paperclip,
  ArrowLeft,
} from "lucide-react";

interface ChatWindowProps {
  user: {
    name: string;
    initials: string;
    status: string;
  };
  onBack?: () => void;
}

export default function ChatWindow({ user, onBack }: ChatWindowProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello 👋", sender: "other", time: "10:30" },
    { id: 2, text: "Hi there!", sender: "me", time: "10:31" },
    { id: 3, text: "How are you?", sender: "other", time: "10:32" },
    { id: 4, text: "I'm doing great! 😊", sender: "me", time: "10:33" },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: message,
        sender: "me",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="flex items-center px-6 py-2 bg-white border-b border-gray-200 shadow-sm">
        {onBack && (
          <button
            onClick={onBack}
            className="mr-4 md:hidden p-2 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-6 h-6 text-emerald-600" />
          </button>
        )}

        <div className="flex items-center gap-4 flex-1">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
            {user.initials}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.status}</p>
          </div>
        </div>

        {/* <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-full"><Video className="w-5 h-5 text-emerald-600" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full"><Phone className="w-5 h-5 text-emerald-600" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full"><SearchIcon className="w-5 h-5 text-emerald-600" /></button>
          <button className="p-2 hover:bg-gray-100 rounded-full"><Info className="w-5 h-5 text-emerald-600" /></button>
        </div> */}
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-6 space-y-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3f4f6' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${
                msg.sender === "me"
                  ? "bg-emerald-500 text-white rounded-br-none"
                  : "bg-white text-gray-900 rounded-bl-none border border-gray-200"
              }`}
            >
              <p className="text-sm leading-relaxed">{msg.text}</p>
              <p className={`text-xs mt-2 ${msg.sender === "me" ? "text-emerald-100" : "text-gray-500"} text-right`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="flex items-center gap-3">
          {/* <button className="p-3 hover:bg-gray-100 rounded-full"><Smile className="w-6 h-6 text-emerald-600" /></button>
          <button className="p-3 hover:bg-gray-100 rounded-full"><Paperclip className="w-6 h-6 text-emerald-600" /></button> */}
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
            className="flex-1 px-5 py-3 bg-gray-100 rounded-full outline-none focus:bg-gray-200 transition"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-emerald-500 hover:bg-emerald-600 rounded-full transition shadow-lg"
          >
            <Send className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}