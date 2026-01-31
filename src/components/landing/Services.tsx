import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Droplets, Shield, Heart, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  delay: number;
  isInView: boolean;
}

const ServiceCard = ({ title, description, price, icon, delay, isInView }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className="group h-full"
  >
    {/* Tarjeta con estilo Cristal Premium y nuevo acento */}
    <div className="glass-card relative p-8 h-full rounded-2xl transition-all duration-500 group-hover:border-accent/50 group-hover:-translate-y-2 overflow-hidden">
      
      {/* Efecto de luz al hacer hover */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Encabezado: Icono y Título */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-xl border border-white/10 flex items-center justify-center bg-white/5 text-accent group-hover:bg-accent group-hover:text-black group-hover:border-transparent transition-all duration-300 shadow-sm">
            {icon}
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-accent transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300 font-serif tracking-wide">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow font-light">
          {description}
        </p>
        
        {/* Pie de tarjeta: Precio */}
        <div className="pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Inversión Desde</span>
          <span className="text-xl font-bold text-accent">{price}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services =  [
    {
      title: "Limpiezas Dentales",
      description: "Eliminación profunda de sarro y placa con ultrasonido para una salud gingival óptima y aliento fresco.",
      price: "$150 MXN",
      icon: <Sparkles className="w-7 h-7" />,
    },
    {
      title: "Desmanchamientos",
      description: "Tratamiento estético para recuperar el brillo natural de tus dientes eliminando manchas superficiales.",
      price: "$200 MXN",
      icon: <Droplets className="w-7 h-7" />,
    },
    {
      title: "Retiro de Caries",
      description: "Restauración funcional y estética de dientes dañados utilizando resinas de alta calidad.",
      price: "$250 MXN",
      icon: <Shield className="w-7 h-7" />,
    },
    {
      title: "Terapia Periodontal",
      description: "Diagnóstico y control de enfermedades de las encías para detener el sangrado y la inflamación.",
      price: "$300 MXN",
      icon: <Heart className="w-7 h-7" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-transparent" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Encabezado de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold tracking-[0.2em] uppercase text-sm flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-accent/50"></span>
            Mis Servicios
            <span className="w-8 h-px bg-accent/50"></span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Tratamientos Profesionales
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Atención clínica supervisada por especialistas, utilizando técnicas modernas 
            bajo los más estrictos estándares de higiene.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} isInView={isInView} />
          ))}
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-500 mt-12 italic"
        >
          * Los precios son cuotas de recuperación aproximadas y pueden variar según la evaluación clínica.
        </motion.p>
      </div>
    </section>
  );
};

export default Services;