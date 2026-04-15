import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "POSHED to Excellence: Web Development & Career Growth",
    issuer: "DICT",
    date: "Feb 2025",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    date: "Aug 2015",
  },
  {
    title: "JavaScript and PHP Programming Certification",
    issuer: "Udemy",
    date: "Nov 2025",
    link: "https://www.udemy.com/certificate/UC-4bda0713-7daa-4588-ba6f-d40eb35403eb/",
  },
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    issuer: "Udemy",
    date: "March 2026",
    link: "https://www.udemy.com/certificate/UC-748f0865-e5bb-40b0-8287-18437992ad27/",
  },
  {
    title: "Unleash: Web Development Internship",
    issuer: "Highly Succeed Inc.",
    date: "Mar 2026",
  },
  {
    title: "Introduction to Web Design and Development",
    issuer: "LinkedIn Learning",
    date: "April 2026",
    link: "https://www.linkedin.com/learning/certificates/0a15904d8d0bad6ec2b221b08547c64775d5114c9bf2bec97583de31eb3f78a7",
  },
];

export default function Certificates({ dark }) {
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
      id="certificates"
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
          Certifications
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {certificates.map((item, i) => (
            <a
              key={`${item.title}-${item.date}`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`fade-in-el group rounded-[28px] border border-[0.5px] p-5 md:p-6 backdrop-blur-xl transition-colors duration-300 hover:border-[#78879e] ${
                dark
                  ? "border-white/10 bg-white/[0.04]"
                  : "border-slate-300/70 bg-white/60"
              }`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-base md:text-[17px] font-semibold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-[#78879e] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {item.issuer} - {item.date}
                  </p>
                </div>

                <div className="shrink-0 text-slate-400 transition-colors duration-300 group-hover:text-[#78879e] dark:text-slate-500">
                  <ExternalLink size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
