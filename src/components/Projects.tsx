import Projet1 from "../assets/projet-immo-html-css.jpg";
import Projet2 from "../assets/projet-calculatrice-javascript.jpg";
import Carte from "../assets/carte-de-visite.png";

export default function Projects() {
  return (
    <section id="projects" className="py-1 px-6">

      <h2 className="text-3xl font-bold text-center mb-8 text-cyan-300">
        Mes dernires projets
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="rounded-2xl border border-blue-900 bg-zinc-900/40
                        hover:border-cyan-400 hover:-translate-y-1
                        transition-all duration-300 overflow-hidden
                        flex flex-col">

          <div className="h-40 overflow-hidden">
            <a href={Projet1} target="_blank">
            <img
              src={Projet1}
              alt="Projet Immobilier"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            </a>
          </div>

          <div className="p-4">
            <h3 className="text-sm text-zinc-300">Projet Immobilier</h3>
            <p className="text-xs text-zinc-500">HTML • CSS</p>
          </div>

        </div>

        <div className="rounded-2xl border border-blue-900 bg-zinc-900/40
                hover:border-cyan-400 hover:-translate-y-1
                transition-all duration-300 overflow-hidden
                flex flex-col">

          <div className="h-40 overflow-hidden">
            <a href={Projet2} target="_blank">
            <img
              src={Projet2}
              alt="Projet Calculatrice"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            </a>
          </div>

          <div className="p-4">
            <h3 className="text-sm text-zinc-300">Projet Calculatrice</h3>
            <p className="text-xs text-zinc-500">JavaScript</p>
          </div>

        </div>

        <div className="rounded-2xl border border-blue-900 bg-zinc-900/40
                hover:border-cyan-400 hover:-translate-y-1
                transition-all duration-300 overflow-hidden
                flex flex-col">

          <div className="h-40 overflow-hidden">
            <a href={Carte} target="_blank">
            <img
              src={Carte}
              alt="Design Carte de visite"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            </a>
          </div>

          <div className="p-4">
            <h3 className="text-sm text-zinc-300">Design de carte de visite</h3>
            <p className="text-xs text-zinc-500">Association MD Charity</p>
          </div>

        </div>

      </div>

    </section>
  );
}
