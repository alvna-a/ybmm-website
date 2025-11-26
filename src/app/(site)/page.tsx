import Image from "next/image";

export default function HomePage() {
  // Data array for Program Kami section
  const programList = [
    {
      n: "1",
      title: "Pendampingan Literasi Terkait Legalitas Berusaha",
      desc: "Membekali UMKM dengan pemahaman legalitas agar usaha dapat berjalan aman, tertata, dan siap dikembangkan."
    },
    {
      n: "2",
      title: "Pendampingan Literasi Terkait Keuangan, Digital & Perbankan",
      desc: "Membekali UMKM dengan kemampuan kelola keuangan, pemanfaatan digital, dan akses layanan perbankan."
    },
    {
      n: "3",
      title: "Pendampingan Pengembangan Usaha & Jaringan Usaha",
      desc: "Mendukung UMKM memperluas pasar, memperkuat kualitas usaha, dan membangun jejaring bisnis."
    },
    {
      n: "4",
      title: "Pendidikan Bisnis Global (Thunderbird)",
      desc: "Memberikan wawasan internasional melalui materi bisnis global yang aplikatif untuk UMKM."
    },
  ];
  return (
    <div className="w-full flex flex-col">

      {/* =============================
          HERO
      ============================== */}
      <section className="w-full bg-[#F5F7FA] py-20 px-6 md:px-12 lg:px-24">
        <div className="relative max-w-4xl mx-auto rounded-2xl shadow overflow-hidden min-h-[340px] flex items-center justify-center">
          {/* Gambar frame */}
          <Image
            src="/beranda/atas.jpg"
            alt="Hero"
            fill
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover w-full h-full"
            priority
          />
          {/* Overlay putih semi transparan */}
          <div className="absolute inset-0 bg-white/90" />
          {/* Konten teks dan tombol */}
          <div className="relative z-10 text-center px-4 py-10">
            <h3 className="text-xs font-semibold text-yellow-600 mb-3 tracking-wide uppercase">
              TRANSFORMASI DIGITAL UMKM
            </h3>
            <h1 className="text-3xl md:text-4xl font-bold text-black leading-snug">
              Mendorong UMKM Naik Kelas Lewat Teknologi dan <br />
              Pendampingan Berkelanjutan.
            </h1>
            <div className="flex justify-center gap-4 mt-8">
              <button className="px-5 py-2 bg-yellow-400 text-black rounded-md shadow text-sm font-semibold">
                Kenali Yayasan
              </button>
              <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow text-sm font-semibold">
                Lihat Program Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =============================
          TENTANG KAMI
      ============================== */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">


          {/* Image Frame */}
          <div className="w-full flex justify-center">
            <Image
              src="/tentang/tentang_kami.jpg"
              alt="Tentang Kami"
              width={350}
              height={250}
              className="rounded-xl object-cover w-full max-w-[350px] h-64 bg-gray-200"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">Tentang Kami</h2>

            <p className="text-gray-700 mb-6 leading-relaxed text-[15px]">
              Yayasan Bina Mikro Mandiri adalah lembaga nirlaba yang mendukung pengembangan
              kemampuan usaha UMKM melalui literasi, pendampingan, dan inovasi untuk
              memperkuat ketahanan bisnis digital.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Tahun berdiri : 2016
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Penerima manfaat : 12,500+
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Wilayah : Nasional
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =============================
          TRANSFORMASI UMKM
      ============================== */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFB]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14 text-black">
            Transformasi UMKM Menuju Masa Depan Digital
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            <Image
              src="/beranda/transformasi1.jpg"
              alt="Transformasi 1"
              width={300}
              height={160}
              className="rounded-xl object-cover w-full h-40 bg-gray-200"
            />
            <Image
              src="/beranda/transformasi2.jpg"
              alt="Transformasi 2"
              width={300}
              height={160}
              className="rounded-xl object-cover w-full h-40 bg-gray-200"
            />
            <Image
              src="/beranda/transformasi3.jpg"
              alt="Transformasi 3"
              width={300}
              height={160}
              className="rounded-xl object-cover w-full h-40 bg-gray-200"
            />
          </div>

          <p className="text-gray-700 leading-relaxed text-[15px] mb-4">
            Di YBMM, kami percaya bahwa transformasi UMKM masa depan dimulai dari
            penguatan kapasitas pelaku usaha — bukan hanya sekadar produksi tetapi juga
            literasi keuangan dan literasi digital.
          </p>

          <ul className="list-disc ml-6 text-gray-700 leading-relaxed text-[15px]">
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

        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black">
          Program Kami
        </h2>

        {/* Deskripsi di bawah judul */}
        <p className="text-center text-black/70 max-w-3xl mx-auto mt-4 leading-relaxed text-[15px]">
          Melalui beberapa rangkaian pendampingan praktis, YBMM dapat membantu pelaku UMKM memperkuat 
          legalitas, mengatur keuangan, memperluas pasar, dan mendapatkan wawasan bisnis global —
          supaya bisnis tumbuh lebih siap dan berkelanjutan.
        </p>

        {/* Grid Program */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-16">
          {programList.map((item) => (
            <div
              key={item.n}
              className="bg-[#D8E9D3] p-6 rounded-3xl shadow text-center flex flex-col items-center pt-10 pb-8"
            >
              {/* Badge Angka */}
              <div className="bg-white w-12 h-12 flex justify-center items-center rounded-xl shadow mb-5">
                <p className="text-xl font-bold text-black">{item.n}</p>
              </div>
              {/* Judul */}
              <p className="font-semibold text-black text-[15px] leading-snug mb-3 px-2">
                {item.title}
              </p>
              {/* Deskripsi */}
              <p className="text-black/70 text-sm leading-relaxed px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tombol Lihat Semua */}
        <div className="flex justify-center mt-14">
          <button className="flex items-center gap-2 px-6 py-3 bg-yellow-400 rounded-full text-sm font-semibold shadow">
            <span className="text-black">Lihat semua  detail program</span>
          </button>
        </div>

      </section>


      {/* =============================
          METODE / BAGAIMANA KAMI MEMBINA UMKM
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-12">
          Bagaimana Kami Membina UMKM ?
        </h2>
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          {/* Card 1 */}
          <div className="bg-blue-100 rounded-2xl shadow flex flex-col md:flex-row items-center p-6 md:p-8 gap-6">
            <div className="w-full md:w-1/3 shrink-0">
              <Image
                src="/metode/tatap_muka.jpg"
                alt="Tatap Muka"
                width={320}
                height={200}
                className="rounded-xl object-cover w-full h-44 md:h-48"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-black">Tatap Muka</h3>
              <p className="text-gray-700 text-base md:text-lg">
                Pendampingan langsung dan personal di lapangan untuk membantu UMKM menyelesaikan tantangan, memahami kondisi usaha, dan mendapatkan arahan yang tepat.
              </p>
              <div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md text-sm mt-2">Baca selengkapnya</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 rounded-2xl shadow flex flex-col md:flex-row items-center p-6 md:p-8 gap-6">
            <div className="w-full md:w-1/3 shrink-0 order-2 md:order-1">
              <Image
                src="/metode/seminar_webinar.jpg"
                alt="Seminar & Webinar"
                width={320}
                height={200}
                className="rounded-xl object-cover w-full h-44 md:h-48"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-3 order-1 md:order-2">
              <h3 className="text-xl md:text-2xl font-bold text-black">Seminar & Webinar</h3>
              <p className="text-gray-700 text-base md:text-lg">
                Sesi berbagi insight dan inspirasi dari para ahli, dirancang untuk memperluas wawasan, jaringan, serta memberikan pemahaman praktis yang relevan bagi UMKM.
              </p>
              <div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md text-sm mt-2">Baca selengkapnya</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-100 rounded-2xl shadow flex flex-col md:flex-row items-center p-6 md:p-8 gap-6">
            <div className="w-full md:w-1/3 shrink-0">
              <Image
                src="/metode/online_learning.jpg"
                alt="Online Learning"
                width={320}
                height={200}
                className="rounded-xl object-cover w-full h-44 md:h-48"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-bold text-black">Online Learning</h3>
              <p className="text-gray-700 text-base md:text-lg">
                Akses belajar fleksibel melalui materi dan kelas online yang bisa dibuka kapan saja, sehingga pelaku UMKM tetap bisa belajar tanpa mengganggu aktivitas usaha harian.
              </p>
              <div>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-5 py-2 rounded-md text-sm mt-2">Baca selengkapnya</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================
          PENCAPAIAN
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">

        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-black">
          Pencapaian Kegiatan
        </h2>

        {/* Deskripsi */}
        <p className="text-center text-black/70 max-w-3xl mx-auto mt-4 leading-relaxed">
          Sejak 2018, Kakak Mentor mendukung program “Digitalisasi Pasar Rakyat” 
          dengan membantu UMKM membuat NIB dan melatih penggunaan INAmikro Apps 
          langsung di pasar dan area usaha warga.
        </p>

        {/* Cards Section */}
        <div className="w-full max-w-[900px] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {[
            {
              number: "Sejak 2018",
              label: "Pendampingan UMKM",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "21.664+",
              label: "Total Pedagang",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "753+",
              label: "Pembuatan Rekening",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "8.815+",
              label: "Pelatihan Literasi Digital",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "20.205+",
              label: "Pelatihan Literasi Legal Usaha",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "1400+",
              label: "Penyaluran Kredit Mikro",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "765+",
              label: "Pelatihan Digital Payment / QRIS",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "547+",
              label: "Pelatihan E-logistic & E-commerce",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
            {
              number: "235+",
              label: "Branding Usaha, Company Profile",
              icon: "/pencapaian/ell.png",
              icon2: "/pencapaian/1.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#D8E9D3] border border-black/15 rounded-[25px] h-[120px] p-5 relative"
            >
              <div className="flex items-start gap-4">
                
                {/* Icon Section */}
                <div className="w-[54px] h-[54px] bg-[#2D8FE4] rounded-full flex items-center justify-center">
                  <div className="relative w-[30px] h-[30px]">
                    <Image src={item.icon} alt="icon" fill className="scale-150" />
                    <Image src={item.icon2} alt="icon2" fill className="scale-100" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <p className="text-2xl font-bold text-black">{item.number}</p>
                  <p className="text-[16px] text-black mt-1 leading-tight">{item.label}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>


      {/* =============================
          LEGALITAS / IDENTITAS LEMBAGA
      ============================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#F8FAFB]">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-black">
          Yayasan Bina Mikro Mandiri
        </h2>

        <p className="text-gray-600 text-center mt-4 mb-14 text-[15px]">
          Identitas dan registrasi lembaga untuk kredibilitas dan kemitraan.
        </p>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">

          {/* DATA LIST */}
          <div className="space-y-6">
            {[
              ["Akte Pendirian", "AHU-0005022.AH.01.12 Tahun 2018, 19th Maret 2018"],
              ["NIB", "1256000550945, 4 Mei 2021"],
              ["NCAGE", "1480Z, No. 32/II/2024"],
              ["UEI", "KSQLNPG2753G3"],
              ["Nomor HP", "+6281 1192 3763"],
              ["Telepon", "+6211 2934 9582"],
              ["Fax", "+6211 2934 9301"],
              ["Email", "yayasanbinamikromandiri@gmail.com"],
              ["Website", "ybmm.inamikro.id"],
              ["PB-UMKU", "0220307938170100000001"],
            ].map(([label, value], i) => (
              <div key={i}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <span className="text-gray-700 font-medium">{label}</span>

                  <span className="font-semibold text-black text-left md:text-right break-words md:max-w-[60%]">
                    {value}
                  </span>
                </div>
                <hr className="border-gray-200 mt-4" />
              </div>
            ))}

            {/* SPECIAL — SAM REGISTRATION */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                <span className="text-gray-700 whitespace-nowrap font-medium">
                  SAM Registration
                </span>

                <div className="flex flex-col sm:flex-row gap-3">

                  <span className="bg-[#FDEFB0] text-black px-4 py-1 rounded-full text-sm flex items-center gap-2 w-fit">
                    <span className="text-yellow-600">●</span> Aktif
                  </span>

                  <span className="bg-[#FDEFB0] text-black px-4 py-1 rounded-full text-sm flex items-center gap-2 w-fit">
                    <span className="text-yellow-600">📅</span> Sampai 10 September 2025
                  </span>

                </div>
              </div>
              <hr className="border-gray-200 mt-4" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
