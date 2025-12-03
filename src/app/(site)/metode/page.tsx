export default function Metode() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 ">
        <div className="max-w-xl">
          <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md">
            PENDAMPINGAN UMKM
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mt-4">
            Metode Pendampingan
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            YBMM menyediakan tiga metode pendampingan agar proses belajar para
            UMKM lebih fleksibel, mudah diikuti, dan sesuai kondisi di
            lapangan. Setiap metode memiliki karakteristiknya sendiri, sehingga
            peserta bisa memilih cara belajar yang paling pas.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/webinar.png"
            alt="Webinar"
            className="w-[340px] md:w-[420px] lg:w-[460px] rounded-xl object-cover"
          />
        </div>

      </div>

      {/* Metode 01 */}
      <div className="mt-24 bg-blue-100 p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10">
        <img
          src="/metode1.png"
          alt="Tatap Muka"
          className="w-[380px] md:w-[420px] lg:w-[480px] rounded-xl object-cover"
        />

        <div className="md:w-1/2">
          <span className="inline-block bg-yellow-400 text-gray-800 font-semibold px-4 py-1 rounded-md text-md">
            Metode 01
          </span>

          <h3 className="text-4xl font-extrabold text-gray-900 mt-4">Tatap Muka</h3>

          <p className="text-gray-700 leading-relaxed mt-4">
            Pendampingan langsung menjadi cara kami menjaga kedekatan dengan para pelaku UMKM. Melalui sesi tatap muka, tim YBMM hadir mendampingi proses belajar, membantu menyelesaikan tantangan di lapangan, serta memastikan setiap pelaku usaha mendapatkan arahan yang tepat dan personal. Metode ini membuat komunikasi lebih hangat dan mendorong perkembangan usaha secara lebih terarah.
          </p>
        </div>
      </div>

      {/* Metode 02 */}
      <div className="mt-24 bg-blue-100 p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10">

        <div className="md:w-1/2">
          <span className="inline-block bg-yellow-400 text-gray-800 font-semibold px-4 py-1 rounded-md text-md">
            Metode 02
          </span>

          <h3 className="text-4xl font-extrabold text-gray-900 mt-4">Seminar dan Webinar</h3>

          <p className="text-gray-700 leading-relaxed mt-4">
            Sebagai ruang pembuka wawasan, seminar dan webinar YBMM dirancang untuk mempertemukan para pelaku UMKM dengan pengetahuan praktis yang relevan. Kegiatan ini menjadi ajang berbagi insight, inspirasi, dan pengalaman, sekaligus meluaskan jaringan antara pelaku usaha di berbagai daerah. Kami ingin setiap sesi menjadi pemantik semangat baru untuk terus berkembang.
          </p>
        </div>
        <img
          src="/metode1.png"
          alt="Tatap Muka"
          className="w-[380px] md:w-[420px] lg:w-[480px] rounded-xl object-cover"
        />
      </div>

      {/* Metode 03 */}
      <div className="mt-24 bg-blue-100 p-6 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-10">
        <img
          src="/metode1.png"
          alt="Tatap Muka"
          className="w-[380px] md:w-[420px] lg:w-[480px] rounded-xl object-cover"
        />

        <div className="md:w-1/2">
          <span className="inline-block bg-yellow-400 text-gray-800 font-semibold px-4 py-1 rounded-md text-md">
            Metode 03
          </span>

          <h3 className="text-4xl font-extrabold text-gray-900 mt-4">Online Learning</h3>

          <p className="text-gray-700 leading-relaxed mt-4">
            Untuk mendukung pembelajaran yang lebih fleksibel, YBMM menyediakan materi dan kelas online yang dapat diakses kapan saja. Metode ini memungkinkan pelaku UMKM tetap memperoleh pendampingan dan pembelajaran meskipun memiliki kesibukan harian. Dengan format yang ringkas dan mudah dipahami, peserta bisa belajar secara mandiri tanpa meninggalkan aktivitas usaha mereka.
          </p>
        </div>
      </div>

    </section>
  );
}