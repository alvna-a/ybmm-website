"use client";

import Image from "next/image";

interface Member {
  name: string;
  role: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Debbie R. Sianturi",
    role: "Founder Yayasan Bina Mikro Mandiri",
    image: "/kepengurusan/debie.png",
  },
  {
    name: "Vivi Susanti, SE. MM",
    role: "Ketua Pengawas",
    image: "/kepengurusan/vivi.png",
  },
  {
    name: "Abraham Soei Ndoen",
    role: "Ketua Pembina",
    image: "/kepengurusan/abraham.png",
  },
  {
    name: "Ir. Akhmad Syarbini",
    role: "Ketua Umum",
    image: "/kepengurusan/akhmad.png",
  },
  {
    name: "Akhmad Fadly",
    role: "Pembina 1",
    image: "/kepengurusan/akhmad.jpg",
  },
  {
    name: "Dr. Lawrence TP Siburian, SH, MH, LLM",
    role: "Pembina 2",
    image: "/kepengurusan/lawrence.jpg",
  },
  {
    name: "Yudha Mei Lukmana",
    role: "Wakil Ketua 1",
    image: "/kepengurusan/yudha.png",
  },
  {
    name: "M. Irawati Soemadi",
    role: "Wakil Ketua 2",
    image: "/kepengurusan/irwati.png",
  },
  {
    name: "Sekararum W. P.",
    role: "Sekretaris Umum",
    image: "/kepengurusan/sekar.png",
  },
  {
    name: "Riana Dewi Rais, SE",
    role: "Bendahara Umum",
    image: "/kepengurusan/riana.png",
  },
  {
    name: "Dita Lestari",
    role: "Bendahara",
    image: "/kepengurusan/dita.png",
  },
];

export default function KepengurusanPage() {
  const founder = members[0];
  const others = members.slice(1);

  return (
    <main className="min-h-screen w-full bg-linear-to-b from-[#FFF7EA] via-[#E4F1CE] to-[#CCDEF5] pb-24 pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center font-bold text-3xl md:text-4xl mb-16 text-black">
          Kepengurusan Yayasan Bina Mikro Mandiri
        </h1>

        {/* Founder */}
        <div className="flex justify-center mb-20">
          <div className="bg-white rounded-3xl shadow-lg p-6 w-[300px] md:w-[360px]">
            <div className="relative w-full h-[380px] rounded-xl overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-center font-semibold mt-4 text-xl text-black">
              {founder.name}
            </h3>
            <p className="text-center text-black text-sm">
              {founder.role}
            </p>
          </div>
        </div>

        {/* Others */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {others.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-5 flex flex-col items-center"
            >
              <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-center font-semibold mt-4 text-lg text-black">
                {m.name}
              </h3>
              <p className="text-center text-black text-sm">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
