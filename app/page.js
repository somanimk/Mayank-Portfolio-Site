"use client";

import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => {
      let saved;
      try { saved = localStorage.getItem("theme"); } catch { /* Theme also works without storage. */ }
      const dark = saved === "dark" || (saved !== "light" && systemTheme.matches);
      document.documentElement.classList.toggle("dark", dark);
      setIsDarkMode(dark);
    };
    syncTheme();
    systemTheme.addEventListener("change", syncTheme);
    window.addEventListener("storage", syncTheme);
    return () => { systemTheme.removeEventListener("change", syncTheme); window.removeEventListener("storage", syncTheme); };
  }, []);

  const toggleTheme = () => {
    const dark = !isDarkMode;
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch { /* Keep the selected theme for this visit. */ }
  };

  return <MotionConfig reducedMotion="user">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    <main id="main-content" tabIndex={-1}>
      <Header />
      <Experience />
      <Work />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </MotionConfig>;
}
