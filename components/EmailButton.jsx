"use client";

import { useState } from "react";
import { profile } from "@/lib/portfolio";
import ActionIcon from "./ActionIcon";

export default function EmailButton({ open, onOpen, onToggle }) {
  const [message, setMessage] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setMessage("Email copied!");
    } catch {
      setMessage("Select the email address above to copy it manually.");
    }
  };

  return (
    <>
      <button type="button" className="text-link inline-flex items-center" aria-expanded={open} aria-controls="email-card" onPointerEnter={event => { if (event.pointerType === "mouse") onOpen(); }} onFocus={onOpen} onClick={onToggle}>
        Email me <ActionIcon name="mail" className="ml-1" />
      </button>
      {open && <div id="email-card" className="social-preview" aria-label="Email options">
        <p className="select-all break-all font-medium">{profile.email}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <button type="button" className="inline-flex min-h-11 items-center justify-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-darkTheme dark:hover:bg-gray-200" onClick={copyEmail}>Copy email</button>
          <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:border-gray-500 hover:bg-lightHover dark:border-white/30 dark:hover:bg-darkHover" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer">Open Gmail <ActionIcon name="mail" /></a>
        </div>
        <p role="status" aria-live="polite" className="mt-2 text-xs text-gray-600 dark:text-white/75">{message}</p>
      </div>}
    </>
  );
}
