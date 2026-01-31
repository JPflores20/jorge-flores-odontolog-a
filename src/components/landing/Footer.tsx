import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo/Name */}
          <h3 className="text-2xl font-bold mb-2">
            E.O. <span className="text-primary">Jorge Flores</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Estudiante de Odontología | Global University
          </p>

          {/* Divider */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {currentYear} Jorge Flores. Todos los derechos reservados.
          </p>
          
          <p className="text-muted-foreground/50 text-xs mt-2">
            Los tratamientos son supervisados por profesionales certificados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
