import Image from "next/image";

export default function Pencapaian() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[500px] lg:h-[676px] overflow-hidden">
        <Image
          src="/pencapaian/hero1.png"
          alt="Hero Background"
          fill
          className="object-cover"
        />

        {/* Gradient fade bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-white via-white/40 to-transparent pointer-events-none"></div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center w-[85%] sm:w-[70%] lg:w-[60%]">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            Pencapaian YBMM
          </h1>
          <p className="text-sm sm:text-base lg:text-lg mt-4 text-black">
            Perjalanan nyata dalam mendampingi UMKM untuk tumbuh lebih tertata,
            lebih kompeten, dan lebih siap menghadapi pasar modern.
          </p>
        </div>
      </div>

      {/* Pencapaian Kegiatan */}
      <div className="w-full text-center mt-12 md:mt-20 px-4">
        <h2 className="text-black text-2xl sm:text-3xl lg:text-[32px] font-semibold">
          Pencapaian Kegiatan
        </h2>
        <p className="max-w-[900px] mx-auto text-sm sm:text-lg lg:text-xl text-black mt-4">
          Sejak 2018, pendampingan YBMM ikut membuka akses usaha, memodernisasi
          cara kerja pedagang, dan membantu mereka masuk ke ekosistem pasar
          digital.
        </p>
      </div>

      {/* Cards Section */}
        <div className="w-full max-w-[900px] mx-auto mt-12 px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
 
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
               className="bg-[#ffd54f80] border border-black/15 rounded-[25px] h-[120px] p-5 relative"
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

      {/* Kolaborasi Section */}
      <div className="w-full max-w-[1200px] mx-auto mt-20 px-4 flex flex-col lg:flex-row lg:gap-10 relative">
        <div className="flex-1">
          <h2 className="text-black text-2xl sm:text-3xl lg:text-[32px] font-semibold max-w-[700px]">
            Kolaborasi Multipihak untuk Dampak yang Lebih Luas
          </h2>
          <p className="mt-4 sm:mt-6 max-w-[650px] text-sm sm:text-lg text-black">
            YBMM menjalin kemitraan strategis dengan pemerintah, lembaga
            pendidikan, komunitas, dan pelaku industri untuk membangun ekosistem
            pendampingan UMKM yang lebih kuat dan berkelanjutan.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 w-full sm:w-[70%]">
            {[
              "Pemerintah Daerah",
              "Lembaga Pendidikan",
              "Mitra Korporasi",
              "Lembaga Keuangan",
              "Organisasi Nirlaba",
              "Asosiasi Bisnis",
            ].map((txt, i) => (
              <div
                key={i}
                className="bg-[#ffd54f99] px-3 py-2 sm:px-4 sm:py-2 rounded-[15px] text-sm sm:text-lg font-medium text-black"
              >
                {txt}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 lg:mt-0">
          <Image
            src="/pencapaian/mitra2.jpg"
            alt="Collaboration"
            width={445}
            height={359}
            className="rounded-lg w-full lg:w-[445px] object-cover"
          />
        </div>
      </div>

      {/* Komitmen Section */}
      <div className="w-full text-center mt-24 mb-24 px-4">
        <h2 className="text-black text-2xl sm:text-3xl lg:text-[32px] font-semibold">
          Komitmen untuk Pertumbuhan yang Berkelanjutan
        </h2>

        <p className="max-w-[900px] mx-auto mt-4 sm:mt-6 text-sm sm:text-lg text-black">
          YBMM memastikan setiap program dan kemitraan memberikan dampak terukur
          bagi UMKM. Fokus kami bukan hanya pada jumlah, tetapi kualitas
          pendampingan yang membantu pelaku usaha mencapai kestabilan dan
          keberlanjutan usaha.
        </p>

        <button className="mt-8 sm:mt-10 bg-[#FFD54F] px-6 sm:px-8 py-3 rounded-full flex items-center gap-3 sm:gap-4 font-semibold text-black text-base sm:text-lg mx-auto">
          Pelajari metode kami
          <span className="text-xl sm:text-2xl font-bold">{">"}</span>
        </button>
      </div>
    </div>
  );
}