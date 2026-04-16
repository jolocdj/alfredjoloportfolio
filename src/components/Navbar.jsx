import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const [showSticky, setShowSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Contact", path: "/contact" },
  ];

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
      {showSticky && <div className="h-[72px] sm:h-[84px]" />}{" "}
      <nav
        className={`flex items-center justify-between px-4 sm:px-6 lg:px-12 py-0 text-gray-900 dark:text-white transition-all duration-300 ${
          showSticky
            ? "fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/30 border-b border-black/10 dark:border-white/10 shadow-sm"
            : "relative"
        }`}
      >
        {" "}
        <div
          className="flex items-center group relative cursor-pointer"
          onClick={handleScrollToTop}
        >
          {" "}
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 sm:h-12 lg:h-16 w-auto dark:invert-0 invert transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          />
        </div>
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 lg:px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"
          >
            Menu
          </button>

          <button
            onClick={() => setDark(!dark)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <div
          className={`md:hidden px-4 pb-4 ${
            showSticky
              ? "fixed top-[64px] left-0 right-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-white/10"
              : "relative"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                      : "text-gray-700 dark:text-gray-400 border border-gray-200 dark:border-gray-800 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
