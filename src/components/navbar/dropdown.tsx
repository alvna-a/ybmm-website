"use client";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button className="flex items-center gap-1 hover:text-blue-600 transition">
        Tentang Kami
        <span className="text-sm">▼</span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48 z-50 transition-all duration-150 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link
          className="block px-4 py-2 hover:bg-gray-100"
          href="/tentang"
        >
          Profil Yayasan
        </Link>
        <Link
          className="block px-4 py-2 hover:bg-gray-100"
          href="/kepengurusan"
        >
          Kepengurusan
        </Link>
      </div>
    </div>
  );
}
