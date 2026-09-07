import { assets } from "@/assets/assets";
import Image from "next/image";
import Section from "./Section";

const education = [
  {
    degree: "Master of Computer Applications",
    abbreviation: "MCA",
    institution: "Vellore Institute of Technology",
    years: "2022–2024",
  },
  {
    degree: "Bachelor of Computer Applications",
    abbreviation: "BCA",
    institution: "Maharishi Arvind Institute of Science and Management",
    years: "2017–2020",
  },
];

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Product thinking. Engineering depth.">
      <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
        <Image
          src={assets.user_image}
          alt="Mayank Somani"
          sizes="(min-width: 1024px) 280px, 256px"
          className="mx-auto w-64 max-w-full rounded-3xl lg:w-full"
        />
        <div className="min-w-0">
          <div className="space-y-5 font-Outfit text-lg leading-8 text-gray-700 dark:text-white/80 sm:text-xl sm:leading-9">
            <p>
              I’m a <strong className="font-semibold text-gray-900 dark:text-white">Senior Software Engineer</strong> with
              deep frontend expertise, building products across enterprise collaboration,
              healthcare SaaS, and education. My work spans shared deal plans,
              permission-aware organization hierarchies, and multi-step prescription workflows.
            </p>
            <p>
              I take features from design through implementation, testing, and delivery.
              Alongside hands-on development, I define reusable components and state-management
              patterns, investigate workflow defects, optimize data fetching, and guide engineers
              through design and code reviews. My experience also includes API integration and
              Node.js application development for DevStalk.
            </p>
          </div>
        </div>
      </div>

      <div aria-labelledby="education-title" className="mt-10 rounded-2xl border border-pink-200 bg-lightHover p-5 dark:border-pink-300/25 dark:bg-darkHover/40 sm:mt-12 sm:p-8">
        <h3 id="education-title" className="mb-6 font-Outfit text-2xl font-semibold text-gray-900 dark:text-white">
          Education
        </h3>
        <ul className="grid gap-5 md:grid-cols-2">
          {education.map(({ degree, abbreviation, institution, years }) => (
            <li key={abbreviation} className="min-w-0 rounded-xl border border-gray-200 bg-white/80 p-5 dark:border-white/15 dark:bg-darkTheme/60 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-800 dark:bg-pink-300/10 dark:text-pink-300">
                  {abbreviation}
                </span>
                <span className="text-base text-gray-600 dark:text-white/70">{years}</span>
              </div>
              <h4 className="text-lg font-semibold leading-7 sm:text-xl">{degree}</h4>
              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-white/75 sm:text-lg sm:leading-8">
                {institution}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
