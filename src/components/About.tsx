
export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden px-4 sm:px-6 py-20 sm:py-28"
    >
      {/* Décoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Qui suis-je ?
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            À propos <span className="text-cyan-300">de moi</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />
        </div>

        <div className="bg-zinc-900/50 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl hover:border-cyan-400/30 transition duration-300">

          <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-8 sm:leading-9 text-center">
            Je suis étudiant en Licence 2 Informatique, passionné par le
            développement web et le design graphique. J’aime concevoir
            des interfaces modernes, claires et intuitives, en combinant
            logique technique et sens du visuel.
            <br /><br />
            Mon objectif est de créer des expériences digitales à la fois
            fonctionnelles et esthétiques.
          </p>

          <div className="flex justify-center mt-8">
            <span className="text-cyan-300 text-sm border border-cyan-400/20 bg-cyan-400/5 rounded-full px-5 py-2">
              Développement Web & Design Graphique
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
