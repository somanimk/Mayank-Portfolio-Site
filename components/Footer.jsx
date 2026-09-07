import ActionIcon from "./ActionIcon";
import { profile } from "@/lib/portfolio";

export default function Footer() {
  return <footer className="mx-auto mt-8 max-w-6xl border-t border-gray-200 px-6 py-8 dark:border-white/15">
    <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <div><a href="#top" className="text-2xl font-bold">Mayank<span className="text-pink-600 dark:text-pink-300">.</span></a><p className="mt-1 text-xs text-gray-500 dark:text-white/60">© {new Date().getFullYear()} Mayank Somani. All rights reserved.</p></div>
      <ul className="flex flex-wrap justify-center gap-6 text-sm">
        <li><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a className="text-link" href={profile.resume} download>Resume <ActionIcon name="download" className="ml-1" /></a></li>
      </ul>
    </div>
  </footer>;
}
