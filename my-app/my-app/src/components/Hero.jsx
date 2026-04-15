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
        {dark && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "top left",
              filter: "blur(0.2px)",
            }}
          />
        )}
        <div className="absolute right-[2%] top-[5%] h-[540px] w-[540px] rounded-full border border-indigo-500/20 bg-transparent" />
        <div className="absolute right-[3%]top-[16%] h-[560px] w-[560px] rounded-full border border-indigo-500/25 ring-float-1" />
        <div className="absolute right-[-1%] top-[54%] h-[420px] w-[420px] rounded-full border border-indigo-500/18 ring-float-1" />
        <div className="absolute right-[-6%] top-[54%] h-[560px] w-[560px] rounded-full border border-indigo-500/10 border-dashed ring-float-2" />
        <div className="absolute right-[18%] top-[46%] text-[86px] leading-none font-mono text-indigo-500/55">
          &lt;/&gt;
        </div>
        <div className="absolute right-[37%] top-[40%] h-3 w-3 rounded-full bg-fuchsia-500/85 float-dot-1" />
        <div className="absolute right-[27%] top-[37%] h-5 w-5 rounded-full bg-violet-400/90 float-dot-3" />
        <div className="absolute right-[19%] top-[30%] h-4 w-4 rounded-full bg-indigo-400/85 float-dot-2" />
        <div className="absolute right-[15%] top-[73%] h-3 w-3 rounded-full bg-violet-400/80 float-dot-2" />
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
          <div className="flex items-start justify-between mb-10">
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
            <div className="flex items-center gap-10 text-sm">
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
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg width="22" height="22" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.76.08-.75.08-.75 1.22.09 1.86 1.25 1.86 1.25 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C17.8 4.93 18.8 5.25 18.8 5.25c.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <svg width="22" height="22" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-2.2 3.5-2.2 3.75 0 4.45 2.47 4.45 5.68V24h-4v-8.8c0-2.1-.04-4.8-2.93-4.8-2.93 0-3.38 2.29-3.38 4.65V24h-4V8z" />
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
