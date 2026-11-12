
export default function Competences() {
  return (
    <section
      id="competences"
      className="scroll-mt-24 px-4 sm:px-6 py-20 sm:py-28"
    >
      <div className="max-w-5xl mx-auto">

        {/* Titre principal */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Mon savoir-faire
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Mes <span className="text-cyan-300">compétences</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </div>

        {/* Développement */}
        <div className="mb-16">

          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-7 text-center sm:text-left">
            <span className="text-cyan-400">01.</span> Compétences techniques
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">

            <div className="rounded-xl border border-orange-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-orange-400 font-semibold hover:border-orange-400 hover:-translate-y-1 transition duration-300">
              HTML
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-blue-400 font-semibold hover:border-blue-400 hover:-translate-y-1 transition duration-300">
              CSS
            </div>

            <div className="rounded-xl border border-sky-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-sky-400 font-semibold hover:border-sky-400 hover:-translate-y-1 transition duration-300">
              TypeScript
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-cyan-400 font-semibold hover:border-cyan-400 hover:-translate-y-1 transition duration-300">
              React
            </div>

            <div className="rounded-xl border border-teal-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-teal-400 font-semibold hover:border-teal-400 hover:-translate-y-1 transition duration-300">
              Tailwind CSS
            </div>

            <div className="rounded-xl border border-indigo-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-indigo-400 font-semibold hover:border-indigo-400 hover:-translate-y-1 transition duration-300">
              PHP
            </div>

            <div className="rounded-xl border border-yellow-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-yellow-400 font-semibold hover:border-yellow-400 hover:-translate-y-1 transition duration-300">
              Python
            </div>

            <div className="rounded-xl border border-red-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-red-400 font-semibold hover:border-red-400 hover:-translate-y-1 transition duration-300">
              Java
            </div>

            <div className="rounded-xl border border-cyan-500/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-cyan-300 font-semibold hover:border-cyan-300 hover:-translate-y-1 transition duration-300">
              MySQL
            </div>

            <div className="rounded-xl border border-gray-400/30 bg-zinc-900/60 p-5 sm:p-7 text-center text-gray-300 font-semibold hover:border-gray-200 hover:-translate-y-1 transition duration-300">
              Langage C
            </div>

          </div>
        </div>

        {/* Design */}
        <div>

          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-7 text-center sm:text-left">
            <span className="text-cyan-400">02.</span> Outils de design et création
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">

            <div className="rounded-xl border border-blue-500/30 bg-zinc-900/60 p-5 sm:p-6 text-center text-blue-400 font-semibold hover:border-blue-400 hover:-translate-y-1 transition duration-300">
              Adobe Photoshop
            </div>

            <div className="rounded-xl border border-orange-500/30 bg-zinc-900/60 p-5 sm:p-6 text-center text-orange-400 font-semibold hover:border-orange-400 hover:-translate-y-1 transition duration-300">
              Adobe Illustrator
            </div>

            <div className="rounded-xl border border-purple-500/30 bg-zinc-900/60 p-5 sm:p-6 text-center text-purple-400 font-semibold hover:border-purple-400 hover:-translate-y-1 transition duration-300">
              Canva
            </div>

            <div className="rounded-xl border border-purple-500/30 bg-zinc-900/60 p-5 sm:p-6 text-center text-purple-300 font-semibold hover:border-purple-200 hover:-translate-y-1 transition duration-300">
              CapCut
            </div>

            <div className="rounded-xl border border-violet-500/30 bg-zinc-900/60 p-5 sm:p-6 text-center text-violet-400 font-semibold hover:border-violet-400 hover:-translate-y-1 transition duration-300">
              Adobe After Effects
            </div>

            <div className="rounded-xl border border-pink-500/30 bg-zinc-900/60 p-5 sm:p-6 text-center text-pink-400 font-semibold hover:border-pink-400 hover:-translate-y-1 transition duration-300">
              Adobe InDesign
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
