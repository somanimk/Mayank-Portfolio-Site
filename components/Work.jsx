import { selectedWork } from "@/lib/portfolio";
import Section, { Tags } from "./Section";

export default function Work() {
  return (
    <Section id="work" eyebrow="Selected engineering work" title="The details behind the delivery." description="Selected work across Clari Align, DoseSpot, KollegeApply, and HyperCharge Studio: the challenge, my engineering contribution, and the result.">
      <div className="grid gap-6 lg:grid-cols-2">
        {selectedWork.map(work => <article key={work.title} className="surface-card flex flex-col">
          <div className="mb-5 flex items-center justify-between gap-3"><p className="text-xs font-medium uppercase tracking-wider text-pink-700 dark:text-pink-300">{work.type}</p><span className="font-Ovo text-3xl text-gray-400 dark:text-white/35" aria-hidden="true">{work.number}</span></div>
          <h3 className="mb-5 font-Ovo text-2xl sm:text-3xl">{work.title}</h3>
          <dl className="mb-6 space-y-4 body-copy">
            {[['Challenge', work.problem], ['Engineering contribution', work.approach], ['Result', work.outcome]].map(([label, text]) => <div key={label}><dt className="font-semibold text-gray-800 dark:text-white">{label}</dt><dd className="text-gray-600 dark:text-white/75">{text}</dd></div>)}
          </dl>
          <div className="mt-auto"><Tags items={work.tags} /></div>
        </article>)}
      </div>
    </Section>
  );
}
