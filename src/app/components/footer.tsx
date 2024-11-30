import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-8" style={{ backgroundColor: "#5D55C5" }}>
      <div className="container">
        <div className="text-center">
          {/* Teks Footer */}
          {/* <h1 className="text-white text-xl font-bold mb-4">JAGAIN</h1> */}
          <p className="text-white">
            © {new Date().getFullYear()} JAGAIN. Dibuat dengan{" "}
            <span className="text-red-500">❤</span> untuk mendukung kesehatan lansia dan keluarga.
          </p>
        </div>
      </div>
    </footer>
  );
}
