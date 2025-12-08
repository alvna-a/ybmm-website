"use client";
import Image from "next/image";
import Link from "next/link";

const TentangKamiPage = () => {
  return (
    <div className="bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tentang Kami
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <Image
            src="/tentang/tentang_kami.jpg"
            alt="Tentang Kami"
            width={500}
            height={350}
            className="rounded-xl max-w-[420px] h-[350px] object-cover mx-auto"
          />

          {/* CONTENT */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Yayasan Bina Mikro Mandiri (YBMM) merupakan lembaga nirlaba yang
              berkomitmen memperkuat kapasitas pelaku UMKM di Indonesia melalui
              program pemberdayaan yang terstruktur dan berkelanjutan. Kami
              berfokus pada peningkatan kompetensi dasar usaha mulai dari
              penataan legalitas, literasi keuangan, pemanfaatan teknologi digital,
              hingga perluasan jejaring bisnis di tingkat nasional maupun global.
              Dengan dukungan relawan, praktisi, dan mitra strategis lintas sektor,
              YBMM membangun ekosistem pembelajaran yang konsisten dan dapat
              diakses oleh berbagai kelompok usaha. Pendekatan kami
              mengedepankan pendampingan yang aplikatif, relevan, dan berbasis
              kebutuhan lapangan, sehingga setiap pelaku UMKM dapat
              mengembangkan usaha secara lebih tertata, adaptif, dan berorientasi
              jangka panjang.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Tahun berdiri : 2016
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Penerima manfaat : 12,500+
              </span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                Wilayah : Nasional
              </span>
            </div>
          </div>
        </div>

        {/* BUTTONS DIPINDAH KE SINI BIAR CENTER */}
        <div className="flex justify-center gap-4 mt-10">
          <Link href="/kepengurusan">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Lihat Struktur Kepengurusan
            </button>
          </Link>
          <Link href="/program">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Lihat Program Kami
            </button>
          </Link>
        </div>
      </section>

      {/* VISI MISI */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Landasan Arah, Nilai, dan Komitmen Kami
          </h2>

          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
            Yayasan Bina Mikro Mandiri menjalankan setiap program dengan fondasi
            tata kelola yang jelas dan terukur. Visi dan misi kami menjadi panduan
            utama dalam merancang inisiatif pemberdayaan, memperkuat kapasitas
            pelaku usaha, dan memastikan setiap langkah memberi dampak nyata
            bagi UMKM di Indonesia.
          </p>

          {/* VISI */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-gray-100">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-sm">
              VISI
            </span>
            <p className="text-gray-800 font-medium mt-4">
              Mendorong terciptanya ekosistem UMKM yang berdaya saing,
              berkelanjutan, dan adaptif terhadap perkembangan ekonomi nasional
              maupun global.
            </p>
          </div>

          {/* MISI */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold text-sm">
              MISI
            </span>

            <div className="space-y-6 mt-6">
              {[1,2,3,4,5].map((num, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {num}. {[
                      "Memperkuat kapasitas usaha melalui literasi yang tepat guna",
                      "Menyediakan pendampingan yang berkelanjutan dan terstruktur",
                      "Membangun kolaborasi strategis lintas sektor",
                      "Mendorong transformasi digital dan peningkatan daya saing",
                      "Membuka wawasan pasar regional dan global"
                    ][idx]}
                  </h3>
                  <p className="text-gray-700 pl-4">
                    {[
                      "Menghadirkan edukasi relevan seputar legalitas, tata kelola, keuangan, dan praktik bisnis modern.",
                      "Mengembangkan model pendampingan yang dekat, terukur, dan menjawab kebutuhan operasional UMKM.",
                      "Menghubungkan UMKM dengan pemerintah, lembaga pendidikan, swasta, dan komunitas profesional.",
                      "Membantu UMKM memanfaatkan teknologi modern untuk efisiensi dan visibilitas.",
                      "Menyelenggarakan pelatihan agar UMKM memahami tren internasional dan memanfaatkan peluang global."
                    ][idx]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LINGKUP KERJA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Lingkup Kerja Yayasan
          </h2>

          <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12">
            Melalui pendekatan terstruktur, kami memastikan pelaku UMKM memperoleh
            panduan yang tepat mulai dari legalitas, keuangan, transformasi digital,
            hingga akses pasar. Setiap kegiatan dirancang relevan dengan kondisi
            lapangan agar benar-benar membantu UMKM berkembang.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Pendampingan Legalitas Usaha",
              "Literasi Keuangan & Perbankan",
              "Transformasi Digital",
              "Pengembangan Usaha & Kemitraan",
              "Pengetahuan Bisnis Global"
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-green-100 text-green-800 px-6 py-3 rounded-lg font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TentangKamiPage;
