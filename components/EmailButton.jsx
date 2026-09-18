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
      <button type="button" className="text-link inline-flex items-center" aria-expanded={open} aria-controls="email-card" onMouseEnter={onOpen} onFocus={onOpen} onClick={onToggle}>
        Email me <ActionIcon name="mail" className="ml-1" />
      </button>
      {open && <div id="email-card" className="social-preview" aria-label="Email options">
        <p className="select-all break-all font-medium">{profile.email}</p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-3">
          <button type="button" className="text-link" onClick={copyEmail}>Copy email</button>
          <a className="text-link" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer">Open Gmail</a>
        </div>
        <p role="status" aria-live="polite" className="mt-2 text-xs text-gray-600 dark:text-white/75">{message}</p>
      </div>}
    </>
  );
}
