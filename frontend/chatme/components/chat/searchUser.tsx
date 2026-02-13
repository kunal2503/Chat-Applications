"use client";

export default function SearchUser() {
  return (
    <div className="px-4 py-3 border-b bg-white">
      <input
        type="text"
        placeholder="Search users..."
        className="
          w-full
          px-4 py-2
          text-sm sm:text-base
          border border-gray-300
          rounded-full
          outline-none
          focus:ring-2 focus:ring-blue-400
        "
      />
    </div>
  );
}
