"use client";

import React from "react";
import { X, User, Settings, LogOut } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 w-72 bg-white shadow-2xl z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-end p-5 shadow-sm">
          {/* <h2 className="text-xl font-semibold text-gray-800">Menu</h2> */}
          <X
            size={28}
            className="text-gray-600 cursor-pointer hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="p-6">
          {/* <div className="flex items-center gap-4 mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              ME
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900">Your Name</p>
              <p className="text-sm text-gray-500">you@example.com</p>
            </div>
          </div> */}

          <nav className="space-y-3">
            <button className="flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-emerald-50 transition text-gray-700">
              <User size={22} />
              <span className="font-medium">Profile</span>
            </button>
            <button className="flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-emerald-50 transition text-gray-700">
              <Settings size={22} />
              <span className="font-medium">Settings</span>
            </button>
            <button className="flex items-center gap-4 w-full px-4 py-3 rounded-lg hover:bg-emerald-50 transition text-red-600">
              <LogOut size={22} />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}