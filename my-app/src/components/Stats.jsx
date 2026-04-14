import { Clock, FileText, Code2, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { icon: Clock, value: 0, suffix: "+", label: "Years Experience" },
  { icon: FileText, value: 6, suffix: "+", label: "Projects Completed" },
  { icon: Code2, value: 14, suffix: "+", label: "Technologies" },
  { icon: BadgeCheck, value: 6, suffix: "", label: "Certifications" },
];

function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ icon: Icon, value, suffix, label }) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className="bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-6 py-6 min-h-[130px] w-full
                 opacity-0 translate-y-4 animate-[fadeUp_0.6s_ease_forwards] transition-colors duration-300"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className="bg-indigo-500/15 dark:bg-indigo-500/20 text-indigo-500 dark:text-indigo-400 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300">
          {" "}
          <Icon size={20} />
        </div>
        <span className="text-[32px] font-bold text-gray-900 dark:text-white transition-colors duration-300">
          {" "}
          {count}
          {suffix}
        </span>
      </div>
      <p className="text-base text-gray-600 dark:text-gray-400 transition-colors duration-300">
        {label}
      </p>{" "}
    </div>
  );
}

export default function Stats() {
  return (
    <>
      <style>{`
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-20 w-full">
        {stats.map((s, i) => (
          <div key={s.label} style={{ animationDelay: `${i * 120}ms` }}>
            <StatCard {...s} />
          </div>
        ))}
      </div>
    </>
  );
}
