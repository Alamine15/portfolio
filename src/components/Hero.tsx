import Photo from "../assets/photo-al-amine.jpg";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center">

        <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-linear-to-r
         from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          M. Al Amine Sao
        </h2>

        <p className="text-blue-300 mb-6">
          Etudiant en informatique • Developpement Web & Graphic Designer
        </p>

        <div className="mt-10 flex justify-center mb-8">
          <div className="w-44 h-44 rounded-full overflow-hidden border border-cyan-400/30
                          shadow-lg shadow-cyan-400/10 hover:scale-105 transition duration-500">

            <img
              src={Photo}
              alt="Photo Al Amine"
              className="w-full h-full object-cover"
            />

          </div>
        </div>

        <p className="text-zinc-400 max-w-xl mx-auto">
         Passionné par le design et le développement, 
         je conçois des expériences digitales modernes, fluides et engageantes.
        </p>

      </div>
    </section>
  );
}
