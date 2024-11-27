'use client'
import Image from "next/image";
import Link from "next/link";

import Faq from "./components/faq";
import Navbar from "./components/navbar";
import Client from "./components/client";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Partner from "./components/partner";
import Switcher from "./components/switcher";
import Download from "./components/download";
import AboutOne from "./components/about-one";
import AboutTwo from "./components/about-two";
import Screenshot from "./components/screenshot";
import FeaturesOne from "./components/features-one";
import ScrollToTop from "./components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Navbar navLight={false} playBtn={false} bgLight={false} navCenter={false} />

      <section
        className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-no-repeat bg-center bg-cover"
        id="home"
        style={{ backgroundImage: `url('/images/bg1.png')` }}
      >
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
            <div className="md:me-6">
              {/* <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">App Showcase</h6> */}
              <h4 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">JAGAIN</h4>
              <p className="text-slate-400 text-lg max-w-xl">
                Aplikasi “JAGAIN: Jaga Aktivitas dan Gerakan untuk Informasi Kesehatan” memanfaatkan teknologi Internet of Things (IoT) melalui perangkat wearable dan aplikasi mobile.
              </p>

              <div className="mt-6">
                <Link href="#">
                  <Image
                    src="/images/app.png"
                    width={152}
                    height={128}
                    className="h-12 inline-block m-1"
                    alt=""
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/images/play.png"
                    width={152}
                    height={128}
                    className="h-12 inline-block m-1"
                    alt=""
                  />
                </Link>
              </div>
            </div>

            <div className="relative">
  <Image
    src="/images/awalawal.png"
    width={0}
    height={0}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    className="mx-auto w-80 rotate-12 relative z-2"
    alt=""
  />
  <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-[#C0BCF5]/20 via-[#C0BCF5]/70 from-[#8780EC] bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-[#8780EC]/10 rounded-full"></div>

  <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-[#C0BCF5]/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
</div>

          </div>
        </div>
      </section>

      <div className="container relative md:mt-24 mt-16">
          <AboutTwo />
        </div>

        <section className="relative md:py-24 py-16" id="features">
  <div className="container relative">
    <div className="grid grid-cols-1 pb-6 text-center">
      <h6 className="text-[#6D64E8] uppercase text-sm font-bold tracking-wider mb-3">Fitur Utama</h6>
      <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-black">
        Temukan Solusi untuk Lansia
      </h4>

      <p className="text-slate-500 max-w-xl mx-auto">
        Aplikasi "JAGAIN" menghadirkan fitur-fitur inovatif untuk membantu keluarga dan caregiver memantau kondisi
        kesehatan lansia secara real-time, meningkatkan keamanan, dan memberikan kenyamanan.
      </p>
    </div>

    <FeaturesOne />
  </div>
</section>


<section className="relative md:py-24 py-16 bg-white" id="screenshot">
  <div className="container relative">
    <div className="grid grid-cols-1 pb-6 text-center">
      <h6 className="text-[#6D64E8] uppercase text-sm font-bold tracking-wider mb-3">Demo Prototype</h6>
      <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-black">
        Eksplorasi Antarmuka dan Fitur Kami
      </h4>

      <p className="text-slate-500 max-w-xl mx-auto">
        Jelajahi bagaimana aplikasi "JAGAIN" bekerja melalui demo interaktif yang menampilkan fitur-fitur unggulan
        kami untuk mendukung lansia dan keluarga.
      </p>
    </div>

    <div className="flex justify-center mt-8">
  <iframe
    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
    width="400"
    height="800"
    src="https://embed.figma.com/proto/YxBHSM4kKfPqNCR41SP05Z/IMK-3?page-id=2%3A2&node-id=150-3170&node-type=frame&viewport=1200%2C491%2C0.33&scaling=contain&bg-color=FFFFFF&content-scaling=fixed&starting-point-node-id=185%3A884&share=1&embed-host=share"
    allowFullScreen
  ></iframe>
</div>

  </div>
</section>




      <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
        <Faq />
      </section>

      {/* <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="download">
        <Download />
      </section> */}

      <section className="relative md:py-24 py-16" id="reviews">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
            <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Reviews</h6>
            <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">10k+ Customers Trust Us</h4>

            <p className="text-slate-400 max-w-xl mx-auto">
              Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.
            </p>
          </div>
          <Client />
        </div>
      </section>

      {/* <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="contact">
        <Contact />
      </section> */}

      {/* <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
        <div className="container relative">
          <Partner />
        </div>
      </section> */}

      <Footer />

      <ScrollToTop />
      {/* <Switcher/> */}
    </>
  );
}
