import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#7DB5E9] text-gray-900 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* BRAND */}
        <div className="flex flex-col items-start">
          <img
            src="/logo_footer.png"
            alt="Logo YBMM"
            className="w-20 mb-3"
          />

          <h2 className="text-base font-semibold">Bina Mikro Mandiri</h2>

          <p className="text-xs mt-2 leading-relaxed max-w-xs">
            Yayasan Bina Mikro Mandiri adalah organisasi nirlaba yang berfokus
            pada pengembangan usaha mikro melalui pendidikan dan advokasi.
          </p>
        </div>

        {/* TAUTAN */}
        <div>
          <h3 className="text-base font-semibold mb-3">Tautan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/tentang" className="hover:underline">Tentang Kami</a></li>
            <li><a href="/program" className="hover:underline">Program</a></li>
            <li><a href="/pencapaian" className="hover:underline">Pencapaian</a></li>
            <li><a href="/thunderbird" className="hover:underline">Thunderbird</a></li>
          </ul>
        </div>

        {/* HUBUNGI KAMI */}
        <div>
          <h3 className="text-base font-semibold mb-3">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaFacebookF />
              <a href="https://www.facebook.com/INAmikro/" target="_blank">inamikro</a>
            </li>
            <li className="flex items-center gap-2">
              <FaXTwitter />
              <a href="https://x.com/inamikro" target="_blank">INAmikro</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram />
              <a href="https://www.instagram.com/inamikro" target="_blank">inamikro</a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube />
              <a href="https://www.youtube.com/@INAmikro" target="_blank">INAmikro</a>
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/company/pt-mikrobisnis-digital-sejahtera"
                target="_blank"
              >
                PT. Mikrobisnis Digital Sejahtera
              </a>
            </li>
          </ul>
        </div>

        {/* MAP — always visible (mobile & desktop) */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3164032604374!2d106.829176!3d-6.235247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4fc1cba63%3A0xc77cf354e98e5d2e!2sTempo%20Scan%20Tower!5e0!3m2!1sid!2sid!4v1700000000000"
            className="rounded-md shadow w-full h-[130px] md:h-[170px]"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <p className="text-xs mt-2 leading-relaxed">
            Gedung Tempo Scan Tower<br />
            Lantai 32 Jl. HR Rasuna Said Kav. 3-4, Jakarta Selatan
          </p>
        </div>

      </div>

      <div className="border-t border-gray-400 mt-8 pt-3 text-center text-xs">
        © 2025 INAmikro. PT Mikrobisnis Digital Sejahtera. All rights reserved.
      </div>
    </footer>
  );
}
