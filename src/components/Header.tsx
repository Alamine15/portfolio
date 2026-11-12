
import { useState } from "react";
import Logo from "../assets/logo-techamine.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Formation", href: "#formation" },
    { name: "Expériences", href: "#experience" },
    { name: "Compétences", href: "#competences" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-950/70 backdrop-blur border-b border-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <img
          src={Logo}
          alt="Logo Techamine"
          className="h-10 w-auto"
        />

        {/* Liens PC */}
        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-cyan-300 transition whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bouton menu mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </div>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-blue-950 border-t border-blue-900 px-6 py-4 flex flex-col gap-4 text-zinc-400">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-cyan-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
