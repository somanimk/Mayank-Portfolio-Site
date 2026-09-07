import { motion } from "motion/react";

export default function Section({ id, eyebrow, title, description, children }) {
  return (
    <motion.section id={id} aria-labelledby={`${id}-title`} className="section-shell"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.45 }}>
      <div className="section-heading">
        <p className="eyebrow text-base">{eyebrow}</p>
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {children}
    </motion.section>
  );
}

export function Tags({ items }) {
  return <ul className="flex flex-wrap gap-2" aria-label="Technologies and capabilities">
    {items.map(item => <li key={item} className="tag">{item}</li>)}
  </ul>;
}
