const experiences = [
  {
    period: 'JAN 2024 – PRESENT',
    title: 'Senior Accessibility Engineer',
    company: 'Company Name',
    description:
      'Leading accessibility audits and remediation efforts. Establishing WCAG compliance standards and mentoring engineers on inclusive development practices.',
  },
  {
    period: 'MAR 2021 – JAN 2024',
    title: 'Frontend Developer',
    company: 'Company Name',
    description:
      'Built accessible, performant UI components in React and TypeScript. Collaborated with design teams to ensure inclusive experiences across products.',
  },
  {
    period: 'JUN 2019 – MAR 2021',
    title: 'UI Developer',
    company: 'Company Name',
    description:
      'Developed responsive interfaces and contributed to UI enhancements, debugging, and refining component libraries.',
  },
]

export default function MoreAboutMe() {
  return (
    <section
      id="more-about"
      aria-labelledby="more-about-heading"
      className="bg-[#E2DAF0] py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <span className="absolute top-10 right-16 text-2xl text-deep-purple/20 select-none pointer-events-none" aria-hidden="true">♡</span>
      <span className="absolute bottom-12 left-10 text-xl text-deep-purple/15 select-none pointer-events-none" aria-hidden="true">♡</span>
      <span className="absolute bottom-20 right-8 text-sm text-deep-purple/20 select-none pointer-events-none" aria-hidden="true">✦</span>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 grid md:grid-cols-[2fr_3fr] gap-12 md:gap-16 items-start">

        {/* Left column */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Circular photo — decorative duplicate of hero photo */}
          <div
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-deep-purple ring-4 ring-white shadow-lg shrink-0"
            aria-hidden="true"
          >
            <img
              src="justin.png"
              alt=""
              className="w-full h-full object-cover object-top"
              width={192}
              height={192}
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                const p = t.parentElement
                if (p) p.style.background = 'linear-gradient(135deg, #4E3C51, #B6A5D0)'
              }}
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-dark-gray mb-3">My experiences</h3>
            <p className="text-dark-gray/80 text-sm leading-relaxed max-w-xs">
              I've had the pleasure of working across a variety of roles and
              industries. I'm always interested in new, exciting, and challenging
              opportunities.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            aria-label="Download resume as PDF"
            className="inline-block border-2 border-dark-gray text-dark-gray px-6 py-3
                       rounded-lg font-medium text-sm hover:bg-dark-gray hover:text-white transition-colors"
          >
            More About Me
          </a>
        </div>

        {/* Right column */}
        <div>
          {/* Decorative badge — aria-hidden since heading already labels the section */}
          <div
            className="inline-flex items-center gap-2 border border-dark-gray/25 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-dark-gray mb-5 bg-white/40"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-full bg-soft-teal" />
            About
          </div>

          <h2
            id="more-about-heading"
            className="text-3xl md:text-4xl font-bold text-dark-gray mb-5 leading-tight"
          >
            More about me
          </h2>

          <p className="text-dark-gray/80 text-sm leading-relaxed mb-3">
            I'm a software accessibility engineer passionate about crafting digital
            experiences that are inclusive by design. I combine deep technical knowledge
            with a commitment to equitable access.
          </p>
          <p className="text-dark-gray/80 text-sm leading-relaxed mb-10">
            My journey in this field has been driven by a belief that the best software
            works for everyone — leveraging modern technologies while keeping people at
            the center of every decision.
          </p>

          {/* Work experience timeline */}
          <ol aria-label="Work experience">
            {experiences.map((exp, i) => (
              <li key={i} className="relative pl-7 pb-8">
                {/* Vertical connecting line — hidden from AT */}
                {i < experiences.length - 1 && (
                  <span
                    className="absolute left-[0.3rem] top-4 w-px bg-dark-gray/25 bottom-0"
                    aria-hidden="true"
                  />
                )}
                {/* Timeline dot */}
                <span
                  className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-deep-purple ring-2 ring-[#E2DAF0]"
                  aria-hidden="true"
                />

                <time className="text-xs text-dark-gray/60 font-medium block mb-1">
                  {exp.period}
                </time>
                <h4 className="font-bold text-dark-gray text-sm">
                  {exp.title}
                  <span className="font-normal text-dark-gray/60"> at {exp.company}</span>
                </h4>
                <p className="text-dark-gray/75 text-xs leading-relaxed mt-1">
                  {exp.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  )
}
