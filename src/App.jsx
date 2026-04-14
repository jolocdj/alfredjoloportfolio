import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-[#080d1a] transition-colors duration-300">
      <div className="blob1 absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-300/40 dark:bg-indigo-900 opacity-30 blur-[120px]" />
      <div className="blob2 absolute top-[200px] right-[-50px] w-[400px] h-[400px] rounded-full bg-violet-300/30 dark:bg-violet-900 opacity-25 blur-[100px]" />
      <div className="blob3 absolute bottom-[-50px] left-[30%] w-[350px] h-[350px] rounded-full bg-purple-300/30 dark:bg-purple-900 opacity-20 blur-[100px]" />

      <div className="relative z-10">
        <Navbar dark={dark} setDark={setDark} />{" "}
        <Routes>
          <Route path="/" element={<Hero dark={dark} />} />
          <Route path="/about" element={<About dark={dark} />} />
        </Routes>
      </div>
    </div>
  );
}
