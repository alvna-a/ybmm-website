// Next.js page.tsx experimental full-page layout with Tailwind


export default function HomePage() {
  return (
    <>
      <main className="w-full flex flex-col items-center bg-white text-gray-900">
        {/* Hero Section */}
        <section className="w-full px-6 pt-28 pb-16 md:pt-32 md:pb-20 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Yayasan Bina Masyarakat Mandiri
              </h1>
              <p className="text-base md:text-lg text-gray-700">
                Berdaya bersama, tumbuh bersama. Menguatkan UMKM dan komunitas lokal
                melalui program pemberdayaan, pelatihan, dan kolaborasi multipihak.
              </p>
              <div className="flex gap-3 pt-2">
                <a href="#program" className="px-5 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                  Lihat Program
                </a>
                <a href="#hubungi" className="px-5 py-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-100 transition">
                  Hubungi Kami
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full aspect-square bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </section>

        {/* Program Section */}
        <section id="program" className="w-full bg-gray-50 py-16 px-6 md:py-20">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold">Program Kami</h2>
              <p className="text-gray-600 mt-2">
                Rangkaian program untuk meningkatkan kapasitas dan daya saing UMKM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Pelatihan UMKM</h3>
                <p className="text-gray-600 text-sm">Peningkatan kapasitas melalui workshop praktis.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Pendampingan Usaha</h3>
                <p className="text-gray-600 text-sm">Mentoring berkelanjutan untuk UMKM binaan.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-lg mb-2">Kemitraan</h3>
                <p className="text-gray-600 text-sm">Kolaborasi dengan pemerintah, kampus, dan industri.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="hubungi" className="w-full py-16 md:py-20 px-6 max-w-6xl flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Siap Berkolaborasi?</h2>
          <p className="text-gray-600 max-w-xl mb-6">
            Hubungi kami untuk menjajaki peluang kolaborasi dan membangun dampak yang lebih besar.
          </p>
          <a href="/hubungi-kami" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
            Hubungi Kami
          </a>
        </section>
      </main>


    </>
  );
}
