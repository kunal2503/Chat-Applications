"use client";

import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import Sidebar from "@/components/sidebar/sideBar";
import ChatItem from "@/components/chat/chatItem";
import ChatWindow from "@/components/chat/chatWindow";

type Chat = {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
  status: string;
  unread?: number;
};

export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const chats: Chat[] = [
    {
      id: "1",
      name: "John Doe",
      initials: "JD",
      lastMessage: "I'm doing great! 😊",
      time: "10:33",
      status: "Active now",
    },
    {
      id: "2",
      name: "Jane Smith",
      initials: "JS",
      lastMessage: "Hey, let's catch up soon!",
      time: "Yesterday",
      status: "Online",
      unread: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      initials: "JS",
      lastMessage: "Hey, let's catch up soon!",
      time: "Yesterday",
      status: "Online",
      unread: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      initials: "JS",
      lastMessage: "Hey, let's catch up soon!",
      time: "Yesterday",
      status: "Online",
      unread: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      initials: "JS",
      lastMessage: "Hey, let's catch up soon!",
      time: "Yesterday",
      status: "Online",
      unread: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      initials: "JS",
      lastMessage: "Hey, let's catch up soon!",
      time: "Yesterday",
      status: "Online",
      unread: 3,
    },
    {
      id: "2",
      name: "Jane Smith",
      initials: "JS",
      lastMessage: "Hey, let's catch up soon!",
      time: "Yesterday",
      status: "Online",
      unread: 3,
    },
    {
      id: "3",
      name: "Alex Johnson",
      initials: "AJ",
      lastMessage: "Thanks for the help!",
      time: "Monday",
      status: "Last seen 2 hours ago",
    },
  ];

  const selectedChat = chats.find((c) => c.id === selectedChatId);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gray-100">
      {/* Chats List */}
      <div
        className={`flex flex-col w-full md:w-96 bg-white border-r border-gray-200 ${
          selectedChatId ? "hidden md:flex" : "flex"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white shadow-sm px-4 py-4">
          <div className="flex items-center gap-4">
            {/* <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
              ME
            </div> */}
            <h1 className="text-xl font-bold text-gray-900">ChatMe</h1>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className=" hover:bg-gray-100 rounded-full"
          >{isSidebarOpen ? null :

            <Menu className="w-6 h-6 text-emerald-600" />
          }
          </button>
        </div>

        {/* Search */}
        <div className="px-4 pb-4  flex items-center justify-center mt-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 shadow-inner">
            <input
              type="text"
              placeholder="Search or start new chat"
              className="flex-1 px-8 py-4 bg-transparent outline-none ml-3 text-gray-700"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <ChatItem
              key={chat.id}
              name={chat.name}
              initials={chat.initials}
              lastMessage={chat.lastMessage}
              time={chat.time}
              unread={chat.unread}
              onClick={() => setSelectedChatId(chat.id)}
              isSelected={selectedChatId === chat.id}
            />
          ))}
        </div>
      </div>

      {/* Chat Window or Placeholder */}
      <div className="flex-1">
        {selectedChat ? (
          <ChatWindow
            user={{
              name: selectedChat.name,
              initials: selectedChat.initials,
              status: selectedChat.status,
            }}
            onBack={() => setSelectedChatId(null)}
          />
        ) : (
          <div className={`h-full flex   flex-col items-center justify-center text-center px-10`}>
            <div className="w-48 h-48 bg-gray-200 rounded-full mb-8 opacity-20" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your messages</h2>
            <p className="text-gray-500">Select a chat to start messaging</p>
          </div>
        )}
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
}