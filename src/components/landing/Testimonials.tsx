import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "María González",
      text: "Excelente atención, muy profesional y amable. Me explicó todo el procedimiento detalladamente y me sentí muy segura.",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      text: "Tenía mucho miedo al dentista, pero Jorge me hizo sentir muy cómodo desde el primer momento. ¡Lo recomiendo totalmente!",
      rating: 5,
    },
    {
      name: "Sofía López",
      text: "El desmanchamiento quedó increíble. Mis dientes lucen mucho más blancos y naturales. Sin duda volveré.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-24 relative bg-transparent" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-sm block mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">
            Lo que dicen mis pacientes
          </h2>
        </motion.div>

        {/* Grid de Testimonios */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-full"
            >
              <div className="glass-card p-8 rounded-2xl h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                {/* Icono de comillas decorativo */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
                
                {/* Estrellas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Texto */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow font-light italic">
                  "{testimonial.text}"
                </p>

                {/* Nombre */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <p className="text-white font-medium font-serif text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-accent/80">Paciente verificado</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;