"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export default function Password({ value, onChange, placeholder }: PasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition"
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}