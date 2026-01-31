import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "5214494279362";
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre los tratamientos disponibles."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/jorgeflores__";

  return (
    <section id="contacto" className="py-24 md:py-32 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Contacto
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para tu cita?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Si está interesado en algún tratamiento, costos u horarios, 
            contácteme para resolver sus dudas. Estoy aquí para ayudarle.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="group"
            >
              <div className="relative bg-card border border-border p-8 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <MessageCircle className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">Respuesta rápida</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  La forma más rápida de contactarme. Escríbeme y te responderé lo antes posible.
                </p>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                  <Phone className="w-4 h-4" />
                  <span>449 427 9362</span>
                </div>
                
                <Button
                  asChild
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enviar Mensaje
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Instagram Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="group"
            >
              <div className="relative bg-card border border-border p-8 h-full transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 flex items-center justify-center">
                    <Instagram className="w-7 h-7 text-[#E4405F]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Instagram</h3>
                    <p className="text-muted-foreground text-sm">@jorgeflores__</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Sígueme en Instagram para ver actualizaciones y contenido sobre salud dental.
                </p>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
                  <span className="text-primary">@</span>
                  <span>jorgeflores__</span>
                </div>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-[#E4405F]/30 hover:bg-[#E4405F]/10 hover:border-[#E4405F]/50"
                >
                  <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5 text-[#E4405F]" />
                    Seguir en Instagram
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-12 grid sm:grid-cols-2 gap-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>Horarios flexibles según disponibilidad</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Clínicas de Global University</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
