import { useEffect, useState } from "react";
import heroVideo from "../assets/herov.mp4";

const changingWords = ["Growth", "Impact", "Momentum"];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((currentIndex) => (currentIndex + 1) % changingWords.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-7xl items-center px-6 py-6 lg:px-2">
        <div className="max-w-3xl pt-55">

          <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            Transform Strategy Into Sustainable{" "}
            <span
              key={changingWords[wordIndex]}
              className="
                inline-block
                font-serif
                italic
                font-medium
                tracking-[-0.03em]
                text-[#C9A227]
                animate-[wordFade_0.6s_ease-in-out]
              "
            >
              {changingWords[wordIndex]}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-md leading-[1.4] text-white/85">
            Transform challenges into competitive advantages.
            <br />
            We partner with ambitious leaders to unlock growth,
            <br />
            optimize operations, and build organizations built to win.
          </p>

          {/* Hero buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-[5px]
                bg-[#C9A227]
                px-6
                py-3
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#A8831D]
                hover:gap-4
              "
            >
              <span>Book a Consultation</span>
            </a>

            <a
              href="/services"
              className="
                inline-flex
                items-center
                gap-3
                rounded-[5px]
                border
                border-white/70
                px-6
                py-3
                text-[12px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:gap-4
                hover:border-white
                hover:bg-white
                hover:text-[#1F2933]
              "
            >
              <span>View Services</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Changing word animation */}
      <style>{`
        @keyframes wordFade {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;