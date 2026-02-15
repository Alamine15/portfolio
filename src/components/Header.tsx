import Logo from "../assets/logo-techamine.png";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-blue-950/70 backdrop-blur border-b border-blue-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <img
          src={Logo}
          alt="Logo Techamine"
          className="h-15 w-auto"
        />

        <div className="flex gap-6 text-sm text-zinc-400">

          <a href="#hero" className="hover:text-cyan-300 transition">
            Accueil
          </a>

          <a href="#about" className="hover:text-cyan-300 transition">
            À propos
          </a>

          <a href="#formation" className="hover:text-cyan-300 transition">
            Formation
          </a>

          <a href="#experience" className="hover:text-cyan-300 transition">
            Expériences Professionnelles
          </a>

          <a href="#competences" className="hover:text-cyan-300 transition">
            Compétences
          </a>

          <a href="#projects" className="hover:text-cyan-300 transition">
            Projets
          </a>

          <a href="#contact" className="hover:text-cyan-300 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}
