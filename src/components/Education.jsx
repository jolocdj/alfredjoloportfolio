import { useEffect, useRef } from "react";

const education = [
  {
    school: "Bulacan State University",
    degree:
      "Bachelor of Science in Information Technology with specialization in Web and Mobile Applications",
    date: "Aug 2022 - June 2026",
    graduated: false,
  },
  {
    school: "Iba National Senior High School",
    degree: "Senior High School: General Academic Strand",
    date: "2019 - 2021",
    graduated: true,
  },
];

export default function Education({ dark }) {
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
      id="education"
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
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Education
        </h2>

        <div className="space-y-4">
          {education.map((item, i) => (
            <div
              key={item.school}
              className={`fade-in-el rounded-[28px] border border-[0.5px] p-4 md:p-5 backdrop-blur-xl transition-colors duration-300 hover:border-[#78879e] ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-300/70 bg-white/60"
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    {item.school}

                    {item.graduated && (
                      <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-400">
                        Graduated
                      </span>
                    )}
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-400">
                    {item.degree}
                  </p>
                </div>

                <div className="text-sm text-slate-400 dark:text-slate-500 md:text-right">
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
