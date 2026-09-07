import localFont from "next/font/local";
import "./globals.css";

const outfit = localFont({ src: "../assets/fonts/outfit-latin.woff2", weight: "100 900", variable: "--font-outfit", display: "swap", fallback: ["Arial", "sans-serif"] });
const ovo = localFont({ src: "../assets/fonts/ovo-latin.woff2", weight: "400", variable: "--font-ovo", display: "swap", fallback: ["Georgia", "serif"] });
const title = "Mayank Somani | Senior Software Engineer | React & TypeScript";
const description = "Senior Software Engineer with deep frontend expertise in React, TypeScript, and Next.js. Explore product ownership, architecture, performance, and reliable delivery.";

export const metadata = {
  title, description,
  authors: [{ name: "Mayank Somani" }],
  openGraph: { title, description, type: "website", locale: "en_US", siteName: "Mayank Somani" },
  twitter: { card: "summary", title, description },
};

// Apply the saved preference before paint; never overwrite it during hydration.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches));}catch(e){document.documentElement.classList.toggle('dark',window.matchMedia('(prefers-color-scheme: dark)').matches);}})();`;

export default function RootLayout({ children }) {
  return <html lang="en" suppressHydrationWarning>
    <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
    <body className={`${outfit.variable} ${ovo.variable}`}>{children}</body>
  </html>;
}
