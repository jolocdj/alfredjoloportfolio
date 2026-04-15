import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";

const awards = [
  {
    title: "Running for Cum Laude in BSIT-WMA",
    organization: "Bulacan State University",
    date: "June 2026",
  },
  {
    title: "Dean's Lister (2023-2024)",
    organization: "Bulacan State University",
    date: "June 2024",
  },
  {
    title: "Public Commitee Head",
    organization:
      "Prestigious Organization of Software and Hardware Elite Developers (POSHED)",
    date: "April 2025",
  },
  {
    title: "With Honors",
    organization: "Iba National Senior High School",
    date: "Apr 2021",
  },
  {
    title: "With High Honors",
    organization: "Iba National High School",
    date: "April 2019",
  },
  {
    title: "Champion in Slogan Making Contest",
    organization: "Iba National High School",
    date: "Feb 2018",
  },

  {
    title: "With Honorable Mention",
    organization: "Vincente T. Reyes Elementary School",
    date: "Oct 2015",
  },
  {
    title: "Best in Religion (Elementary)",
    organization: "Vincente T. Reyes Elementary School",
    date: "Oct 2015",
  },
  {
    title: "3rd place in Web Designing Contest",
    organization: "Informatics SM City North-EDSA",
    date: "Sep 2014",
  },
  {
    title: "Solutatoryan in Kinder Graduation",
    organization: "Iba Day Care Center",
    date: "Oct 2009",
  },
];

export default function Awards({ dark }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-el");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-0 pb-12 transition-colors duration-300 bg-transparent"
    >
      <style>{`
        .fade-in-el {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
          Awards & Recognition
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {awards.map((item, i) => (
            <div
              key={`${item.title}-${item.date}`}
              className={`fade-in-el rounded-[28px] border border-[0.5px] p-5 md:p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#78879e] ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-300/70 bg-white/60"
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400">
                    <Sparkles size={20} />
                  </div>

                  <div>
                    <h3 className="text-sl font-bold leading-snug text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {item.organization}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-sm text-slate-400 dark:text-slate-500">
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
