"use client";

import React, { useState,useEffect } from "react";
import { Menu, Search } from "lucide-react";
import Sidebar from "@/components/sidebar/sideBar";
import ChatItem from "@/components/chat/chatItem";
import ChatWindow from "@/components/chat/chatWindow";
import { useScoket } from "@/hooks/useSocket";

interface Message {
  text : string;
  sender : string;
}


export default function ChatPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const socket = useScoket();

  useEffect(() => {
    socket.on("receive_message", (data: Message) => {
      console.log(data)
      // setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const msgData = {
      text: message,
      sender: "User",
    };

    socket.emit("send_message", msgData);
    setMessages((prev) => [...prev, msgData]);
    setMessage("");
  };
  


  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gray-100">
      {/* Chats List */}
      <div
        className={`flex flex-col w-full md:w-96 bg-white border-r border-gray-200 flex`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-white shadow-sm px-6 py-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">ChatMe</h1>
          </div>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className=" rounded-full h-8"
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
         
        </div>
      </div>

      {/* Chat Window or Placeholder */}
      <div className="flex-1">
          <ChatWindow
            user={{
              name: "Kunal Deshmukh",
              initials: "Hi",
              status: "Online",
            }}
          />
      </div>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </div>
  );
}