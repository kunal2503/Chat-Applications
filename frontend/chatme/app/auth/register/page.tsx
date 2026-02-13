"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Password from "@/components/chat/password";
import { MessageCircle } from "lucide-react";

export default function Register() {
  const router = useRouter();

  const [userData, setUserData] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/v1/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        router.push("/auth/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">

      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto flex items-center justify-center bg-emerald-500 rounded-xl">
            <MessageCircle className="w-7 h-7 text-white" />
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-900">
            Create account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join and start chatting
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Username */}
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                id="username"
                value={userData.username}
                onChange={handleChanges}
                required
                placeholder="john_doe"
                className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                value={userData.email}
                onChange={handleChanges}
                required
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-600">Password</label>
              <div className="mt-1">
                <Password
                  value={userData.password}
                  onChange={handleChanges}
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-lg transition"
            >
              Sign Up
            </button>

          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}
