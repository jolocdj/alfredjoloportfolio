import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const [showSticky, setShowSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showSticky && <div className="h-[84px]" />}
      <nav
        className={`flex items-center justify-between px-20 pt-3 pb-2 text-gray-900 dark:text-white transition-all duration-300 ${
          showSticky
            ? "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10 shadow-sm"
            : "relative"
        }`}
      >
        {" "}
        <div
          className="flex items-center pl-40 group relative cursor-pointer"
          onClick={handleScrollToTop}
        >
          {" "}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto dark:invert-0 invert transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
        </div>
        <div className="absolute left-1/2 top-6 -translate-x-1/2 flex items-center gap-2">
          {" "}
          {["Home", "About"].map((item) => {
            const path = item === "Home" ? "/" : "/about";
            const isActive = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center pr-50">
          {" "}
          <button
            onClick={() => setDark(!dark)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
}
