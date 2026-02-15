import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Formation from "./components/Formation";
import Experience from "./components/Experience";
import Competences from "./components/Competences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-950 via-indigo-950 to-black text-white">
      <Header />
      <Hero />
      <About />
      <Formation />
      <Experience />
      <Competences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
