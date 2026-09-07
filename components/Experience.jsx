import ActionIcon from "./ActionIcon";
import { assignments, earlierExperience } from "@/lib/portfolio";
import Section, { Tags } from "./Section";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience & ownership" title="Shipping software with product teams." description="Feature ownership, architecture, and technical delivery across enterprise collaboration, healthcare SaaS, and education products.">
      <article className="rounded-2xl border border-gray-300 p-5 dark:border-white/25 sm:p-8">
        <div className="flex flex-col justify-between gap-3 border-b border-gray-200 pb-6 dark:border-white/15 sm:flex-row sm:items-start">
          <div><p className="eyebrow">Current role</p><h3 className="text-xl font-semibold sm:text-2xl">Bounteous x Accolite</h3><p className="mt-1 text-gray-600 dark:text-white/75">Senior Software Engineer · Remote</p></div>
          <p className="shrink-0 text-sm text-gray-500 dark:text-white/60">Jul 2025 – Present</p>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-white/15">
          {assignments.map(assignment => <div key={assignment.name} className="py-7 last:pb-0">
            <div className="mb-3 flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h4 className="font-Ovo text-2xl">{assignment.name}</h4><p className="text-sm text-gray-500 dark:text-white/60">{assignment.date}</p>
            </div>
            <p className="mb-3 text-sm font-medium text-pink-700 dark:text-pink-300">{assignment.context}</p>
            <p className="body-copy text-gray-700 dark:text-white/80">{assignment.summary}</p>
            <ul className="my-4 list-disc space-y-3 pl-5 body-copy text-gray-600 marker:text-pink-500 dark:text-white/75">
              {assignment.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
            <Tags items={assignment.tags} />
            {assignment.name === "Clari Align" && <a href="#work" className="text-link mt-5 inline-block text-sm font-medium">Explore the feature case studies <ActionIcon /></a>}
          </div>)}
        </div>
      </article>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {earlierExperience.map(job => <article key={job.company} className="surface-card">
          <p className="mb-2 text-sm text-gray-500 dark:text-white/60">{job.date}</p><h3 className="text-xl font-semibold">{job.company}</h3><p className="mb-4 text-sm text-pink-700 dark:text-pink-300">{job.role}</p>
          <p className="mb-5 body-copy text-gray-600 dark:text-white/75">{job.description}</p><Tags items={job.tags} />
        </article>)}
      </div>
    </Section>
  );
}
