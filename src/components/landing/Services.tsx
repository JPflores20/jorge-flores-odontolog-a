import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Droplets, Shield, Heart } from "lucide-react";

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
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="group relative"
  >
    {/* Fondo semitransparente oscuro para contraste */}
    <div className="relative bg-black/40 backdrop-blur-md border border-white/10 p-8 h-full rounded-lg transition-all duration-500 hover:border-[#01C877] hover:bg-black/60 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-[#01C877]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mb-6 group-hover:border-[#01C877] group-hover:scale-110 transition-all duration-300 bg-black/50">
          <div className="text-[#01C877]">{icon}</div>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#01C877] transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
          {description}
        </p>
        
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-400 uppercase tracking-wider">Inversión</span>
          <span className="text-2xl font-bold text-[#01C877]">{price}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Limpiezas Dentales",
      description: "Eliminación profunda de sarro y placa bacteriana para una salud gingival óptima.",
      price: "$150 MXN",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Desmanchamientos",
      description: "Recupera el tono natural de tus dientes eliminando manchas superficiales.",
      price: "$200 MXN",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "Retiro de Caries",
      description: "Restauración estética y funcional utilizando materiales de alta calidad.",
      price: "$250 MXN",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Salud Periodontal",
      description: "Diagnóstico y tratamiento para detener el sangrado y la inflamación de encías.",
      price: "$300 MXN",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-transparent" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-[#01C877] font-semibold tracking-widest uppercase text-sm">
            Mis Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-white">
            Tratamientos Profesionales
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Atención clínica supervisada con los más altos estándares de higiene y calidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;