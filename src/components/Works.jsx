import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Barangay iRescue",
    description:
      "Developed Barangay iRescue, a real-time emergency response and incident management platform that enables residents to instantly report emergencies through a one-tap alert with precise GPS location data, significantly reducing delays caused by unclear incident reporting. The system features a centralized, role-based dashboard for responders and barangay officials to monitor alerts, manage response statuses, and access detailed incident information, alongside an interactive, color-coded crime map that visualizes weekly incident data to identify hotspots and optimize patrol deployment. It includes real-time notifications, structured incident logging, and responder activity tracking to ensure accountability and efficient coordination. Built with a focus on reliability and security, the platform enforces strict backend validation, prevents duplicate or invalid reports, and secures all API communications, while maintaining scalability for future integrations such as SMS alerts and predictive analytics, ultimately delivering a streamlined, data-driven solution to improve emergency response efficiency and community safety.",
    image: "/Proj-BI.mp4",
    type: "video",
    tags: ["HTML", "CSS", "Javascript", "Google Cloud Platform", "2+"],
    link: "https://barangayirescue.com",
    fullDescription:
      "Developed Barangay iRescue, a real-time emergency response and incident management platform that enables residents to instantly report emergencies through a one-tap alert with precise GPS location data, significantly reducing delays caused by unclear incident reporting. The system features a centralized, role-based dashboard for responders and barangay officials to monitor alerts, manage response statuses, and access detailed incident information, alongside an interactive, color-coded crime map that visualizes weekly incident data to identify hotspots and optimize patrol deployment. It includes real-time notifications, structured incident logging, and responder activity tracking to ensure accountability and efficient coordination. Built with a focus on reliability and security, the platform enforces strict backend validation, prevents duplicate or invalid reports, and secures all API communications, while maintaining scalability for future integrations such as SMS alerts and predictive analytics, ultimately delivering a streamlined, data-driven solution to improve emergency response efficiency and community safety.",
    builtWith: [
      "HTML",
      "CSS",
      "Javascript",
      "Google Cloud Platform",
      "Google Maps API",
      "Firebase",
    ],
  },
  {
    title: "Fact Attack",
    description:
      "Developed Fact Attack, a full-stack web-based quiz application built using Django, JavaScript, HTML, and CSS, designed to deliver an interactive and engaging learning experience through categorized quizzes with varying difficulty levels. The system features dynamic question rendering, score tracking, and a timer-based quiz flow that enhances user engagement and challenge, while backend logic ensures accurate evaluation and result computation. It includes user progress tracking, quiz completion handling, and structured navigation across categories, with error handling such as resolving route mismatches and ensuring seamless user flow. Designed with scalability and maintainability in mind, the application follows a modular architecture, enabling easy expansion of question sets and features while providing a responsive and intuitive interface for users.",
    image: "/Proj-FA.mp4",
    type: "video",
    tags: ["Django", "CSS", "HTML", "Javascript"],
    link: "#",
    fullDescription:
      "Developed Fact Attack, a full-stack web-based quiz application built using Django, JavaScript, HTML, and CSS, designed to deliver an interactive and engaging learning experience through categorized quizzes with varying difficulty levels. The system features dynamic question rendering, score tracking, and a timer-based quiz flow that enhances user engagement and challenge, while backend logic ensures accurate evaluation and result computation. It includes user progress tracking, quiz completion handling, and structured navigation across categories, with error handling such as resolving route mismatches and ensuring seamless user flow. Designed with scalability and maintainability in mind, the application follows a modular architecture, enabling easy expansion of question sets and features while providing a responsive and intuitive interface for users.",
    builtWith: ["Django", "CSS", "HTML", "Javascript"],
  },
  {
    title: "Professional Portfolio",
    description:
      "Developed a professional portfolio website to showcase projects, technical skills, and experience, built using modern web technologies with a focus on clean design, responsiveness, and user experience. The platform features a structured layout including project highlights, detailed descriptions, and role-based contributions, alongside interactive elements that enhance navigation and engagement. It incorporates optimized performance, mobile-friendly design, and organized content presentation to effectively communicate technical competencies and achievements, while maintaining scalability for future updates and additional project integrations.",
    image: "/Proj-PF.mp4",
    type: "video",
    tags: ["HTML", "Tailwind CSS", "Javascript", "Vite", "2+"],
    link: "https://jolocdj.github.io/",
    fullDescription:
      "Developed a professional portfolio website to showcase projects, technical skills, and experience, built using modern web technologies with a focus on clean design, responsiveness, and user experience. The platform features a structured layout including project highlights, detailed descriptions, and role-based contributions, alongside interactive elements that enhance navigation and engagement. It incorporates optimized performance, mobile-friendly design, and organized content presentation to effectively communicate technical competencies and achievements, while maintaining scalability for future updates and additional project integrations.",
    builtWith: [
      "HTML",
      "Tailwind CSS",
      "Javascript",
      "Vite",
      "React",
      "React Router",
    ],
  },
  {
    title: "Knight's Trial",
    description:
      "Developed Knight’s Trial, an immersive game environment project focused on atmospheric storytelling and environmental design, where players navigate a medieval-inspired setting without a traditional character-driven interface. The project emphasizes world-building through detailed scene composition, lighting, and interactive elements to create a sense of mystery and progression, allowing users to explore and uncover the narrative through the environment itself. Built using game development tools, the system incorporates optimized asset management, collision handling, and scene transitions to ensure smooth performance and user experience, while maintaining a scalable structure for future expansion of levels, mechanics, and interactive features.",
    image: "/Proj-KT.png",
    type: "image",
    tags: ["Unity", "C#", "JavaScript"],
    fullDescription:
      "Developed Knight’s Trial, an immersive game environment project focused on atmospheric storytelling and environmental design, where players navigate a medieval-inspired setting without a traditional character-driven interface. The project emphasizes world-building through detailed scene composition, lighting, and interactive elements to create a sense of mystery and progression, allowing users to explore and uncover the narrative through the environment itself. Built using game development tools, the system incorporates optimized asset management, collision handling, and scene transitions to ensure smooth performance and user experience, while maintaining a scalable structure for future expansion of levels, mechanics, and interactive features.",
    builtWith: [
      "HTML",
      "Tailwind CSS",
      "Javascript",
      "Vite",
      "React",
      "React Router",
    ],
  },
  {
    title: "Inventory Management System",
    confidential: true,
    description:
      "Developed an inventory management system designed to streamline product tracking, stock monitoring, and operational efficiency, featuring a centralized dashboard for managing items, categories, and stock levels in real time. The system supports CRUD operations, low-stock alerts, and detailed reporting to help users make informed decisions, while ensuring data accuracy through validation and controlled input processes. Built with a focus on usability and scalability, it provides a structured and intuitive interface, secure data handling, and the flexibility to integrate additional modules such as sales tracking and analytics for future expansion.",
    image: "/Proj-IS.mp4",
    type: "video",
    tags: ["HTML", "Javascript", "React", "Supabase", "3+"],
    link: "https://inventory-system-liart-two.vercel.app/",
    fullDescription:
      "Developed an inventory management system designed to streamline product tracking, stock monitoring, and operational efficiency, featuring a centralized dashboard for managing items, categories, and stock levels in real time. The system supports CRUD operations, low-stock alerts, and detailed reporting to help users make informed decisions, while ensuring data accuracy through validation and controlled input processes. Built with a focus on usability and scalability, it provides a structured and intuitive interface, secure data handling, and the flexibility to integrate additional modules such as sales tracking and analytics for future expansion.",
    builtWith: [
      "HTML",
      "Javascript",
      "React",
      "Supabase",
      "Vercel",
      "HTML",
      "Vite.js",
    ],
  },
  {
    title: "HSI Payroll Management System",
    confidential: true,
    description:
      "Developed the HSI Payroll Management System, a centralized platform designed to automate and streamline employee payroll processing, including salary computation, deductions, and payout tracking. The system features a structured workflow for managing employee records, payroll periods, and compensation details, supported by a clean dashboard for monitoring payroll status and generating reports. It ensures data accuracy through validation and organized data handling, while incorporating role-based access and secure processing to maintain confidentiality, with a scalable architecture that allows future integration of advanced reporting, tax computation, and employee self-service features.",
    image: "/Proj-PR.mp4",
    type: "video",
    tags: ["HTML", "Javascript", "React", "Supabase", "3+"],
    link: "https://ryu-payroll-2026.vercel.app/auth/login",
    fullDescription:
      "Developed the HSI Payroll Management System, a centralized platform designed to automate and streamline employee payroll processing, including salary computation, deductions, and payout tracking. The system features a structured workflow for managing employee records, payroll periods, and compensation details, supported by a clean dashboard for monitoring payroll status and generating reports. It ensures data accuracy through validation and organized data handling, while incorporating role-based access and secure processing to maintain confidentiality, with a scalable architecture that allows future integration of advanced reporting, tax computation, and employee self-service features.",
    builtWith: [
      "HTML",
      "Javascript",
      "React",
      "Supabase",
      "Vercel",
      "HTML",
      "Vite.js",
    ],
  },
  {
    title: "Customer Relationship Management (CRM) System",
    confidential: true,
    description:
      "Developed a Customer Relationship Management (CRM) system designed to centralize and streamline customer data, interactions, and sales processes, enabling businesses to efficiently manage leads, track communications, and monitor customer engagement throughout the lifecycle. The platform features a unified dashboard for viewing customer profiles, sales pipelines, and activity history, along with tools for managing follow-ups, recording transactions, and generating reports for data-driven decision-making. Built with a focus on usability and scalability, the system ensures data consistency through validation, supports role-based access control for secure operations, and provides a flexible architecture for future enhancements such as automation, analytics, and integration with external services.",
    image: "/Proj-CRM.png",
    type: "image",
    tags: ["React Native", "Tailwind CSS", "HTML", "Javascript", "2+"],
    link: "#",
    fullDescription:
      "Developed a Customer Relationship Management (CRM) system designed to centralize and streamline customer data, interactions, and sales processes, enabling businesses to efficiently manage leads, track communications, and monitor customer engagement throughout the lifecycle. The platform features a unified dashboard for viewing customer profiles, sales pipelines, and activity history, along with tools for managing follow-ups, recording transactions, and generating reports for data-driven decision-making. Built with a focus on usability and scalability, the system ensures data consistency through validation, supports role-based access control for secure operations, and provides a flexible architecture for future enhancements such as automation, analytics, and integration with external services.",
    builtWith: ["HTML", "Javascript", "React", "Supabase", "HTML", "Vite.js"],
  },
  {
    title: "Photobooth Web App (Work in Progress)",
    description:
      "Developed a photobooth web app that allows users to capture and customize photos using their device's camera. The app supports seamless integration with the device's camera API for smooth photo capture, while providing options for saving and sharing photos directly from the platform. Built with a focus on performance and responsiveness, the app ensures quick loading times and an intuitive user flow, while maintaining scalability for future feature additions such as social media integration and advanced editing capabilities.",
    image: "",
    type: "video",
    tags: ["HTML", "CSS", "Javascript", "Node.js", "2+"],
    link: "#",
    fullDescription:
      "Developed a photobooth web app that allows users to capture and customize photos using their device's camera. The app supports seamless integration with the device's camera API for smooth photo capture, while providing options for saving and sharing photos directly from the platform. Built with a focus on performance and responsiveness, the app ensures quick loading times and an intuitive user flow, while maintaining scalability for future feature additions such as social media integration and advanced editing capabilities.",
    builtWith: ["HTML", "CSS", "Javascript", "Node.js", "Git", "Vercel"],
  },
  {
    title: "MoveOnBot (Discord Bot)",
    description:
      "Developed a Discord bot for those who are brokenhearted. The bot features a range of functionalities including automated moderation, interactive games, and seamless integration with various Discord APIs. Built with a focus on reliability and performance, the bot ensures smooth operation even under high usage scenarios.",
    image: "/Proj-DC.mp4",
    type: "video",
    tags: ["Discord API", "Node.js", "JavaScript", "Express.js", "3+"],
    link: "https://discord.com/oauth2/authorize?client_id=1494650343798079589&permissions=2147567616&integration_type=0&scope=bot+applications.commands",
    fullDescription:
      "Developed a Discord bot for those who are brokenhearted. The bot features a range of functionalities including automated moderation, interactive games, and seamless integration with various Discord APIs. Built with a focus on reliability and performance, the bot ensures smooth operation even under high usage scenarios.",
    builtWith: [
      "Discord API",
      "Node.js",
      "JavaScript",
      "Express.js",
      "Git",
      "Discord.js",
    ],
  },
  {
    title: "Achievo (Work in Progress)",
    description:
      "Achievo is a productivity and task management web application designed to help users organize their daily activities, track progress, and stay focused on their goals. The platform provides an intuitive dashboard where users can manage tasks, monitor schedules through a calendar view, and keep track of ongoing work in a structured and visually appealing interface.",
    image: "",
    type: "video",
    tags: ["Javascript", "Node.js", "HTML", "Tailwind CSS", "5+"],
    link: "https://achievo-59su.onrender.com/",
    fullDescription:
      "Achievo is a productivity and task management web application designed to help users organize their daily activities, track progress, and stay focused on their goals. The platform provides an intuitive dashboard where users can manage tasks, monitor schedules through a calendar view, and keep track of ongoing work in a structured and visually appealing interface.",
    builtWith: [
      "Javascript",
      "Node.js",
      "HTML",
      "Tailwind CSS",
      "Git",
      "Vite.js",
      "Thunder Client",
      "Rest API",
      "PostgreSQL",
    ],
  },
  {
    title: "Sortify",
    description:
      "Sortify is a smart organization system designed to simplify the way users manage and categorize items or data. It streamlines sorting processes through an intuitive interface, improving efficiency, accuracy, and accessibility. The system is built to enhance productivity by helping users quickly organize, track, and retrieve information in a structured and user-friendly way.",
    type: "video",
    tags: ["Kotlin", "Node.js", "XML", "Firebase", "1+"],
    fullDescription:
      "Sortify is a smart organization system designed to simplify the way users manage and categorize items or data. It streamlines sorting processes through an intuitive interface, improving efficiency, accuracy, and accessibility. The system is built to enhance productivity by helping users quickly organize, track, and retrieve information in a structured and user-friendly way.",
    builtWith: ["Kotlin", "Node.js", "XML", "Tailwind CSS", "Firebase", "Java"],
  },
];

