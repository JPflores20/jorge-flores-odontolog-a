import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials"; // Importamos el nuevo componente
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    // IMPORTANTE: bg-transparent permite ver el degradado del CSS
    <main className="min-h-screen w-full bg-transparent overflow-x-hidden">
      <Hero />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      {/* Nueva sección de Testimonios */}
      <Testimonials /> 
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;