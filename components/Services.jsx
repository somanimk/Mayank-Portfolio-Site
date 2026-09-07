import { expertise } from "@/lib/portfolio";
import Section, { Tags } from "./Section";
import Script from "next/script";
import ActionIcon from "./ActionIcon";

export default function Services() {
  return (
    <Section id="expertise" eyebrow="How I build" title="Engineering expertise." description="Web architecture, data integration, performance, and the practices behind reliable product delivery.">
      <div className="grid gap-5 md:grid-cols-2">
        {expertise.map(item => <article key={item.title} className="surface-card">
          <h3 className="mb-3 text-lg font-semibold">{item.title}</h3><p className="mb-5 body-copy text-gray-600 dark:text-white/75">{item.description}</p><Tags items={item.tags} />
        </article>)}
      </div>
      <aside aria-labelledby="certification-title" className="mt-8 rounded-2xl border border-pink-200 bg-lightHover p-6 dark:border-pink-300/25 dark:bg-darkHover/50 sm:p-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
          <div className="min-w-0 flex-1">
            <p className="eyebrow text-base">Certification</p>
            <h3 id="certification-title" className="font-Ovo text-2xl">Claude Certified Architect – Foundations</h3>
            <p className="mt-3 max-w-3xl body-copy text-gray-600 dark:text-white/75">In practice, I use Claude Code and MCP integrations to support codebase analysis, planning, and testing alongside hands-on implementation and code review.</p>
            <a
              href="https://www.credly.com/badges/fe8f483e-c049-42e9-89b8-af641e910782/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary mt-6"
              aria-label="Verify certification on Credly (opens in a new tab)"
            >
              Verify certification <ActionIcon />
            </a>
          </div>
          <div className="w-[150px] min-h-[270px] shrink-0" role="group" aria-label="Credly certification badge">
            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="fe8f483e-c049-42e9-89b8-af641e910782"
              data-share-badge-host="https://www.credly.com"
            />
          </div>
        </div>
      </aside>
      <Script src="https://cdn.credly.com/assets/utilities/embed.js" strategy="afterInteractive" />
    </Section>
  );
}
