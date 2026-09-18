import ActionIcon from "./ActionIcon";
import SocialLinks from "./SocialLinks";
import { assets } from "@/assets/assets";
import { profile } from "@/lib/portfolio";
import Image from "next/image";
import { motion } from "motion/react";
import { useState } from "react";

export default function Header() {
  const [isWaving, setIsWaving] = useState(false);

  return (
    <header id="top" className="mx-auto flex min-h-[min(850px,100svh)] max-w-5xl flex-col items-center justify-center gap-6 px-6 pb-16 pt-32 text-center sm:pt-36">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Image src={assets.profile_img} alt="Mayank Somani" priority sizes="112px" className="mx-auto w-28 rounded-full" />
        <p className="mt-5 font-Ovo text-xl sm:text-2xl">
          Hi, I’m Mayank <span className="inline-flex items-center gap-2 whitespace-nowrap">Somani
          <button
            type="button"
            aria-label="Wave hello"
            onClick={() => setIsWaving(true)}
            onAnimationEnd={() => setIsWaving(false)}
            className={`relative inline-flex size-7 shrink-0 items-center justify-center rounded-full origin-[70%_70%] before:absolute before:-inset-2 before:content-[''] ${isWaving ? "animate-wave" : ""}`}
          >
            <span aria-hidden="true">👋</span>
          </button>
          </span>
        </p>
      </motion.div>
      <p className="eyebrow !mb-0 text-base">Senior Software Engineer </p>
      <h1 className="max-w-4xl font-Ovo text-[2.5rem] leading-[1.12] tracking-tight sm:text-6xl lg:text-[4.25rem]">
        Software engineering.<br /><span className="text-pink-700 dark:text-pink-300">From interfaces to APIs.</span>
      </h1>
      <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-white/75 sm:text-lg sm:leading-8">
        I build web products with deep expertise in React, TypeScript, and Next.js, complemented by Node.js, Express, and MongoDB experience on DevStalk. At Bounteous x Accolite, I own component architecture, data flows, performance, and technical delivery for Clari Align.
      </p>
      <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
        <a href="#experience" className="button-primary">View experience <ActionIcon /></a>
        <a href={profile.resume} download className="button-secondary">Download resume <ActionIcon name="download" /></a>
      </div>
      <SocialLinks />
    </header>
  );
}
