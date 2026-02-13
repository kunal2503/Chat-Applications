"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Page-specific content (subtitle, form card, footer link) */}
        {children}
      </div>
    </div>
  );
}