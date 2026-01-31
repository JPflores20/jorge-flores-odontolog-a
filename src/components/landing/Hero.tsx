import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Columna de Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
          {/* Badge de bienvenida */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-sm font-medium tracking-wide text-gray-200">
              Estudiante de Odontología | 4to Semestre
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-serif leading-tight">
            Hola, soy <br/>
            {/* Degradado de texto más luminoso y premium */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white/80 drop-shadow-sm">
              Jorge Flores
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed font-light">
            Comprometido con tu salud bucal. Busco pacientes para prácticas clínicas en 
            <span className="text-white font-medium"> Global University</span>, ofreciendo tratamientos de calidad a costos accesibles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Botón Principal con el nuevo acento vibrante */}
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-black font-semibold rounded-full px-8 h-14 text-base shadow-[0_0_30px_rgba(74,222,128,0.4)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(74,222,128,0.6)]"
              onClick={() => window.open("https://wa.me/524494279362", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Cita
            </Button>
            
            {/* Botón Secundario estilo cristal */}
            <Button 
              variant="outline" 
              size="lg"
              className="glass-card rounded-full px-8 h-14 text-base text-white border-white/10 hover:bg-white/10 hover:border-white/30 transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Tratamientos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
        
        {/* Columna de la Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative order-1 md:order-2 flex justify-center"
        >
          {/* Marco decorativo de luz */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-[3rem] blur-2xl transform rotate-6 scale-105 opacity-60"></div>
          
          {/* Contenedor de la imagen */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-white/10 shadow-2xl max-w-md w-full aspect-[3/4] glass-card p-2">
            <img 
              src="/Jorge.jpeg" // La ruta directa a la imagen en la carpeta public
              alt="E.O. Jorge Flores" 
              className="w-full h-full object-cover rounded-[2rem] shadow-inner"
            />
            {/* Brillo sutil sobre la imagen */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-black/30 via-transparent to-white/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;