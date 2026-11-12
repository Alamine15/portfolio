
export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Mon parcours
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Mes <span className="text-cyan-300">expériences</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 ml-3 sm:ml-5 space-y-7">

          {/* Expérience 1 */}
          <div className="relative pl-7 sm:pl-10">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#101b3b]" />

            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/40 transition duration-300">
              <span className="text-cyan-400 text-sm font-semibold">
                Depuis 2022
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-3">
                Graphic Designer
              </h3>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Conception de supports visuels et réalisation de travaux
                de design graphique.
              </p>
            </div>
          </div>

          {/* Expérience 2 */}
          <div className="relative pl-7 sm:pl-10">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#101b3b]" />

            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/40 transition duration-300">
              <span className="text-cyan-400 text-sm font-semibold">
                Avril 2025 – Mai 2025
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-2">
                Stage – Tout en Génie Informatique (TGI)
              </h3>

              <p className="text-zinc-500 text-sm mb-3">
                Dakar
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Expérience en milieu professionnel dans le domaine
                de l'informatique.
              </p>
            </div>
          </div>

          {/* Expérience 3 */}
          <div className="relative pl-7 sm:pl-10">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#101b3b]" />

            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/40 transition duration-300">
              <span className="text-cyan-400 text-sm font-semibold">
                Février 2026 – Mars 2026
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-2">
                Stage – AIglix Lab
              </h3>

              <p className="text-zinc-500 text-sm mb-3">
                Parcelles Unité 9
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Expérience professionnelle dans un environnement
                lié aux technologies informatiques.
              </p>
            </div>
          </div>

          {/* Expérience 4 */}
          <div className="relative pl-7 sm:pl-10">
            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#101b3b]" />

            <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 sm:p-7 hover:border-cyan-400/40 transition duration-300">
              <span className="text-cyan-400 text-sm font-semibold">
                Projets et réalisations
              </span>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-3">
                Projets académiques et personnels
              </h3>

              <ul className="text-zinc-400 text-sm sm:text-base leading-relaxed space-y-2">
                <li>• Réalisation de projets académiques en développement web.</li>
                <li>• Conception de supports visuels et travaux de design graphique.</li>
                <li>• Pratique des technologies front-end modernes.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
