import { motion } from "framer-motion";
import { MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const whatsappNumber = "5214494279362";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría agendar una cita para consulta odontológica."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/20 rotate-45 opacity-30" />
        <div className="absolute bottom-40 right-20 w-96 h-96 border border-primary/10 rotate-12 opacity-20" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-muted/30 -rotate-12 opacity-25" />
        <div className="absolute top-10 right-1/4 w-32 h-32 bg-primary/5 rotate-45" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
            >
              Odontología Profesional
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              E.O. JORGE
              <span className="block text-primary">FLORES</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0"
            >
              Estudiante de Odontología | Global University
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Cita
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/30 -rotate-3" />
              <div className="absolute -inset-4 border border-muted/20 rotate-3" />
              
              {/* Photo placeholder */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] bg-card border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-6">
                  <User className="w-20 h-20 mx-auto text-muted-foreground/40 mb-4" />
                  <p className="text-muted-foreground text-sm">
                    Tu foto profesional aquí
                  </p>
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
