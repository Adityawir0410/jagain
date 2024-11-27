import React from 'react';

import Link from 'next/link';

export default function AboutTwo() {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-start gap-6">
      <div className="lg:col-span-6 md:col-span-6 md:order-1 order-1">
        <div className="lg:me-10">
          <h6 className="text-[#6D64E8] uppercase text-2xl font-bold tracking-wider mb-4">Masalah</h6>
          <p className="text-slate-400 max-w-xl">
            Lansia sering mengalami penurunan kondisi fisik, mental, dan psikologi yang dapat meningkatkan risiko
            terjadinya hal-hal buruk, seperti kecelakaan atau penyakit mendadak. Keterbatasan waktu keluarga untuk
            memantau lansia secara berkala menyebabkan kurangnya pemantauan kesehatan real-time, sehingga kondisi
            lansia tidak terpantau dengan baik. Hal ini menciptakan kekhawatiran dan kesulitan dalam memberikan
            respons yang cepat terhadap perubahan kondisi kesehatan lansia.
          </p>
        </div>
      </div>

      <div className="lg:col-span-6 md:col-span-6 md:order-2 order-2">
        <div className="lg:me-10">
          <h6 className="text-[#6D64E8] uppercase text-2xl font-bold tracking-wider mb-4">Solusi Kami</h6>
          <p className="text-slate-400 max-w-xl">
            Aplikasi "JAGAIN: Jaga Aktivitas dan Gerakan untuk Informasi Kesehatan" menggunakan teknologi Internet of
            Things (IoT) melalui perangkat wearable dan aplikasi mobile. Solusi ini memungkinkan keluarga dan caregiver
            untuk:
          </p>
          <ul className="list-none text-slate-400 mt-4">
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Memantau data kesehatan lansia secara real-time seperti detak jantung, tekanan darah, dan aktivitas harian.</li>
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Menerima notifikasi otomatis jika terdeteksi kondisi abnormal atau darurat.</li>
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Memberikan pengingat obat dan jadwal pemeriksaan.</li>
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Menampilkan data kesehatan melalui dashboard interaktif.</li>
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Mengintegrasikan data dengan pihak medis untuk tindakan yang lebih tepat waktu.</li>
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Melacak lokasi dan aktivitas harian lansia.</li>
            <li className="mb-2 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Menawarkan user interface yang ramah lansia, dengan desain intuitif dan mudah dipahami.</li>
          </ul>

          {/* <div className="mt-6">
            <Link href="" className="hover:text-red-500 dark:hover:text-red-500 after:bg-red-500 dark:text-white transition duration-500 font-medium">
              Learn More <i className="mdi mdi-arrow-right align-middle"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
