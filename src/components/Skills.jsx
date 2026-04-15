import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      "Bootstrap",
      "Tailwind CSS",
      "jQuery",
      "React.js",
      "Next.js",
      "Vue.js",
      "React Native",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "BACKEND",
    skills: [
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Java",
      "Kotlin",
      "Spring Boot",
      "C#",
      "Django",
      "Unit Testing",
      "Rest API",
      "PHP",
      "Discord.js",
    ],
  },
  {
    title: "TOOLS & DEVOPS",
    skills: ["Git", "GitHub", "Linux", "PHPUnit", "Jira", "Slack", "AWS"],
  },
  {
    title: "DESIGN & CREATIVE",
    skills: ["Figma", "Adobe XD", "Photoshop", "After Effects"],
  },
  {
    title: "IDES & ONLINE EDITORS",
    skills: ["Android Studio", "VS Code", "Visual Studio", "CodePen"],
  },
];

export default function Skills({ dark }) {
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

  const cardClass = dark
    ? "border-white/10 bg-white/[0.03]"
    : "border-slate-200 bg-white/70";

  const chipClass = dark
    ? "bg-slate-600/60 text-slate-200"
    : "bg-slate-100 text-slate-700";

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 pb-24 transition-colors duration-300 bg-transparent text-[#0f172a] dark:text-white"
    >
      <style>{`
        .fade-in-el {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {skillCategories.map((cat, i) => {
            let positionFix = "";

            if (i === 3) positionFix = "md:col-start-1";
            if (i === 4) positionFix = "md:col-start-2";

            return (
              <div
                key={cat.title}
                className={`fade-in-el min-h-[250px] rounded-[28px] border border-[0.5px] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#78879e] ${cardClass} ${positionFix}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <p className="mb-5 text-[15px] font-semibold tracking-wide text-slate-400">
                  {cat.title}
                </p>

                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-xl px-4 py-2 text-sm font-medium ${chipClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
