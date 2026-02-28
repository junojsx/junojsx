export default function AboutMe() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="min-h-screen flex items-center bg-[#E2DAF0]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20 grid md:grid-cols-2 gap-12 md:gap-16 items-center w-full">

        {/* Text content */}
        <div>
          {/* Decorative greeting badge — hidden from AT since heading already greets */}
          <div
            className="inline-flex items-center gap-2 border border-dark-gray/25 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-dark-gray mb-8 bg-white/40"
            aria-hidden="true"
          >
            <span className="w-2 h-2 rounded-full bg-soft-teal" />
            Hello!
          </div>

          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-dark-gray leading-tight mb-2"
          >
            I'm{' '}
            <span className="text-deep-purple">Your Name,</span>
            <br />
            a software
            <br />
            <span className="relative inline-block">
              accessibility engineer.
              {/* Decorative underline — purely visual */}
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-3/4 rounded-full bg-warm-gold"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="text-dark-gray/80 text-base leading-relaxed mt-8 mb-8 max-w-sm">
            I build inclusive digital experiences that work for everyone.
            I'm passionate about bridging great design and equitable access.
          </p>

          <a
            href="#projects"
            className="inline-block border-2 border-dark-gray text-dark-gray px-6 py-3
                       rounded-lg font-medium hover:bg-dark-gray hover:text-white transition-colors"
          >
            See My Work
          </a>
        </div>

        {/* Photo + decorations */}
        <div className="relative flex justify-center items-end h-72 sm:h-96">

          {/* Arch-shaped photo frame */}
          <div
            className="relative w-48 h-64 sm:w-60 sm:h-80 bg-deep-purple overflow-hidden"
            style={{ borderRadius: '9999px 9999px 0 0' }}
            aria-hidden="true"
          >
            <img
              src="justin.png"
              alt=""
              className="w-full h-full object-cover object-top"
              width={240}
              height={320}
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.style.background = 'linear-gradient(to bottom, #4E3C51 0%, #B6A5D0 100%)'
                }
              }}
            />
          </div>

          {/* Availability badge — spinning ring with sr-only text for AT */}
          <div className="absolute top-0 right-2 sm:right-6 w-20 h-20 sm:w-24 sm:h-24">
            <p className="sr-only">Available for freelance work</p>
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-spin"
              style={{ animationDuration: '12s' }}
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <path
                  id="badge-circle"
                  d="M50,50 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"
                />
              </defs>
              <circle cx="50" cy="50" r="46" fill="white" stroke="#4E3C51" strokeWidth="1.5" />
              <text fontSize="9.5" fontWeight="700" fill="#4E3C51" letterSpacing="2.2">
                <textPath href="#badge-circle">I'M AVAILABLE • FOR FREELANCE •</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="#4E3C51"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                focusable="false"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </div>

          {/* Decorative sparkles */}
          <span className="absolute top-6 right-2 text-xl text-deep-purple/40 select-none leading-none" aria-hidden="true">✦</span>
          <span className="absolute top-12 right-0 text-sm text-deep-purple/25 select-none leading-none" aria-hidden="true">✦</span>
          <span className="absolute top-2 left-4 text-sm text-deep-purple/25 select-none leading-none" aria-hidden="true">✦</span>
          <span className="absolute bottom-10 right-0 text-2xl text-deep-purple/30 select-none leading-none" aria-hidden="true">≋</span>
        </div>

      </div>
    </section>
  )
}
