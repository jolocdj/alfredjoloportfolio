import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Background from "./components/Background";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Certificates from "./components/Certificates";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
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
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-[#080d1a] transition-colors duration-300">
      {" "}
      <Background />
      <div className="relative z-10">
        <Navbar dark={dark} setDark={setDark} />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Hero dark={dark} />} />
          <Route
            path="/about"
            element={
              <>
                <About dark={dark} />
                <Skills dark={dark} />
                <Experience dark={dark} />
                <Education dark={dark} />
                <Awards dark={dark} />
                <Certificates dark={dark} />
              </>
            }
          />
          <Route path="/works" element={<Works dark={dark} />} />
          <Route path="/contact" element={<Contact dark={dark} />} />
        </Routes>

        <Footer dark={dark} />
      </div>
    </div>
  );
}
