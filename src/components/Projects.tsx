
import AccueilPage from "../assets/photo-accueil-amineshop.jpg";
import Projet2 from "../assets/projet-calculatrice-javascript.jpg";
import Haayo from "../assets/haayo.jpg";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Mes réalisations
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
            Mes derniers <span className="text-cyan-300">projets</span>
          </h2>

          <div className="w-16 h-1 bg-cyan-400 rounded-full mx-auto mt-5" />

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-6 leading-relaxed">
            Découvrez quelques projets réalisés dans le cadre de mon
            apprentissage en informatique et de mes activités créatives.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Projet Amineshop */}
          <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 shadow-lg">

            <a
              href={AccueilPage}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden aspect-[16/10]"
            >
              <img
                src={AccueilPage}
                alt="Aperçu du projet immobilier"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition duration-300" />

              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
                Voir l'image ↗
              </span>
            </a>

            <div className="p-5">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                Développement Web
              </span>

              <h3 className="text-lg font-bold text-white mt-2 mb-2">
                Projet Immobilier
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Conception d'une interface web dédiée au domaine immobilier.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
                  javascript
                </span>
                <span className="text-xs text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                  React
                </span>
              </div>
            </div>
          </div>

          {/* Calculatrice */}
          <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 shadow-lg">

            <a
              href={Projet2}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden aspect-[16/10]"
            >
              <img
                src={Projet2}
                alt="Aperçu du projet calculatrice"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition duration-300" />

              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
                Voir l'image ↗
              </span>
            </a>

            <div className="p-5">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                Programmation
              </span>

              <h3 className="text-lg font-bold text-white mt-2 mb-2">
                Projet Calculatrice
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Réalisation d'une calculatrice interactive avec JavaScript.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-yellow-300 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1">
                  JavaScript
                </span>
              </div>
            </div>
          </div>

          {/* Carte de visite */}
          <div className="group rounded-2xl border border-white/10 bg-zinc-900/60 overflow-hidden hover:border-cyan-400/50 hover:-translate-y-2 transition-all duration-300 shadow-lg">

            <a
              href={Haayo}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden aspect-[16/10]"
            >
              <img
                src={Haayo}
                alt="Design et impression des maillots de Haayo Agnam"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/20 transition duration-300" />

              <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition">
                Voir l'image ↗
              </span>
            </a>

            <div className="p-5">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                Impression Numérique
              </span>

              <h3 className="text-lg font-bold text-white mt-2 mb-2">
                Personnalisation Maillots
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Conception d'un support de communication.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-3 py-1">
                  Design graphique
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
