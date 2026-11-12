
export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 relative py-20 sm:py-28 px-4 sm:px-6 border-t border-blue-900/50"
    >
      <div className="max-w-4xl mx-auto text-center">

        <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
          Restons en contact
        </span>

        <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-5">
          Me <span className="text-cyan-300">contacter</span>
        </h2>

        <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mb-8" />

        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-10">
          Vous souhaitez échanger, discuter d'un projet ou simplement
          en savoir plus sur mon travail ? Retrouvez-moi sur mes réseaux.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">

          <a
            href="https://www.facebook.com/aminesaoshop"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-zinc-900/60 border border-blue-500/30 text-zinc-300 hover:bg-blue-600 hover:text-white hover:border-blue-400 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-semibold">Facebook</span>
            <span className="text-lg group-hover:scale-110 transition">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/al-amine-sao-b74162247/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-zinc-900/60 border border-sky-500/30 text-zinc-300 hover:bg-sky-600 hover:text-white hover:border-sky-400 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-semibold">LinkedIn</span>
            <span className="text-lg group-hover:scale-110 transition">↗</span>
          </a>

          <a
            href="https://github.com/Alamine15"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-5 py-4 rounded-xl bg-zinc-900/60 border border-zinc-600/50 text-zinc-300 hover:bg-white hover:text-black hover:border-white hover:-translate-y-1 transition-all duration-300"
          >
            <span className="font-semibold">GitHub</span>
            <span className="text-lg group-hover:scale-110 transition">↗</span>
          </a>

        </div>
      </div>
    </section>
  );
}
