export default function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <div>
          <p className="text-soft-teal font-semibold uppercase tracking-widest text-sm mb-3">
            Software Accessibility Engineer
          </p>
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-dark-gray mb-6 leading-tight"
          >
            Hi, I'm <span className="text-deep-purple">Your Name</span>
          </h1>
          <p className="text-dark-gray/80 text-lg leading-relaxed mb-8">
            I build inclusive digital experiences that work for everyone. With a
            background in software engineering and deep expertise in web
            accessibility, I bridge the gap between great design and equitable
            access — writing code that meets WCAG standards without sacrificing
            performance or aesthetics.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-block bg-deep-purple text-white px-6 py-3 rounded-lg font-medium
                         hover:bg-hover-active transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-block border-2 border-deep-purple text-deep-purple px-6 py-3
                         rounded-lg font-medium hover:bg-soft-lavender/20 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="flex justify-center">
          <div className="relative w-7xl h-7xl">
            <img
              src="justin.png"
              alt="Portrait photo of Your Name, software accessibility engineer"
              className="w-full h-full object-cover"
              width={288}
              height={288}
              onError={(e) => {
                // Fallback to a colored placeholder if image is missing
                const target = e.currentTarget;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.style.background =
                    "linear-gradient(135deg, #4E3C51, #B6A5D0)";
                  const initials = document.createElement("span");
                  initials.textContent = "YN";
                  initials.setAttribute("aria-hidden", "true");
                  initials.style.cssText =
                    "position:absolute;inset:0;display:flex;align-items:center;justify-content:center;" +
                    "font-size:4rem;font-weight:700;color:#ffffff;font-family:Inter,sans-serif";
                  parent.appendChild(initials);
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
