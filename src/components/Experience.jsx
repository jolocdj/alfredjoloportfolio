import { useEffect, useRef } from "react";
const experiences = [
  {
    company: "Highly Succeed Inc.",
    grouped: true,
    roles: [
      {
        title: "Web Developer Intern",
        date: "January, 2026 - March, 2026",
        promoted: true,
      },
      {
        title: "QA Tester Intern",
        date: "January, 2026 - March, 2026",
      },
    ],
    overallDate: "January, 2026 - March, 2026",
    tags: [
      "React Native",
      "Supabase",
      "AWS",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Vercel",
      "Git",
      "Jira",
    ],
  },
];

export default function Experience({ dark }) {
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
      id="experience"
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
        {" "}
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          {" "}
          Experience
        </h2>
        <div className="space-y-4">
          {" "}
          {experiences.map((item) => (
            <div
              key={item.company}
              className={`fade-in-el rounded-[28px] border border-[0.5px] p-4 md:p-5 backdrop-blur-xl transition-colors duration-300 hover:border-[#78879e] ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-300/70 bg-white/60"
              }`}
            >
              {!item.grouped ? (
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  {" "}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.company}
                    </h3>
                    <p className="mt-3 text-slate-600 dark:text-slate-400">
                      {" "}
                      {item.role}
                    </p>
                  </div>
                  <div className="text-sm text-slate-400 dark:text-slate-500">
                    {" "}
                    {item.date}
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    {" "}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {" "}
                      {item.company}
                    </h3>
                    <div className="text-sm text-slate-500 dark:text-slate-400 md:text-right">
                      {item.overallDate}
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    {" "}
                    {item.roles.map((role) => (
                      <div
                        key={role.title}
                        className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                          <p className="text-slate-600 dark:text-slate-400">
                            {" "}
                            {role.title}
                          </p>
                        </div>

                        <div className="text-sm text-slate-400 dark:text-slate-500">
                          {role.date}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="my-4 h-px w-full bg-white/10 dark:bg-white/10" />
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-xl px-4 py-2 text-sm font-medium ${
                          dark
                            ? "bg-slate-600/60 text-slate-200"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
