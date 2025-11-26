"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Dropdown from "./dropdown";

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false); // <--- MOBILE ONLY

  return (
    <nav className="w-full bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/beranda/logo_navbar.png"
            alt="Logo YBMM"
            width={120}
            height={120}
            className="h-12 w-auto"
            unoptimized
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 transition">
            Beranda
          </Link>

          {/* Desktop Dropdown */}
          <Dropdown />

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

          <Link href="/id" className="hover:text-blue-600 transition">
            ID
          </Link>

          <Link
            href="/hubungi-kami"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden text-xl"
        >
          ☰
        </button>
      </div>

      {/* ======================= */}
      {/*      MOBILE SECTION     */}
      {/* ======================= */}

      {openMobile && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 flex flex-col gap-4">

          <Link href="/" className="hover:text-blue-600">Beranda</Link>

          {/* MOBILE DROPDOWN */}
          <button
            onClick={() => setOpenMobileDropdown(!openMobileDropdown)}
            className="flex items-center gap-2 w-full text-left hover:text-blue-600"
          >
            Tentang Kami
            <span>▼</span>
          </button>

          {openMobileDropdown && (
            <div className="ml-4 flex flex-col gap-2">
              <Link href="/tentang" className="hover:text-blue-600">
                Profil Yayasan
              </Link>
              <Link href="/kepengurusan" className="hover:text-blue-600">
                Kepengurusan
              </Link>
            </div>
          )}
          {/* END MOBILE DROPDOWN */}

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
