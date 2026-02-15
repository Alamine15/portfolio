export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center border-t border-blue-950">

      <h2 className="text-3xl font-bold mb-6 text-cyan-300">
        Contact
      </h2>

      <div className="flex justify-center gap-4">

        <a href="https://www.facebook.com/aminesaoshop" target="_blank" className="
            px-6 py-3 rounded-xl bg-zinc-900/50 border border-blue-900
           hover:bg-blue-600 hover:text-white hover:border-blue-400
           transition-all duration-300">
          Facebook
        </a>

        <a href="https://www.linkedin.com/in/al-amine-sao-b74162247/" target="_blank" className="
            px-6 py-3 rounded-xl bg-zinc-900/50 border border-pink-900
           hover:bg-pink-500 hover:text-white hover:border-pink-400
           transition-all duration-300">
          Linkedin
        </a>

        <a href="https://github.com/Alamine15" target="_blank" className="
            px-6 py-3 rounded-xl bg-zinc-900/50 border border-zinc-700
           hover:bg-white hover:text-black hover:border-white
           transition-all duration-300">
          GitHub
        </a>

      </div>

    </section>
  );
}
