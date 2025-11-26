import Image from "next/image";

export default function Pencapaian() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[676px]">
        <Image
          src="/pencapaian/rectangle-286.png"
          alt="Hero Background"
          fill
          className="object-cover"
        />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-[60%]">
          <h1 className="text-4xl font-bold text-black">Pencapaian YBMM</h1>
          <p className="text-lg mt-4 text-black">
            Perjalanan nyata dalam mendampingi UMKM untuk tumbuh lebih tertata,
            lebih kompeten, dan lebih siap menghadapi pasar modern.
          </p>
        </div>
      </div>

      {/* Pencapaian Kegiatan */}
      <div className="w-full text-center mt-20">
        <h2 className="text-black text-[32px] font-semibold">Pencapaian Kegiatan</h2>
        <p className="max-w-[900px] mx-auto text-xl text-black mt-4">
          Sejak 2018, pendampingan YBMM ikut membuka akses usaha, memodernisasi
          cara kerja pedagang, dan membantu mereka masuk ke ekosistem pasar
          digital.
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-[1110px] mx-auto mt-12 grid grid-cols-3 gap-6">
        {/* Item Component Example */}
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
            className="bg-[#ffd54f80] border border-black/15 rounded-[25px] h-[142px] p-5 relative"
          >
            <div className="flex items-start gap-4">
              <div className="w-[54px] h-[54px] bg-ocean-blue rounded-full flex items-center justify-center">
                <div className="relative w-[30px] h-[30px]">
                    <Image src={item.icon} alt="icon" fill className="scale-150" />
                    <Image src={item.icon2} alt="icon2" fill className="scale-100" />
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold text-black">{item.number}</p>
                <p className="text-xl text-black mt-2">{item.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Kolaborasi Section */}
      <div className="w-full max-w-[1200px] mx-auto mt-28 relative">
        <h2 className="text-black text-[32px] font-semibold max-w-[700px]">
          Kolaborasi Multipihak untuk Dampak yang Lebih Luas
        </h2>

        <p className="mt-6 max-w-[650px] text-lg text-black">
          YBMM menjalin kemitraan strategis dengan pemerintah, lembaga
          pendidikan, komunitas, dan pelaku industri untuk membangun ekosistem
          pendampingan UMKM yang lebih kuat dan berkelanjutan.
        </p>

        <div className="grid grid-cols-3 gap-4 mt-10 w-[60%]">
          {["Pemerintah Daerah", "Lembaga Pendidikan", "Mitra Korporasi", "Lembaga Keuangan", "Organisasi Nirlaba", "Asosiasi Bisnis"].map(
            (txt, i) => (
              <div
                key={i}
                className="bg-[#ffd54f99] px-4 py-2 rounded-[15px] text-xl font-medium text-black"
              >
                {txt}
              </div>
            )
          )}
        </div>

        <Image
          src="/pencapaian/mitra2.jpg"
          alt="Collaboration"
          width={445}
          height={359}
          className="absolute right-0 top-5 rounded-lg"
        />
      </div>

      {/* Komitmen Section */}
      <div className="w-full text-center mt-32 mb-32 bg-white">
        <h2 className="text-black text-[32px] font-semibold">
          Komitmen untuk Pertumbuhan yang Berkelanjutan
        </h2>

        <p className="max-w-[900px] mx-auto mt-6 text-lg text-black">
          YBMM memastikan setiap program dan kemitraan memberikan dampak
          terukur bagi UMKM. Fokus kami bukan hanya pada jumlah, tetapi kualitas
          pendampingan yang membantu pelaku usaha mencapai kestabilan dan
          keberlanjutan usaha.
        </p>

        <button className="mt-10 bg-[#FFD54F] px-8 py-3 rounded-full flex items-center gap-4 font-semibold text-black text-lg mx-auto">
            Pelajari metode kami
            <span className="text-2xl font-bold">{'>'}</span>
        </button>
      </div>
    </div>
  );
}
