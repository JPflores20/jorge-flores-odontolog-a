import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    // CAMBIO: bg-transparent explícito
    <section id="about" className="py-24 md:py-32 relative bg-transparent" ref={ref}>
      
      {/* Fondo decorativo muy sutil para no tapar el degradado global */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <p className="text-[#01C877] font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Conóceme
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Sobre Mí</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Linea decorativa */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#01C877]/50 to-transparent hidden md:block" />
            
            <div className="md:pl-12">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
                Mi nombre es <span className="text-white font-medium">Jorge Flores</span>. 
                Actualmente curso el 4to semestre de la carrera de Odontología en 
                <span className="text-white font-medium"> Global University</span>. 
                Me encuentro en búsqueda de pacientes que requieran tratamiento para 
                retiro de caries o manejo de alguna enfermedad periodontal.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-12">
                Su apoyo acudiendo a consulta me ayudaría considerablemente a cumplir 
                mis horas clínicas, mientras usted recibe atención odontológica de calidad 
                a precios accesibles.
              </p>
            </div>
          </motion.div>

          {/* Quote Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative mt-16"
          >
            {/* CAMBIO: bg-white/5 para transparencia con blur */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 relative rounded-sm">
              {/* Esquinas decorativas */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#01C877]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#01C877]" />
              
              <Quote className="w-10 h-10 text-[#01C877]/50 mb-4" />
              
              <blockquote className="text-2xl md:text-3xl font-serif italic text-center text-white">
                "Una sonrisa limpia e impecable es mi principal objetivo."
              </blockquote>
              
              <div className="flex justify-center mt-6">
                <div className="w-16 h-0.5 bg-[#01C877]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;