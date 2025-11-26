export default function ProgramPage() {
  return (
    <div className="w-full">

      <section
        className="
          w-full
          bg-none           
          lg:bg-[url('/headerprogram.png')] 
          lg:bg-no-repeat 
          lg:bg-right

          pt-20 pb-28
          lg:min-h-[500px]
        "
      >
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block bg-[#FFD54F] text-sm font-semibold px-4 py-2 rounded-md">
            PROGRAM KAMI
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
            Program Kami
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
            MMelalui empat program utama, YBMM berkomitmen untuk memberikan pendampingan yang relevan, praktis, dan berdampak bagi UMKM. Setiap program dirancang untuk memperkuat kapasitas pelaku usaha, mulai dari pengetahuan dasar, strategi pengembangan, hingga penerapan praktik terbaik dalam menjalankan bisnis.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16 mb-20">
        {/* Card Program 1 */}
        <div className="w-full md:max-w-7xl border border-yellow-300 rounded-2xl p-8 bg-white shadow-sm mx-auto">
          <div className="inline-block bg-yellow-300 text-gray-800 text-md font-bold px-4 py-1 rounded-md mb-5">
            Program 01
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Pendampingan Literasi Terkait Legalitas Berusaha
          </h3>
          <p className="text-gray-700 mb-6 font-bold">
            “ Membantu UMKM Melangkah Lebih Pasti & Aman Secara Hukum ”
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Agar pelaku usaha bisa tumbuh berkelanjutan, fondasinya adalah legalitas yang kuat. Yayasan Bina Mandiri Mikro menyediakan pendampingan lengkap bagi UMKM untuk memahami, mengurus, dan mengamankan dokumen usaha sesuai regulasi yang berlaku.
          </p>
          <h4 className="font-semibold text-gray-900 mb-2">Cakupan layanan:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Konsultasi & pendampingan pembuatan NIB dan perizinan dasar</li>
            <li>Pendampingan pembuatan PIRT dan sertifikasi halal</li>
            <li>Bantuan pendaftaran HKI (merek & desain)</li>
            <li>Edukasi pentingnya perlindungan legal untuk pengembangan usaha</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Program ini memastikan UMKM punya pijakan hukum yang rapi, sehingga lebih mudah lolos kurasi, bermitra, dan naik kelas.
          </p>
        </div>

        {/* Card Program 2 */}
        <div className="w-full md:max-w-7xl border border-yellow-300 rounded-2xl p-8 bg-white shadow-sm mx-auto mt-10">
          <div className="inline-block bg-yellow-300 text-gray-800 text-md font-bold px-4 py-1 rounded-md mb-5">
            Program 02
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Pendampingan Literasi Terkait Keuangan, Digital & Perbankan
          </h3>
          <p className="text-gray-700 mb-6 font-bold">
            “ Membantu UMKM Lebih Terarah & Aman dalam Pengelolaan Keuangan Usaha “
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Di era digital, kemampuan mengelola keuangan adalah kunci keberlanjutan usaha. Yayasan Bina Mandiri Mikro menghadirkan edukasi yang mudah dipahami, relevan, dan langsung bisa dipraktikkan oleh pelaku usaha.
          </p>
          <h4 className="font-semibold text-gray-900 mb-2">Cakupan layanan:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Pelatihan penggunaan aplikasi kasir digital (POS INAmikro Apps) </li>
            <li>Pendampingan pembukaan rekening bank untuk UMKM</li>
            <li>Pengenalan digital payment (QRIS) & transaksi cashless</li>
            <li>Informasi akses pembiayaan KUR dan pembiayaan mikro lainnya</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Program ini memampukan UMKM untuk lebih transparan, teratur, dan siap terhubung dengan ekosistem finansial modern.
          </p>
        </div>

        {/* Card Program 3 */}
        <div className="w-full md:max-w-7xl border border-yellow-300 rounded-2xl p-8 bg-white shadow-sm mx-auto mt-10">
          <div className="inline-block bg-yellow-300 text-gray-800 text-md font-bold px-4 py-1 rounded-md mb-5">
            Program 03
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Pendampingan Pengembangan Usaha & Jaringan Usaha
          </h3>
          <p className="text-gray-700 mb-6 font-bold">
            “ Mendorong UMKM Naik Level Lewat Branding, Digitalisasi, & Kemitraan “
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pertumbuhan usaha tidak hanya soal produk—tetapi juga tentang bagaimana UMKM terhubung, dikenal, dan dipercaya. Program ini membantu pelaku usaha memperkuat kualitas bisnis sekaligus memperluas jaringan.
          </p>
          <h4 className="font-semibold text-gray-900 mb-2">Cakupan layanan:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Pendampingan pembuatan logo & identitas brand</li>
            <li>Penyusunan Company Profile & menu usaha</li>
            <li>Optimasi Google Location for Business</li>
            <li>Pengantar pemasaran digital & e-commerce (Shopee, GoFood, GrabFood, dsb.)</li>
            <li>Pemetaan peluang kolaborasi & jaringan usaha lokal</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Program ini dikembangkan agar UMKM dapat meningkatkan visibilitas, menjangkau pelanggan baru, dan memperkuat daya saing.
          </p>
        </div>

        {/* Card Program 4 */}
        <div className="w-full md:max-w-7xl border border-yellow-300 rounded-2xl p-8 bg-white shadow-sm mx-auto mt-10">
          <div className="inline-block bg-yellow-300 text-gray-800 text-md font-bold px-4 py-1 rounded-md mb-5">
            Program 04
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
            Pendidikan Bisnis Global – Kolaborasi Dengan Thunderbird
          </h3>
          <p className="text-gray-700 mb-6 font-bold">
            “ Menghubungkan UMKM Indonesia dengan Standar Pembelajaran Global “
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Melalui inisiatif kerja sama dengan 100 Million Learners Global Initiative, Yayasan Bina Mandiri Mikro menghadirkan akses pendidikan global dari Thunderbird School of Global Management—salah satu sekolah bisnis terbaik dunia. Program ini membuka kesempatan bagi masyarakat Indonesia untuk mengakses pendidikan digital internasional yang berkualitas, tanpa biaya pendaftaran.
          </p>
          <h4 className="font-semibold text-gray-900 mb-2">Apa yang dipelajari peserta:</h4>
          <ul className="list-disc pl-6 text-gray-700 space-y-1 mb-6">
            <li>Dasar-dasar kepemimpinan & manajemen modern</li>
            <li>Pemahaman bisnis global dan inovasi</li>
            <li>Pengembangan keterampilan profesional masa depan</li>
            <li>Sertifikasi digital resmi dari Thunderbird/ASU (setelah selesai kursus)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Dengan hadirnya program ini, yayasan berkomitmen membawa wawasan global ke komunitas lokal mendorong lebih banyak SDM Indonesia berani bersaing di tingkat dunia.
          </p>
        </div>

      </section>
    </div>
  );
}
