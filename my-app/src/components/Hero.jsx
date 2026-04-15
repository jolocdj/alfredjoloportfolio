import Stats from "./Stats";
import { useEffect, useRef } from "react";

const PHRASES = [
  "Part-time opportunities are welcome",
  "Available for freelance projects",
  "Let's build something great",
  "Open for contract work",
];

function useTypingAnimation(ref) {
  useEffect(() => {
    let pi = 0,
      ci = 0,
      deleting = false,
      pauseTicks = 0;
    let timer;
    function tick() {
      const phrase = PHRASES[pi];
      if (!deleting) {
        ci++;
        if (ref.current) ref.current.textContent = phrase.slice(0, ci);
        if (ci === phrase.length) {
          deleting = true;
          pauseTicks = 28;
          timer = setTimeout(tick, 60);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        if (pauseTicks > 0) {
          pauseTicks--;
          timer = setTimeout(tick, 60);
          return;
        }
        ci--;
        if (ref.current) ref.current.textContent = phrase.slice(0, ci);
        if (ci === 0) {
          deleting = false;
          pi = (pi + 1) % PHRASES.length;
          timer = setTimeout(tick, 200);
          return;
        }
        timer = setTimeout(tick, 32);
      }
    }
    tick();
    return () => clearTimeout(timer);
  }, [ref]);
}
export default function Hero({ dark }) {
  const typedRef = useRef(null);
  useTypingAnimation(typedRef);

  return (
    <section
      className="relative px-12 pt-0 pb-10 overflow-hidden w-full min-h-[900px] -mt-0"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 bottom-0 overflow-hidden">
        {" "}
        <div className="absolute left-[10%] top-[8%] h-[980px] w-[980px] rounded-full bg-indigo-400/[0.05] blur-3xl" />
        <div className="absolute right-[5%] top-[33%] h-[350px] w-[350px] rounded-full border border-indigo-400/20 bg-transparent" />{" "}
        <div className="absolute right-[3%]top-[16%] h-[560px] w-[560px] rounded-full border border-indigo-500/25 ring-float-1" />
        <div className="absolute right-[-1%] top-[54%] h-[420px] w-[420px] rounded-full border border-indigo-500/18 ring-float-1" />
        <div className="absolute right-[-6%] top-[54%] h-[560px] w-[560px] rounded-full border border-indigo-500/10 border-dashed ring-float-2" />
        <div className="absolute right-[18%] top-[46%] text-[86px] leading-none font-mono text-indigo-500/55">
          &lt;/&gt;
        </div>
        <div className="absolute right-[37%] top-[40%] h-3 w-2 rounded-full bg-fuchsia-500/85 float-dot-1" />
        <div className="absolute right-[27%] top-[37%] h-4 w-4 rounded-full bg-violet-400/90 float-dot-3" />
        <div className="absolute right-[19%] top-[30%] h-5 w-5 rounded-full bg-indigo-400/85 float-dot-2" />
        <div className="absolute right-[15%] top-[73%] h-1w-1 rounded-full bg-violet-400/80 float-dot-2" />
      </div>

      <div className="relative z-10 pt-0 max-w-[1600px] mx-auto px-41">
        {" "}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm mb-6 h-[46px] bg-[#F0EEFF] border border-[#CBC5FF] dark:bg-white/5 dark:border-white/10 transition-colors duration-300">
          {" "}
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span
            ref={typedRef}
            className="whitespace-nowrap text-[#5B4EF5] dark:bg-gradient-to-r dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent [-webkit-background-clip:text]"
          />
          <span
            className="inline-block w-[2px] h-[14px] bg-[#7B61FF] dark:bg-violet-400 flex-shrink-0"
            style={{ animation: "blink 0.7s step-end infinite" }}
          />
        </div>
        <h1
          className="text-[75px] font-bold text-gray-900 dark:text-white leading-[75px] tracking-[-1.8px] mb-6 transition-colors duration-300"
          style={{
            fontFamily:
              '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontWeight: 700,
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Hi, I&apos;m{" "}
          <span className="inline-block bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent [-webkit-background-clip:text]">
            Jolo
          </span>
          .<br />
          Software Engineer.{" "}
        </h1>
        {/* Subtext */}
        <p
          className="text-gray-600 dark:text-gray-400 w-full max-w-[980px] mb-10 transition-colors duration-300"
          style={{
            fontFamily:
              '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
            fontSize: "1.25rem",
            lineHeight: "1.9rem",
          }}
        >
          I build scalable web applications with React Native, Javascript, and
          modern technologies.
        </p>
        {/* CTA Buttons */}
        <div className="flex gap-4 mb-2">
          {" "}
          <button className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-7 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            {" "}
            View My Work <span>→</span>
          </button>
          <button className="border border-black/15 dark:border-white/20 text-gray-900 dark:text-white px-7 py-3.5 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
            {" "}
            Get in Touch
          </button>
        </div>
        <div className="relative z-11 w-full max-w-[1100px]">
          <Stats />
        </div>
        {/* Hero / Footer separator */}
        <div
          className="mt-28 mb-12 h-px w-screen relative left-1/2 -translate-x-1/2"
          style={{
            background: dark
              ? "linear-gradient(to right, rgba(255,255,255,0.08), rgba(255,255,255,0.14), rgba(255,255,255,0.08))"
              : "linear-gradient(to right, rgba(0,0,0,0.05), rgba(0,0,0,0.12), rgba(0,0,0,0.05))",
          }}
        />
        {/* Footer-like section */}
        <div className="w-full max-w-[1360px] mx-auto text-gray-500 dark:text-gray-400">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-10">
            {/* Left */}
            <div className="max-w-[320px]">
              <img
                src="/logo.png"
                alt="Logo"
                className={`h-15 w-auto mb-4 transition duration-300 object-contain ${
                  dark ? "invert-0" : "invert"
                }`}
              />
              <p className="text-sm leading-6">
                Software Engineer crafting digital experiences.
              </p>
            </div>

            {/* Center */}
            <div className="flex items-center gap-12 text-sm self-center">
              {["Home", "About", "Works", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/jolocdj"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836a9.58 9.58 0 012.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/alfred-jolo-de-jesus-5227b7379/?locale=en"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-6
  bg-gradient-to-r 
  from-transparent via-black/10 to-transparent
  dark:via-white/10"
          />
          {/* Bottom Row */}
          <div className="flex items-center justify-between text-sm">
            <p>© 2026 Alfred Jolo De Jesus. All rights reserved.</p>
            <p>Powered by coffee ☕ & supervised by Summer! 🐱</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
