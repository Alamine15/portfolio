export default function Footer() {
  return (
    <footer className="py-10 text-center border-t border-blue-950 text-sm text-zinc-500">
      <p>© {new Date().getFullYear()} Al Amine Sao</p>
      <p className="mt-2">
        Portfolio personnel — Tous droits réservés
      </p>
    </footer>
  );
}
