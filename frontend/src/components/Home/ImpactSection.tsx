import { useEffect, useRef, useState } from "react";
import impactImage from "../../assets/impact.jpg";

const ImpactSection = () => {
  const stats = [
    { value: 100, suffix: "+", label: "Completed Projects" },
    { value: 20, suffix: "+", label: "Industries Supported" },
    { value: 700, suffix: "+", label: "Labour-outsourced staff" },
    { value: 10, suffix: "", label: "Service lines: HR, Business & Finance" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current; 

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const progress = Math.min(
              (currentTime - startTime) / duration,
              1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 3);

            setCounts(
              stats.map((stat) =>
                Math.floor(stat.value * easedProgress)
              )
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(stats.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-cover
        bg-center
        px-6
        py-20
        text-white
        md:py-24
        lg:px-12
        lg:py-28
      "
      data-navbar-theme="dark"
      style={{
        backgroundImage: `url(${impactImage})`,
      }}
    >
      {/* Dark image overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Bottom fade into the next section */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-[2]
          h-32
          bg-gradient-to-b
          from-transparent
          via-[#02010D]/70
          to-[#02010D]
          md:h-40
          lg:h-48
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-2xl">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-[#C9A227]
              px-6
              py-2
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-[#C9A227]
            "
          >
            Morsan At a Glance
          </span>

          <h2
            className="
              mt-6
              max-w-xl
              text-3xl
              font-semibold
              leading-[1.08]
              tracking-[-0.04em]
              text-white
              md:text-4xl
              lg:text-[46px]
            "
          >
            Experience That Translates Into Real Impact
          </h2>

          <p
            className="
              mt-4
              max-w-lg
              text-sm
              leading-[1.5]
              text-white/75
              md:text-[16px]
            "
          >
            Practical consulting backed by experience across organizations,
            sectors, and operating environments.
          </p>
        </div>

        {/* Statistics */}
        <div
          className="
            mt-14
            grid
            grid-cols-2
            gap-x-8
            gap-y-10
            md:mt-16
            lg:grid-cols-4
            lg:gap-x-10
            lg:gap-y-0
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                border-l
                border-white/30
                pl-5
                pr-6
                md:pl-6
              "
            >
              {/* Number */}
              <p
                className="
                  text-4xl
                  font-semibold
                  leading-none
                  tracking-[-0.04em]
                  text-[#C9A227]
                  md:text-5xl
                "
              >
                {counts[index]}
                {stat.suffix}
              </p>

              {/* Label */}
              <p
                className="
                  mt-2
                  max-w-[190px]
                  text-[12px]
                  leading-[1.45]
                  text-white/70
                  md:text-xs
                "
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;