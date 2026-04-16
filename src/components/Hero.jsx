import Stats from "./Stats";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-12 pt-0 pb-10 sm:pb-14"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 bottom-0 overflow-hidden">
        {" "}
        <div className="absolute left-[10%] top-[8%] h-[980px] w-[980px] rounded-full bg-transparent blur-0" />{" "}
        <div className="absolute right-[10%] top-[45%] h-[250px] w-[250px] rounded-full border border-indigo-400/20 bg-transparent" />{" "}
        <div className="absolute right-[3%]top-[16%] h-[560px] w-[560px] rounded-full border border-indigo-500/25 ring-float-1" />
        <div className="absolute right-[-1%] top-[54%] h-[420px] w-[420px] rounded-full border border-indigo-500/18 ring-float-1" />
        <div className="absolute right-[-6%] top-[54%] h-[560px] w-[560px] rounded-full border border-indigo-500/10 border-dashed ring-float-2" />
        <div className="absolute right-[5%] top-[43%] h-[350px] w-[350px] rounded-full border border-indigo-400/20 ring-glow" />
        <div className="absolute right-[18%] top-[46%] text-[86px] leading-none font-mono text-indigo-500/55 float-code">
          &lt;/&gt;
        </div>
        <div className="absolute right-[37%] top-[40%] h-3 w-2 rounded-full bg-fuchsia-500/85 float-dot-1" />
        <div className="absolute right-[27%] top-[37%] h-4 w-4 rounded-full bg-violet-400/90 float-dot-3" />
        <div className="absolute right-[19%] top-[30%] h-5 w-5 rounded-full bg-indigo-400/85 float-dot-2" />
        <div className="absolute right-[15%] top-[73%] h-1w-1 rounded-full bg-violet-400/80 float-dot-2" />
      </div>

      <div className="relative z-10 pt-0 max-w-[1100px] mx-auto px-0 sm:px-2 lg:px-6">
        {" "}
        <div className="inline-flex max-w-full items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm mb-6 min-h-[42px] sm:h-[46px] bg-[#F0EEFF] border border-[#CBC5FF] dark:bg-white/5 dark:border-white/10 transition-colors duration-300">
          {" "}
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
          <span
            ref={typedRef}
            className="max-w-[180px] sm:max-w-none truncate sm:whitespace-nowrap text-[#5B4EF5] dark:bg-gradient-to-r dark:from-indigo-400 dark:via-violet-400 dark:to-purple-400 dark:bg-clip-text dark:text-transparent [-webkit-background-clip:text]"
          />
          <span
            className="inline-block w-[2px] h-[14px] bg-[#7B61FF] dark:bg-violet-400 flex-shrink-0"
            style={{ animation: "blink 0.7s step-end infinite" }}
          />
        </div>
        <h1
          className="text-[38px] leading-[42px] sm:text-[52px] sm:leading-[56px] lg:text-[75px] lg:leading-[75px] font-bold text-gray-900 dark:text-white tracking-[-1px] sm:tracking-[-1.4px] lg:tracking-[-1.8px] mb-6 transition-colors duration-300"
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
          Full Stack Developer.{" "}
        </h1>
        {/* Subtext */}
        <p
          className="text-gray-600 dark:text-gray-400 w-full max-w-[980px] mb-8 sm:mb-10 transition-colors duration-300"
          style={{
            fontFamily:
              '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif',
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: "clamp(1.6rem, 3vw, 1.9rem)",
          }}
        >
          I build scalable web applications with React Native, Javascript, and
          modern technologies.
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-2 w-full sm:w-auto">
          {" "}
          <Link
            to="/works"
            className="group inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3.5 rounded-full font-semibold text-base transition-all hover:gap-4 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20"
          >
            View My Work <span>→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-base text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 transition-all hover:shadow-lg w-full sm:w-auto"
          >
            Get in Touch
          </Link>
        </div>
        <div className="relative z-11 w-full max-w-[1100px]">
          <Stats />
        </div>
      </div>
      <style>{`
              @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes ringGlow {
          0%, 100% {
            opacity: 0.22;
            box-shadow: 0 0 0 rgba(99, 102, 241, 0);
          }
          50% {
            opacity: 0.55;
            box-shadow: 0 0 22px rgba(99, 102, 241, 0.22);
          }
        }

        .ring-glow {
          animation: ringGlow 3.8s ease-in-out infinite;
        }

        @keyframes floatCode {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.float-code {
  animation: floatCode 4s ease-in-out infinite;
}
      `}</style>
    </section>
  );
}
