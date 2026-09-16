import { useEffect, useState } from "react";

const trackRecordText =
  "Morsan has worked with startups, SMEs, and multi-entity groups spanning fintech, lending, real estate, retail, education, and holdings across Kenya and Uganda, from single-project deliverables to ongoing retained advisory.";

const TrackRecordStatement = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("track-record-statement");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        1,
        Math.max(
          0,
          (windowHeight - rect.top) / (windowHeight * 0.9)
        )
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const words = trackRecordText.split(" ");

  return (
    <section
      id="track-record-statement"
      className="w-full overflow-hidden bg-white px-6 pt-6 pb-16 md:pt-8 md:pb-20 lg:px-10 lg:pt-8 lg:pb-24"
      data-navbar-theme="light"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p
          className="
            m-0
            w-full
            text-left
            text-[22px]
            font-medium
            leading-[1.35]
            tracking-[-0.02em]
            sm:text-2xl
            md:text-3xl
            lg:text-[34px]
          "
        >
          {words.map((word, index) => {
            const wordProgress =
              scrollProgress * words.length - index;

            const colorProgress = Math.min(
              1,
              Math.max(0, wordProgress)
            );

            const startColor = [165, 165, 165]; // light gray
            const endColor = [31, 41, 51]; // #001C43

            const red = Math.round(
              startColor[0] +
                (endColor[0] - startColor[0]) * colorProgress
            );

            const green = Math.round(
              startColor[1] +
                (endColor[1] - startColor[1]) * colorProgress
            );

            const blue = Math.round(
              startColor[2] +
                (endColor[2] - startColor[2]) * colorProgress
            );

            return (
              <span
                key={`${word}-${index}`}
                className="inline"
                style={{
                  color: `rgb(${red}, ${green}, ${blue})`,
                  transition: "color 120ms ease",
                }}
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default TrackRecordStatement;