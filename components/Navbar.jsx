import ActionIcon from "./ActionIcon";
import { assets } from "@/assets/assets";
import { navigation } from "@/lib/portfolio";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isScroll, setIsScroll] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => { if (desktop.matches) menuRef.current?.close(); };
    desktop.addEventListener("change", handleResize);
    return () => desktop.removeEventListener("change", handleResize);
  }, []);

  const openMenu = () => { menuRef.current.showModal(); setMenuOpen(true); };
  const closeMenu = () => menuRef.current.close();

  return <>
    <div className="pointer-events-none fixed right-0 top-0 -z-10 w-11/12 -translate-y-[80%] dark:hidden" aria-hidden="true"><Image src={assets.header_bg_color} alt="" className="w-full" /></div>
    <nav aria-label="Main navigation" className={`fixed top-0 z-40 w-full px-5 py-4 transition-colors sm:px-8 ${isScroll ? "bg-white/90 shadow-sm backdrop-blur-lg dark:bg-darkTheme/95" : "bg-white/70 backdrop-blur-sm dark:bg-darkTheme/80"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5">
        <a href="#top" aria-label="Mayank Somani, home" className="font-Outfit text-4xl font-bold text-black dark:text-white">Mayank<span className="text-pink-600 dark:text-pink-300">.</span></a>
        <ul className="hidden items-center gap-7 rounded-full border border-gray-200 bg-white/60 px-7 py-2 dark:border-white/20 dark:bg-transparent lg:flex">
          {navigation.map(item => <li key={item.href}><a className="text-link whitespace-nowrap font-Outfit text-base leading-8" href={item.href}>{item.label}</a></li>)}
        </ul>
        <div className="flex items-center gap-2 sm:gap-4">
          <button type="button" onClick={toggleTheme} aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"} className="flex size-11 items-center justify-center rounded-full hover:bg-lightHover dark:hover:bg-darkHover"><Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-5" /></button>
          <a href="#contact" className="hidden items-center justify-center gap-3 whitespace-nowrap rounded-full border border-gray-400 px-6 py-2 font-Outfit text-base leading-8 hover:bg-lightHover dark:border-white/40 dark:hover:bg-darkHover sm:inline-flex">Let’s talk <ActionIcon name="mail" /></a>
          <button type="button" ref={triggerRef} onClick={openMenu} aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-menu" className="flex size-11 items-center justify-center rounded-full lg:hidden"><Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" /></button>
        </div>
      </div>
    </nav>
    <dialog ref={menuRef} id="mobile-menu" aria-label="Navigation menu" onClick={event => { if (event.target === event.currentTarget) closeMenu(); }} onClose={() => { setMenuOpen(false); triggerRef.current?.focus(); }} className="mobile-menu">
      <div className="flex min-h-full flex-col gap-8 p-7">
        <button type="button" onClick={closeMenu} autoFocus aria-label="Close navigation menu" className="ml-auto flex size-11 items-center justify-center rounded-full border border-gray-300 dark:border-white/30"><span aria-hidden="true" className="text-2xl">×</span></button>
        <nav aria-label="Mobile navigation"><ul className="space-y-2">
          {[{ href: "#top", label: "Home" }, ...navigation, { href: "#contact", label: "Contact" }].map(item => <li key={item.href}><a onClick={closeMenu} href={item.href} className="block rounded-lg px-2 py-3 font-Outfit text-base leading-8 hover:bg-pink-100 dark:hover:bg-white/10">{item.label}</a></li>)}
        </ul></nav>
      </div>
    </dialog>
  </>;
}
