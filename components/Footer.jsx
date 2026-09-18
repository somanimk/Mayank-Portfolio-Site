import SocialLinks from "./SocialLinks";

export default function Footer() {
  return <footer className="mx-auto mt-8 max-w-6xl border-t border-gray-200 px-6 py-8 dark:border-white/15">
    <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <div><a href="#top" className="text-2xl font-bold">Mayank<span className="text-pink-600 dark:text-pink-300">.</span></a><p className="mt-1 text-xs text-gray-500 dark:text-white/60">© {new Date().getFullYear()} Mayank Somani. All rights reserved.</p></div>
      <SocialLinks footer />
    </div>
  </footer>;
}
