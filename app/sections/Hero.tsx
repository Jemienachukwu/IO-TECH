import Image from "next/image";
import React from "react";
import Header from "../components/Header";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-screen overflow-hidden">
      {/* Background image (decorative) */}
      <Image
        src="/hero-bg.jpg"
        alt="" // decorative image: leave alt empty
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Gradient overlay (non-blocking for clicks) */}
      <div
        className="pointer-events-none absolute inset-0 z-10
                   bg-[linear-gradient(271.47deg,rgba(75,38,21,0.28)_1.2%,rgba(75,38,21,0.68)_86.38%)]"
      />

      {/* Header on top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

      {/* Content layer */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Add top padding so content does not sit under the header */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-24 pb-12 md:pt-32 md:pb-16">
            {/* Text */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-2xl">
              <h1 className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
                Lorem Ipsum
              </h1>

              <p className="font-dm-sans font-medium text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/90">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s.
              </p>

              <div className="pt-2">
                <button
                  className="inline-flex items-center justify-center
                             bg-white text-[#4B2615] font-medium
                             rounded-xl px-5 py-3 md:px-6 md:py-4
                             text-sm sm:text-base md:text-lg
                             shadow-sm hover:shadow-md hover:opacity-90
                             focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#4B2615]
                             transition"
                >
                  Read more
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center ">
              <div className="relative">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  width={320}
                  height={320}
                  priority
                  sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 200px"
                  className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:w-[400px] lg:h-[400px]
                             object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
