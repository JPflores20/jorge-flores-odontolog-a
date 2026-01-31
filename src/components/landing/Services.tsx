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
    <div className="relative bg-card border border-border p-8 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/30 group-hover:border-primary transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/30 group-hover:border-primary transition-colors duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-none border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
          <div className="text-primary">{icon}</div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Price */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            Precio
          </p>
          <p className="text-2xl font-bold text-primary">
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
    <section id="servicios" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 border border-muted/20 rotate-45 opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 border border-primary/10 rotate-12 opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Tratamientos
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
          className="text-center text-sm text-muted-foreground mt-12"
        >
          * Los precios pueden variar según la complejidad del tratamiento
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