export default function Works({ dark }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden px-6 md:px-10 lg:px-16 pt-10 md:pt-9 pb-10"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden">
        <div className="absolute left-1/2 top-[8%] h-[820px] w-[820px] -translate-x-1/2 rounded-full bg-transparent blur-0" />
        <div className="absolute right-[6%] top-[12%] h-[320px] w-[320px] rounded-full border border-indigo-500/10" />
        <div className="absolute right-[10%] top-[20%] rotate-slow">
          <svg
            width="230"
            height="230"
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <path
              d="M83 18L170 45L210 110L175 196L77 214L23 129L83 18Z"
              stroke="rgb(99 102 241 / 0.32)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute right-[15%] top-[28%] grid grid-cols-2 gap-3 float-icons">
          <span className="h-4 w-4 rounded-[5px] border-2 border-indigo-500/70" />
          <span className="h-4 w-4 rounded-[5px] border-2 border-indigo-500/70" />
          <span className="h-4 w-4 rounded-[5px] border-2 border-indigo-500/70" />
          <span className="h-4 w-4 rounded-[5px] border-2 border-indigo-500/70" />
        </div>

        <div className="absolute right-[20%] top-[12%] h-5 w-5 rotate-45 rounded-[8px] bg-violet-500/45 float-diamond" />
        <div className="absolute right-[5%] top-[36%] h-3 w-3 rounded-full bg-violet-400/90 float-dot" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="max-w-[760px] mb-12 md:mb-14 fade-in-section">
          {" "}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Works
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            A collection of projects I&apos;ve worked on, showcasing my
            expertise in building modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
          {projects.map((project) => (
            <article key={project.title} className="group fade-in-section">
              {" "}
              <div className="block">
                {" "}
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/10 dark:bg-white/[0.02] backdrop-blur-[2px] transition duration-300 group-hover:border-indigo-400/30">
                  {" "}
                  {project.confidential && (
                    <span className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                      Confidential
                    </span>
                  )}
                  {project.type === "video" ? (
                    <video
                      src={project.image}
                      className={`h-[536px] md:h-[335px] w-full object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:brightness-110 ${
                        project.confidential ? "blur-md scale-110" : ""
                      }`}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`h-[536px] md:h-[335px] w-full object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] group-hover:brightness-110 ${
                        project.confidential ? "blur-md scale-110" : ""
                      }`}
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-black px-5 py-2 rounded-full text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h2>

                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 fade-in-section">
          <div className="text-center py-12 px-8 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200 dark:border-slate-700">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]" />

            <div className="relative z-10 max-w-[760px] mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Have a project in mind?
              </h2>

              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
                I&apos;m always open to discussing new projects and creative
                ideas.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold hover:shadow-lg transition-shadow"
              >
                Let&apos;s Talk
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
    @keyframes rotateSlow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes floatIcons {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-8px);
      }
    }

    @keyframes floatDiamond {
      0%, 100% {
        transform: rotate(45deg) translateY(0px);
      }
      50% {
        transform: rotate(45deg) translateY(-10px);
      }
    }

    @keyframes floatDot {
      0%, 100% {
        transform: translateY(0px);
        opacity: 0.9;
      }
      50% {
        transform: translateY(-6px);
        opacity: 1;
      }
    }

    .rotate-slow {
      animation: rotateSlow 18s linear infinite;
      transform-origin: center;
    }

    .float-icons {
      animation: floatIcons 4s ease-in-out infinite;
    }

    .float-diamond {
      animation: floatDiamond 3.6s ease-in-out infinite;
    }

    .float-dot {
      animation: floatDot 3s ease-in-out infinite;
    }

    .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .fade-in-section {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
    will-change: opacity, transform;
  }

  .fade-in-section.show {
    opacity: 1;
    transform: translateY(0);
  }
  `}</style>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/60 bg-white/30 backdrop-blur-sm">
          {" "}
          <div
            className={`w-[90%] max-w-[750px] max-h-[88vh] overflow-y-auto scrollbar-hide rounded-[1rem] p-8 md:p-10 relative shadow-2xl ${
              dark
                ? "bg-[#081225] border border-white/5"
                : "bg-white border border-slate-200"
            }`}
          >
            {" "}
            <button
              onClick={() => setSelectedProject(null)}
              className={`absolute top-4 right-4 ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              ✕
            </button>
            <div
              className={`relative overflow-hidden rounded-t-[1rem] border-b ${
                dark ? "border-white/10" : "border-slate-200"
              }`}
            >
              {" "}
              {selectedProject.confidential && (
                <span className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                  Confidential
                </span>
              )}
              {selectedProject.type === "video" ? (
                <video
                  src={selectedProject.image}
                  className={`w-full h-auto object-cover ${
                    selectedProject.confidential ? "blur-md scale-110" : ""
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload nofullscreen noremoteplayback"
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`w-full h-auto object-cover ${
                    selectedProject.confidential ? "blur-md scale-110" : ""
                  }`}
                />
              )}
            </div>
            <div className="p-8 md:p-10"></div>
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-4 ${
                dark ? "text-white" : "text-slate-900"
              }`}
            >
              {" "}
              {selectedProject.title}
            </h2>
            <p
              className={`leading-relaxed mb-6 ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {" "}
              {selectedProject.fullDescription}
            </p>
            <div className="mb-8">
              <p
                className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                  dark ? "text-slate-500" : "text-slate-500"
                }`}
              >
                {" "}
                Built With
              </p>

              <div className="flex flex-wrap gap-3">
                {selectedProject.builtWith?.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${
                      dark
                        ? "bg-slate-800 text-slate-300"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              {selectedProject.link && selectedProject.link !== "#" && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  View Live Project
                  <span>↗</span>
                </a>
              )}

              <button
                onClick={() => setSelectedProject(null)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  dark
                    ? "border border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
