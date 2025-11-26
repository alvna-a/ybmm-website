"use client";

export default function ThunderbirdPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center h-[480px] flex items-center"
        style={{ backgroundImage: "url('/thunderbird/image1.png')" }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl ml-7">
              <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Thunderbird – Tempat Inovasi <br /> Berkembang dengan Cepat
              </h1>
              <p className="text-gray-700 mt-3 text-lg">
                Kekuatan, gerak, dan kecerdasan menyatu menjadi platform premium yang
                dirancang untuk transformasi cepat.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO UTAMA ================= */}
      <section className="flex justify-center py-12">
        <div className="w-[90%] max-w-4xl rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video rounded-xl"
            src="https://www.youtube.com/embed/MH8QzuJ025o"
            title="Sekolah Bisnis Online Thunderbird"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* ================= DESCRIPTION SECTION ================= */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
          <p>
            The Francis and Dionne Najafi 100 Million Learners Global 
            Initiative menawarkan pendidikan global online di 40 bahasa yang berbeda, 
            sama sekali tanpa biaya bagi pendaftar. Global Initiative dipimpin oleh Thunderbird School of Global Management,
            terkenal dengan fakultasnya yang terkemuka dan reputasinya sebagai garda depan di dunia global 
            pendidikan kepemimpinan dan manajemen (No. 1 di dunia dalam perdagangan internasional menurut 
            peringkat QS International Trade Rankings 2023), dan Arizona State University, menduduki peringkat 
            No. 1 untuk inovasi di Amerika Serikat selama delapan tahun.
          </p>
        </div>
      </section>

      {/* ================= PROGRAM SECTION ================= */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 max-w-3xl mx-auto leading-snug">
          100 Million Learners Global Initiative menawarkan kepada pendaftar tiga jalur untuk meningkatkan 
          kemampuan pribadi dan pengembangan profesional
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              number: "1",
              title: "Foundational Program",
              desc: "Program untuk pendaftar dengan tingkat pendidikan apa pun",
            },
            {
              number: "2",
              title: "Intermediate Program",
              desc: "Program untuk pendaftar di sekolah menengah atau tingkat pendidikan sarjana",
            },
            {
              number: "3",
              title: "Advanced Program",
              desc: "Program untuk pendaftar lulusan suatu tingkat pendidikan",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl border border-[#ffc5c5] shadow-[0_8px_20px_-5px_rgba(255,100,100,0.25)] hover:shadow-[0_10px_25px_-5px_rgba(255,80,80,0.35)] transition-all duration-300 w-72 py-10 px-6"
            >
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-600 mb-4">
                {item.number}
              </div>

              <h4 className="font-bold text-gray-900 text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= JOIN SECTION ================= */}
      <section className="text-center bg-gray-50 py-12 px-6">
        <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p>
            Pendaftar akan mendapatkan badge untuk setiap kursus digital yang mereka selesaikan dengan memuaskan dan sertifikat jika mereka berhasil menyelesaikan semuanya kursus dalam suatu program. Pendaftar baru yang berhasil menyelesaikan program menengah atau lanjutan dengan memuaskan dapat mengajukan kblueit akademik, yang dapat digunakan untuk menyelesaikan gelar di Thunderbird/ASU, dan hampir semua universitas di seluruh dunia.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {["Daftar Disini", "Press Release", "Akses Course"].map((btn, i) => (
            <button
              key={i}
              className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
            >
              {btn}
            </button>
          ))}
        </div>
      </section>

      {/* ================= TUTORIAL SECTION ================= */}
      <section className="py-16 bg-white text-center">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Cara Mendaftar",
              id: "DzKEpPDiTyE",
              url: "https://youtu.be/DzKEpPDiTyE",
            },
            {
              title: "Tutorial – Bootcamp",
              id: "RYqqMaIwqp8",
              url: "https://youtu.be/RYqqMaIwqp8",
            },
            {
              title: "Tutorial – Penyelesaian Kursus",
              id: "SNMI5hUXt0U",
              url: "https://youtu.be/SNMI5hUXt0U",
            },
          ].map((vid, i) => (
            <div key={i} className="w-[300px] relative group">
              <iframe
                className="w-full aspect-video rounded-xl shadow-md"
                src={`https://www.youtube.com/embed/${vid.id}`}
                title={vid.title}
                allowFullScreen
              ></iframe>

              <a
                href={vid.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 rounded-xl z-10"
              ></a>

              <p className="mt-3 font-semibold text-gray-800">{vid.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
