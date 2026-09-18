"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { profile } from "@/lib/portfolio";
import EmailButton from "./EmailButton";
import ActionIcon from "./ActionIcon";

export default function SocialLinks({ footer = false }) {
  const [active, setActive] = useState(null);
  const [profiles, setProfiles] = useState({});
  const [loading, setLoading] = useState(true);
  const container = useRef(null);
  const pointerType = useRef(null);

  useEffect(() => {
    const dismiss = event => {
      if (!container.current?.contains(event.target)) setActive(null);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    Promise.all(["github", "linkedin"].map(async provider => {
      try {
        const response = await fetch(`/api/social/${provider}`, { signal: controller.signal });
        if (!response.ok) return;
        const data = await response.json();
        if (data.configured && !controller.signal.aborted) {
          setProfiles(current => ({ ...current, [provider]: data }));
        }
      } catch { /* Keep the local profile when the API is unavailable. */ }
    })).finally(() => {
      if (!controller.signal.aborted) setLoading(false);
    });
    return () => controller.abort();
  }, []);

  const details = profiles[active?.toLowerCase()];

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center gap-6 text-sm text-gray-600 dark:text-white/75"
      onPointerDownCapture={event => { pointerType.current = event.pointerType; }}
      onPointerLeave={event => { if (event.pointerType === "mouse") setActive(null); }}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setActive(null);
      }}
      onKeyDown={event => {
        if (event.key === "Escape") {
          setActive(null);
          event.stopPropagation();
        }
      }}
    >
      {(footer ? ["GitHub", "LinkedIn"] : ["LinkedIn", "GitHub"]).map(site => (
        <a key={site} className="text-link" href={profile[site.toLowerCase()]} target="_blank" rel="noopener noreferrer"
          onPointerEnter={event => { if (event.pointerType === "mouse") setActive(site); }}
          onFocus={() => setActive(site)}
          onClick={event => {
            if (event.detail !== 0 && (pointerType.current === "touch" || pointerType.current === "pen")) {
              event.preventDefault();
              setActive(site);
            }
          }}
        >
          {site}
        </a>
      ))}
      {footer ? (
        <a className="text-link" href={profile.resume} download onMouseEnter={() => setActive(null)} onFocus={() => setActive(null)}>Resume <ActionIcon name="download" className="ml-1" /></a>
      ) : (
        <EmailButton open={active === "email"} onOpen={() => setActive("email")} onToggle={() => setActive("email")} />
      )}
      {(active === "LinkedIn" || active === "GitHub") && (
        <div className={`social-preview text-left ${footer ? "social-preview-footer" : ""}`} aria-label={`${active} profile preview`}>
          <div className={`-mx-4 -mt-4 mb-4 rounded-t-2xl px-4 py-3 font-semibold text-white ${active === "LinkedIn" ? "bg-[#0a66c2]" : "bg-[#24292f]"}`}>{active}</div>
          <div className="flex items-center gap-3">
            <Image src={details?.avatar || assets.profile_img} unoptimized={Boolean(details?.avatar)} width={48} height={48} alt={`${details?.name || profile.name} profile photo`} sizes="48px" className="size-12 rounded-full" />
            <div>
              <p className="font-semibold">{details?.name || profile.name}</p>
              <p className="text-xs text-gray-500 dark:text-white/60">{active === "GitHub" ? `@${details?.username || "somanimk"}` : "Senior Software Engineer"}</p>
            </div>
          </div>
          <p className="mt-3 text-xs leading-5 text-gray-600 dark:text-white/75">{details?.bio || "React, TypeScript, Next.js · From interfaces to APIs."}</p>
          {details?.location && <p className="mt-2 text-xs">{details.location}</p>}
          {active === "GitHub" && details && <p className="mt-2 text-xs">{details.repos} public repositories · {details.followers} followers</p>}
          {loading && <p role="status" className="mt-2 text-xs text-gray-500 dark:text-white/60">Loading profile…</p>}
          <a className="text-link mt-3 inline-flex font-medium" href={profile[active.toLowerCase()]} target="_blank" rel="noopener noreferrer">View {active} profile ↗</a>
        </div>
      )}
    </div>
  );
}
