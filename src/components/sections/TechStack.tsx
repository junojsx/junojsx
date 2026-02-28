import { techStack } from '@/data/techStack'

export default function TechStack() {
  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      className="bg-light-gray py-24"
    >
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-soft-teal font-semibold uppercase tracking-widest text-sm text-center mb-3">
          What I work with
        </p>
        <h2
          id="tech-heading"
          className="text-3xl font-bold text-dark-gray text-center mb-4"
        >
          Tech Stack
        </h2>
        <p className="text-center text-dark-gray/70 mb-14 max-w-xl mx-auto">
          Tools and technologies I use to build fast, accessible, and maintainable software.
        </p>

        <ul
          role="list"
          aria-label="Technologies I use"
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        >
          {techStack.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl
                         bg-white shadow-sm hover:shadow-md transition-all
                         hover:ring-2 hover:ring-soft-lavender hover:-translate-y-0.5"
            >
              <img
                src={tech.iconUrl}
                alt=""
                aria-hidden="true"
                className="w-10 h-10 object-contain"
                loading="lazy"
                width={40}
                height={40}
              />
              <span className="text-xs font-medium text-dark-gray text-center leading-tight">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
