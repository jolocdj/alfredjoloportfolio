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
      className="relative px-12 pt-0 pb-10 overflow-hidden w-full"
      style={{
        fontFamily:
          '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 -top-20 bottom-0 overflow-hidden">
        {" "}
        <div className="absolute left-[10%] top-[8%] h-[980px] w-[980px] rounded-full bg-transparent blur-0" />{" "}
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
