import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">

      {/* =============================
          HERO
      ============================== */}
      <section className="w-full bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow p-10">
          
          <h3 className="text-xs font-semibold text-yellow-600 mb-3 tracking-wide uppercase">
            TRANSFORMASI DIGITAL UMKM
          </h3>

          <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
            Mendorong UMKM Naik Kelas Lewat Teknologi dan <br />
            Pendampingan Berkelanjutan.
          </h1>

          <div className="flex justify-center gap-4 mt-8">
            <button className="px-6 py-2 bg-yellow-400 text-black rounded-md shadow font-semibold text-sm">
              Kenali Yayasan
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md shadow font-semibold text-sm">
              Lihat Program Kami
            </button>
          </div>
        </div>
      </section>

      {/* =============================
          TENTANG KAMI
      ============================== */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div className="w-full flex justify-center">
            <Image
              src="/tentang/tentang_kami.jpg"
              alt="Tentang Kami"
              width={350}
              height={250}
              className="rounded-xl w-full max-w-[360px] h-64 object-cover bg-gray-200"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black mb-4">Tentang Kami</h2>

            <p className="text-black/80 leading-relaxed text-[15px] mb-6">
              Yayasan Bina Mikro Mandiri adalah lembaga nirlaba yang mendukung pengembangan
              kemampuan usaha UMKM melalui literasi, pendampingan, dan inovasi untuk
              memperkuat ketahanan bisnis digital.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Tahun berdiri : 2016</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Penerima manfaat : 12,500+</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">Wilayah : Nasional</span>
            </div>
          </div>
        </div>
      </section>

      {/* =============================
          TRANSFORMASI UMKM
      ============================== */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-black mb-14">
            Transformasi UMKM Menuju Masa Depan Digital
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <Image
              src="/beranda/transformasi1.jpg"
              alt="Transformasi 1"
              width={300}
              height={160}
              className="rounded-xl w-full h-44 object-cover bg-gray-200"
            />
            <Image
              src="/beranda/transformasi2.jpg"
              alt="Transformasi 2"
              width={300}
              height={160}
              className="rounded-xl w-full h-44 object-cover bg-gray-200"
            />
            <Image
              src="/beranda/transformasi3.jpg"
              alt="Transformasi 3"
              width={300}
              height={160}
              className="rounded-xl w-full h-44 object-cover bg-gray-200"
            />
          </div>

          <p className="text-black/80 leading-relaxed text-[15px] mb-4">
            Di YBMM, kami percaya bahwa transformasi UMKM masa depan dimulai dari penguatan
            kapasitas pelaku usaha — bukan hanya sekadar produksi tetapi juga literasi keuangan
            dan literasi digital.
          </p>

          <ul className="list-disc ml-6 text-black/80 leading-relaxed text-[15px]">
            <li>Meningkatkan efisiensi operasional dan produksi.</li>
            <li>Memperkuat kemampuan adaptasi UMKM ke ekosistem digital.</li>
            <li>Mengembangkan literasi keuangan serta inklusi digital.</li>
          </ul>
        </div>
      </section>

      {/* =============================
          PROGRAM KAMI
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-black mb-16">
          Program Kami
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { n: "1", title: "Peningkatan Literasi Digital" },
            { n: "2", title: "Pendampingan UMKM" },
            { n: "3", title: "Pelatihan Keuangan" },
            { n: "4", title: "Akses Pasar Digital" },
          ].map((item) => (
            <div key={item.n} className="bg-[#D8E9D3] p-6 rounded-xl text-center shadow">
              <p className="text-4xl font-bold text-black mb-2">{item.n}</p>
              <p className="font-semibold text-black mb-3">{item.title}</p>
              <p className="text-black/70 text-sm leading-relaxed">
                Program untuk membantu UMKM berkembang melalui edukasi dan pendampingan.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =============================
          PEMBINAAN
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFB]">
        <h2 className="text-3xl text-center font-bold text-black mb-16">
          Bagaimana Kami Membina UMKM ?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src="/beranda/tatap_muka.jpg"
              alt="Tatap Muka"
              width={400}
              height={192}
              className="rounded-xl w-full h-52 object-cover mb-5 bg-gray-200"
            />
            <h3 className="font-semibold text-black mb-2">Tatap Muka</h3>
            <p className="text-black/70 text-sm mb-4 leading-relaxed">
              Pendampingan langsung untuk memahami kondisi usaha, memberi arahan,
              dan menentukan strategi lanjutan.
            </p>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md text-sm">
              Lihat selengkapnya
            </button>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Image
              src="/beranda/seminar_webinar.jpg"
              alt="Seminar & Webinar"
              width={400}
              height={192}
              className="rounded-xl w-full h-52 object-cover mb-5 bg-gray-200"
            />
            <h3 className="font-semibold text-black mb-2">Seminar & Webinar</h3>
            <p className="text-black/70 text-sm mb-4 leading-relaxed">
              Edukasi bersama mentor berpengalaman, praktisi industri, dan profesional.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm">
              Lihat selengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* =============================
          PENCAPAIAN
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-3xl font-bold text-center text-black mb-16">
          Pencapaian Kegiatan
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            ["8815+", "Penerima Literasi Digital"],
            ["20.205+", "Peserta Literasi Keuangan"],
            ["1400+", "Penyuluhan Kreatif Mikro"],
            ["763+", "UMKM Naik Kelas"],
          ].map(([value, label]) => (
            <div key={value} className="bg-[#E5F3DE] p-6 rounded-xl text-center shadow-md">
              <p className="text-3xl font-bold text-green-700 mb-1">{value}</p>
              <p className="text-black/70 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =============================
          LEGALITAS
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFB]">
        <h2 className="text-3xl text-center font-bold text-black mb-14">
          Yayasan Bina Mikro Mandiri
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-md">
          <p className="text-black/70 text-center mb-8 text-[15px]">
            Identitas & registrasi lembaga untuk kredibilitas dan kemitraan.
          </p>

          <div className="space-y-4 text-sm text-black">
            <div className="flex justify-between"><span>Akte Pendirian:</span><b>AHU-0005022.AH.01.12 (2018)</b></div>
            <div className="flex justify-between"><span>NIK:</span><b>1256006505445</b></div>
            <div className="flex justify-between"><span>NPWP:</span><b>148802.13/9/2024</b></div>
            <div className="flex justify-between"><span>UBI:</span><b>K3QNP972533</b></div>
          </div>
        </div>
      </section>

    </div>
  );
}
