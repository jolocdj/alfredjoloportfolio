import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, MapPin, MessageSquareMore } from "lucide-react";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
export default function Contact({ dark }) {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_hgybmc5",
        "template_ultvo7f",
        formRef.current,
        {
          publicKey: "tTVwMJ8E-nfjiPU0p",
        },
      );

      formRef.current.reset();
      setIsSubmitted(true);
    } catch (error) {
      console.error("FAILED...", error);
      alert(error?.text || error?.message || "Failed to send message");
    } finally {
      setIsSending(false);
    }
  };
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

  if (isSubmitted) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center px-6 md:px-12 lg:px-20 py-10 transition-colors duration-300">
        {" "}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2
            className={`mt-8 text-4xl font-bold ${
              dark ? "text-white" : "text-slate-900"
            }`}
          >
            Message Sent!
          </h2>

          <p className={`mt-4 ${dark ? "text-slate-400" : "text-slate-600"}`}>
            {" "}
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>

          <button
            onClick={() => (window.location.href = "/")}
            className={`mt-6 rounded-full px-6 py-3 text-sm font-semibold transition-all ${
              dark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
            }`}
          >
            Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-16 md:pt-5 pb-9 flex items-start transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[10%] top-[18%] h-[190px] w-[190px] rounded-full border border-indigo-400/20" />
        <div className="absolute right-[16%] top-[23%] h-3 w-3 rounded-full bg-indigo-400/90 float-dot-1" />
        <div className="absolute right-[8%] top-[36%] h-3 w-3 rounded-full bg-violet-400/90 float-dot-2" />
        <div className="absolute right-[9%] top-[56%] h-4 w-4 rounded-full bg-violet-300/95 float-dot-3" />

        <div className="absolute right-[13%] top-[20%] flex h-[190px] w-[190px] items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center">
            <Mail className="absolute top-[22%] right-[22%] h-10 w-10 text-indigo-500/75 float-message" />{" "}
            <MessageCircle className="absolute bottom-[24%] left-[22%] h-9 w-9 text-violet-500/70 float-message" />{" "}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {" "}
          <div className="fade-in-el pt-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Let&apos;s work together
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              Have a project in mind or just want to chat? Feel free to reach
              out. I&apos;m always open to discussing new opportunities.
            </p>

            <div className="mt-6 space-y-4">
              {" "}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-slate-200 bg-white/70"
                  }`}
                >
                  <FaDiscord
                    className={dark ? "text-slate-200" : "text-slate-700"}
                    size={20}
                  />
                </div>

                <div>
                  <p
                    className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {" "}
                    Discord
                  </p>
                  <p
                    className={`text-base font-small font-semibold ${
                      dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    @chocob4rs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                    dark
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-slate-200 bg-white/70"
                  }`}
                >
                  <MapPin
                    className={dark ? "text-slate-200" : "text-slate-700"}
                    size={20}
                  />
                </div>

                <div>
                  <p className={dark ? "text-slate-400" : "text-slate-500"}>
                    Location
                  </p>
                  <p
                    className={`text-base font-small font-semibold ${
                      dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    Philippines
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`mt-12 h-px w-full max-w-[620px] ${
                dark ? "bg-white/10" : "bg-slate-200"
              }`}
            />

            <div className="mt-6">
              {" "}
              <p
                className={`mb-6 text-sm ${
                  dark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Find me on
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/jolocdj"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.07]"
                      : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/alfred-jolo-de-jesus-5227b7379/?locale=en"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                    dark
                      ? "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.07]"
                      : "border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="fade-in-el">
            <form ref={formRef} className="space-y-4" onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className={`w-full rounded-3xl border px-6 py-5 text-base outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-400 ${
                    dark
                      ? "border-white/10 bg-white/[0.03] text-white"
                      : "border-slate-200 bg-white/70 text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  className={`w-full rounded-3xl border px-6 py-5 text-base outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-400 ${
                    dark
                      ? "border-white/10 bg-white/[0.03] text-white"
                      : "border-slate-200 bg-white/70 text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Messages
                </label>
                <textarea
                  rows="8"
                  name="message"
                  placeholder="Tell me about your project..."
                  className={`w-full resize-none rounded-3xl border px-6 py-5 text-base outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-400 ${
                    dark
                      ? "border-white/10 bg-white/[0.03] text-white"
                      : "border-slate-200 bg-white/70 text-slate-900"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:shadow-lg hover:shadow-slate-900/20 dark:hover:shadow-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`

      @keyframes floatMessage {
  0%, 100% {
    transform: translateY(0px) translateX(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) translateX(6px) rotate(2deg);
  }
  50% {
    transform: translateY(4px) translateX(-8px) rotate(-2deg);
  }
  75% {
    transform: translateY(-6px) translateX(4px) rotate(1deg);
  }
}

.float-message {
  animation: floatMessage 10s ease-in-out infinite;
  will-change: transform;
}

.float-message-delayed {
  animation: floatMessage 25s ease-in-out infinite;
  animation-delay: 1.2s;
  will-change: transform;
}
        .fade-in-el {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-in-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        @keyframes floatA {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(5px); }
        }

        @keyframes floatB {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(8px) translateX(-6px); }
        }

        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .float-dot-1 {
          animation: floatA 5s ease-in-out infinite;
        }

        .float-dot-2 {
          animation: floatB 6s ease-in-out infinite;
        }

        .float-dot-3 {
          animation: floatC 4.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
