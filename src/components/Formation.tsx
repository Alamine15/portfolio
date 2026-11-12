
export default function Formation() {
  return (
    <section
      id="formation"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 border-t border-blue-950"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Mon parcours académique
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Ma <span className="text-cyan-300">formation</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </div>

        <div className="relative max-w-2xl mx-auto border-l-2 border-cyan-500/30 ml-3 sm:ml-auto pl-7 sm:pl-10 space-y-8">

          {/* Licence 1 */}
          <div className="relative">
            <div className="absolute -left-[36px] sm:-left-[49px] top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#101b3b]" />

            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/40 transition duration-300">
              <span className="text-cyan-400 text-sm font-semibold">
                2024 – 2025
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                Licence 1 – Génie Informatique
              </h3>

              <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                Univers Professionnels
              </p>
            </div>
          </div>

          {/* Licence 2 */}
          <div className="relative">
            <div className="absolute -left-[36px] sm:-left-[49px] top-2 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#101b3b]" />

            <div className="bg-zinc-900/60 border border-cyan-400/30 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/60 transition duration-300">
              <span className="text-cyan-400 text-sm font-semibold">
                2025 – 2026
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                Licence 2 – Génie Informatique
              </h3>

              <p className="text-zinc-400 mt-2 text-sm sm:text-base">
                Univers Professionnels
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
