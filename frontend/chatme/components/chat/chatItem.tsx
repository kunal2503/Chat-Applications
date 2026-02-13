import React from "react";

interface ChatItemProps {
  name: string;
  initials: string;
  lastMessage: string;
  time: string;
  unread?: number;
  onClick: () => void;
  isSelected: boolean;
}

export default function ChatItem({
  name,
  initials,
  lastMessage,
  time,
  unread,
  onClick,
  isSelected,
}: ChatItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-4 p-4 cursor-pointer transition-colors ${
        isSelected ? "bg-emerald-50" : "hover:bg-gray-50"
      }`}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {initials}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <div>

          <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate mt-1">{lastMessage}</p>
          </div>
          <div className="flex  flex-col items-center justify-center gap-2">
          <p className="text-xs text-gray-500">{time}</p>
      {unread && (
        <div className="px-2 py-1  bg-emerald-500 text-white text-xs font-bold rounded-full min-w-5 text-center">
          {unread}
        </div>
      )}
      </div>
        </div>


      </div>
    </div>
  );
}