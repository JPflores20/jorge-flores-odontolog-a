import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Estado para el índice del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const testimonials = [
    {
      name: "María González",
      text: "Excelente atención, muy profesional y amable. Me explicó todo el procedimiento detalladamente.",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      text: "Tenía mucho miedo al dentista, pero Jorge me hizo sentir muy cómodo desde el primer momento.",
      rating: 5,
    },
    {
      name: "Sofía López",
      text: "El desmanchamiento quedó increíble. Mis dientes lucen mucho más blancos y naturales.",
      rating: 5,
    },
    {
      name: "Javier Méndez",
      text: "Gran profesionalismo y ética. Se nota que le apasiona su trabajo y el trato es inmejorable.",
      rating: 5,
    },
    {
      name: "Andrea Castillo",
      text: "Llevé a mi hijo y tuvo una paciencia infinita. El enfoque preventivo me pareció excelente.",
      rating: 5,
    },
    {
      name: "Ricardo Vargas",
      text: "Instalaciones limpias y modernas. El servicio fue puntual y los precios muy accesibles.",
      rating: 5,
    },
    {
      name: "Elena Torres",
      text: "Me realicé una limpieza profunda y el cambio fue inmediato. Totalmente recomendado.",
      rating: 5,
    },
    {
      name: "Daniela Ruiz",
      text: "Honestidad ante todo. No intentó venderme tratamientos que no necesitaba. Muy confiable.",
      rating: 5,
    },
  ];

  // Determinar cuántos items se muestran según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    // Configuración inicial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Temporizador para mover el carrusel cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Si llegamos al final (considerando los items visibles), volvemos al inicio
        const maxIndex = testimonials.length - itemsPerPage;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 3000); // 2000ms = 2 segundos

    return () => clearInterval(interval);
  }, [itemsPerPage, testimonials.length]);

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

        {/* Carrusel (Ventana de visualización) */}
        <div className="overflow-hidden relative">
          {/* Riel animado */}
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * (100 / itemsPerPage)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-4"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="glass-card p-8 rounded-2xl h-full flex flex-col relative group hover:border-accent/50 transition-colors duration-300">
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicadores (Puntos) opcionales para control visual */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: testimonials.length - itemsPerPage + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-accent w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Ir al testimonio ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;