"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <nav className="w-full bg-grey shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          YBMM
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Beranda */}
          <Link href="/" className="hover:text-blue-600 transition">
            Beranda
          </Link>

          {/* Tentang Kami + dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Tentang Kami
              <span className="text-sm">▼</span>
            </button>

            {openDropdown && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-48">
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
            )}
          </div>

          {/* Next menu */}
          <Link href="/program" className="hover:text-blue-600 transition">
            Program
          </Link>

          <Link href="/metode" className="hover:text-blue-600 transition">
            Metode
          </Link>

          <Link href="/pencapaian" className="hover:text-blue-600 transition">
            Pencapaian
          </Link>

          <Link href="/thunderbird" className="hover:text-blue-600 transition">
            Thunderbird
          </Link>

          {/* ID page */}
          <Link href="/id" className="hover:text-blue-600 transition">
            ID
          </Link>

          {/* Hubungi Kami */}
          <Link
            href="/hubungi-kami"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="md:hidden bg-grey border-t shadow-md px-6 py-4 flex flex-col gap-4">

          <Link href="/" className="hover:text-blue-600">Beranda</Link>

          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="flex items-center gap-2 w-full text-left hover:text-blue-600"
          >
            Tentang Kami
            <span>▼</span>
          </button>

          {openDropdown && (
            <div className="ml-4 flex flex-col gap-2">
              <Link href="/tentang" className="hover:text-blue-600">
                Profil Yayasan
              </Link>
              <Link href="/kepengurusan" className="hover:text-blue-600">
                Kepengurusan
              </Link>
            </div>
          )}

          <Link href="/program" className="hover:text-blue-600">Program</Link>
          <Link href="/metode" className="hover:text-blue-600">Metode</Link>
          <Link href="/pencapaian" className="hover:text-blue-600">Pencapaian</Link>
          <Link href="/thunderbird" className="hover:text-blue-600">Thunderbird</Link>
          <Link href="/id" className="hover:text-blue-600">ID</Link>

          <Link
            href="/hubungi-kami"
            className="px-4 py-2 rounded-md bg-blue-600 text-white text-center"
          >
            Hubungi Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
