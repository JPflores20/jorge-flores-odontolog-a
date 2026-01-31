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
    {/* CAMBIO: Se reemplazó 'bg-card' por 'bg-white/5 backdrop-blur-md' para efecto cristal */}
    <div className="relative bg-white/5 backdrop-blur-md border border-white/10 p-8 h-full transition-all duration-500 hover:border-[#01C877]/50 hover:shadow-[0_0_30px_rgba(1,200,119,0.1)] hover:-translate-y-1">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#01C877]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20 group-hover:border-[#01C877] transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20 group-hover:border-[#01C877] transition-colors duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-none border border-white/20 flex items-center justify-center mb-6 group-hover:border-[#01C877] group-hover:bg-[#01C877]/10 transition-all duration-300">
          <div className="text-[#01C877]">{icon}</div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#01C877] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Price */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
            Precio
          </p>
          <p className="text-2xl font-bold text-[#01C877]">
            {price}
          </p>
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
      description: "Limpieza profunda profesional para eliminar placa y sarro, manteniendo tu sonrisa saludable y brillante.",
      price: "$150 MXN",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Desmanchamientos",
      description: "Tratamiento especializado para eliminar manchas superficiales causadas por café, té o tabaco.",
      price: "$200 MXN",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "Retiro de Caries",
      description: "Eliminación cuidadosa de caries y restauración dental para preservar la estructura de tu diente.",
      price: "$250 MXN",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Tratamiento Periodontal",
      description: "Atención especializada para enfermedades de las encías, previniendo complicaciones futuras.",
      price: "$300 MXN",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    // CAMBIO: bg-transparent explícito
    <section id="services" className="py-24 md:py-32 relative bg-transparent" ref={ref}>
      {/* Background patterns sutiles (ajustados para no tapar el degradado) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-white/5 rotate-45 opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-[#01C877]/20 rotate-12 opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#01C877] font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Tratamientos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Servicios</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ofrezco tratamientos odontológicos de calidad a precios accesibles, 
            supervisados por profesionales de Global University.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={0.1 * (index + 1)}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-sm text-gray-400 mt-12"
        >
          * Los precios pueden variar según la complejidad del tratamiento
        </motion.p>
      </div>
    </section>
  );
};

export default Services;