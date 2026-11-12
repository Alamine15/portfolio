
import Photo from "../assets/photo-al-amine.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 pb-16"
    >

      {/* Lumières décoratives */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* Photo */}
        <div className="flex justify-center mb-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-br from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/20 hover:scale-105 transition duration-500">

            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#101b3b]">
              <img
                src={Photo}
                alt="Photo de Al Amine Sao"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* Présentation */}
        <span className="inline-block text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-5">
          Bienvenue sur mon portfolio
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-5 break-words">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Al Amine Sao
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-blue-300 font-medium mb-6">
          Étudiant en informatique
        </p>

        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2">
          Développement Web & Design Graphique.
          <br className="hidden sm:block" />
          Passionné par le design et le développement, je conçois
          des expériences digitales modernes, fluides et engageantes.
        </p>

        {/* Boutons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-9">

          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3 rounded-xl bg-cyan-500 text-blue-950 font-bold hover:bg-cyan-300 hover:-translate-y-1 transition duration-300"
          >
            Découvrir mes projets
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-xl border border-cyan-400/40 text-cyan-300 font-semibold hover:bg-cyan-400/10 hover:-translate-y-1 transition duration-300"
          >
            Me contacter
          </a>

        </div>

      </div>
    </section>
  );
}
