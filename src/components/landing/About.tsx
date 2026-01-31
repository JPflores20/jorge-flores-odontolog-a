import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative bg-transparent" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-14"
          >
            <span className="text-accent font-semibold tracking-[0.2em] uppercase text-sm block mb-4">
              Mi Perfil
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
              Sobre Mí
            </h2>
          </motion.div>

          {/* Contenido de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="prose prose-lg prose-invert mx-auto text-gray-300 leading-relaxed text-center md:text-left font-light"
          >
            <p>
              Mi nombre es <strong className="text-white font-medium">Jorge Flores</strong>. 
              Soy estudiante del 4to semestre de la carrera de Odontología en 
              <strong className="text-white font-medium"> Global University</strong>.
            </p>
            <p>
              Mi objetivo actual es ampliar mi experiencia clínica a través de la atención 
              a pacientes que requieran tratamientos preventivos y restaurativos, como 
              retiro de caries o manejo de enfermedades periodontales.
            </p>
            <p>
              Su apoyo acudiendo a consulta es fundamental para mi formación profesional. 
              A cambio, usted recibe una atención dedicada, supervisada y de alta calidad 
              a costos muy accesibles.
            </p>
          </motion.div>

          {/* Bloque de Cita con Estilo Cristal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="relative mt-16"
          >
            {/* Usamos la clase glass-card aquí */}
            <div className="glass-card p-10 md:p-14 relative rounded-3xl text-center">
              <Quote className="w-12 h-12 text-accent/40 mx-auto mb-6 rotate-180" />
              
              <blockquote className="text-2xl md:text-4xl font-serif italic text-white leading-snug">
                "Una sonrisa limpia e impecable es mi principal objetivo."
              </blockquote>
              
              <div className="flex justify-center mt-8">
                <div className="w-24 h-1 bg-accent rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;