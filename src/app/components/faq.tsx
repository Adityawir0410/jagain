'use client'
import React, { useState } from 'react';
import Link from 'next/link';

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

import Image from 'next/image';

export default function VideoDemo() {
    let [isOpen, setOpen] = useState<boolean>(false);

    return (
        <div className="container relative">
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                {/* Video Section */}
                <div className="relative order-1 md:order-2">
                    <div className="relative">
                        <Image
                            src='/images/jamtangan.png'
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: '100%', height: 'auto' }}
                            className="mx-auto md:max-w-xs lg:max-w-sm"
                            alt="Phone"
                        />

                        <div className="absolute top-24 md:end-14 -end-2 text-center">
                            <Link
                                href="#!"
                                scroll={false}
                                onClick={() => setOpen(true)}
                                className="lightbox size-20 rounded-full shadow-md dark:shadow-gray-700 inline-flex items-center justify-center text-white bg-[#6D64E8]"
                            >
                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                            </Link>
                        </div>
                        <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="3qoqCPsCQ7Y"
                            onClose={() => setOpen(false)}
                        />
                    </div>
                    <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tr from-[#C0BCF5] via-[#DCDAF9] to-[#6D64E8] bottom-1/2 translate-y-1/2 md:end-0 end-1/2 md:translate-x-0 translate-x-1/2 -z-1 shadow-md shadow-[#C0BCF5]/50 rounded-full"></div>
                </div>

                {/* Text Content Section */}
                <div className="lg:me-8 order-2 md:order-1">
                    <h6 className="text-[#6D64E8] uppercase text-sm font-bold tracking-wider mb-3">Video Demo</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold text-black">
                        Tonton Demo Interaktif Kami
                    </h4>
                    <p className="text-slate-600 max-w-xl mx-auto">
                        Pelajari bagaimana aplikasi "JAGAIN" bekerja untuk membantu keluarga dan caregiver melalui video demo interaktif ini.
                    </p>

                    <div className="mt-6">
                        <Link
                            href="https://www.youtube.com/watch?v=3qoqCPsCQ7Y"
                            target="_blank"
                            className="hover:text-[#6D64E8] dark:hover:text-[#6D64E8] after:bg-[#6D64E8] dark:text-black transition duration-500 font-medium"
                        >
                            Lihat Lebih Banyak <i className="mdi mdi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
