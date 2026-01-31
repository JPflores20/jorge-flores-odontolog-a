import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Instagram, Phone, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whatsappNumber = "5214494279362";
  // Mensaje actualizado
  const whatsappMessage = encodeURIComponent(
    "Hola Jorge, buen día. Me interesaría recibir más información sobre tus tratamientos y agendar una cita."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const instagramLink = "https://instagram.com/jorgeflores__";
  // Enlace para el botón de "Cómo llegar"
  const mapsLink = "https://www.google.com/maps/search/?api=1&query=Global+University+Aguascalientes"; 

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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
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

          {/* Location & Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full"
          >
             <div className="bg-card border border-border overflow-hidden relative group p-1 rounded-xl">
                {/* Decoration */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-10" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-10" />
                
                <div className="grid md:grid-cols-2 bg-background/50 backdrop-blur-sm">
                   {/* Map Column */}
                   <div className="relative w-full h-[350px] md:h-full min-h-[350px]">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59216.62408480367!2d-102.37447185136723!3d21.933051899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef89526633dd%3A0x5357250987248fdb!2sGlobal%20University!5e0!3m2!1ses-419!2smx!4v1769885971498!5m2!1ses-419!2smx" 
                        className="absolute inset-0 w-full h-full border-0 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        allowFullScreen
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      {/* Floating Button on Map */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 md:bottom-6 z-20">
                         <Button 
                           asChild 
                           className="shadow-xl bg-white text-black hover:bg-gray-100 border border-gray-200 font-medium"
                         >
                            <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                               <MapPin className="mr-2 h-4 w-4 text-primary fill-primary" />
                               Abrir en Google Maps
                            </a>
                         </Button>
                      </div>
                   </div>

                   {/* Info Column */}
                   <div className="p-8 md:p-12 flex flex-col justify-center gap-8 text-left">
                      <div>
                         <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                            <MapPin className="h-6 w-6 text-primary" />
                            Ubicación
                         </h3>
                         <p className="text-lg text-muted-foreground ml-9">
                            Clínicas de Global University
                         </p>
                         <p className="text-sm text-muted-foreground ml-9 mt-2">
                            Aguascalientes, México.
                         </p>
                      </div>

                      <div>
                         <h3 className="text-2xl font-serif font-bold mb-4 flex items-center gap-3">
                            <Clock className="h-6 w-6 text-primary" />
                            Horarios de Atención
                         </h3>
                         <div className="space-y-4 ml-9">
                            <div className="flex flex-col gap-2">
                               <span className="font-semibold text-lg border-b border-border pb-1 w-fit">Jueves</span>
                               <div className="space-y-2 mt-1">
                                  <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span className="text-muted-foreground">8:00 AM - 10:00 AM</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                      <span className="text-muted-foreground">12:00 PM - 2:00 PM</span>
                                  </div>
                               </div>
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;