"use client";

import { motion } from "framer-motion";
import { Stethoscope, Scissors, Microscope, Syringe, Bed, ShoppingBag, ArrowRight } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope size={32} className="text-secondary" />,
  Scissors: <Scissors size={32} className="text-secondary" />,
  Microscope: <Microscope size={32} className="text-secondary" />,
  Syringe: <Syringe size={32} className="text-secondary" />,
  Bed: <Bed size={32} className="text-secondary" />,
  ShoppingBag: <ShoppingBag size={32} className="text-secondary" />,
};

export function ServicesSection() {
  const handleWhatsApp = (serviceName: string) => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${serviceName}.`)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-2">
              Nossas Especialidades
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 font-display tracking-tight">
              Assistência Completa para seu Pet
            </h3>
            <p className="text-muted-foreground text-lg">
              Em um só lugar, tudo que seu melhor amigo precisa para viver com saúde, conforto e alegria.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service) => (
            <motion.div 
              key={service.id}
              variants={fadeIn}
              className="group bg-background border border-orange-100 rounded-[2.5rem] p-8 md:p-10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle background decoration on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500" />
              
              <div className="w-16 h-16 bg-white rounded-[1.5rem] flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:bg-primary/10 transition-colors">
                {iconMap[service.icon] || <Stethoscope size={32} className="text-secondary" />}
              </div>
              
              <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <Button 
                variant="ghost" 
                className="p-0 h-auto text-primary hover:text-primary-dark hover:bg-transparent flex items-center gap-2 group/btn"
                onClick={() => handleWhatsApp(service.title)}
              >
                Agendar {service.title}
                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
