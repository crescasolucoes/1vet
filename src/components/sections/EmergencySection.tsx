"use client";

import { motion } from "framer-motion";
import { Phone, Clock, AlertTriangle, Bird } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations";

export function EmergencyAndExoticsSection() {
  const handleWhatsApp = (context: string) => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent(`Olá! Preciso de atendimento para: ${context}`)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="structure" className="py-24 bg-primary-dark relative overflow-hidden text-white">
      {/* Background Texture/Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--color-secondary)_0%,transparent_60%)] bg-size-[200px_200px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Exotics Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-2 w-max border border-secondary/30 text-secondary">
              <Bird size={16} />
              <span>Diferencial Univet</span>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-display font-black leading-[1.1] tracking-tight">
              Atendimento Especializado para <span className="text-secondary">Animais Silvestres & Exóticos</span>
            </h3>
            
            <p className="text-white/80 text-lg max-w-lg leading-relaxed">
              Aves, répteis, roedores e pequenos mamíferos requerem cuidados específicos. Contamos com especialistas dedicados e estrutura adaptada para o bem-estar do seu pet não convencional.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {["Check-up Aves", "Clínica de Répteis", "Odontologia de Roedores", "Internação Isolada"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <Button size="lg" variant="secondary" onClick={() => handleWhatsApp("Animal Exótico")} className="gap-2">
                Consultar Especialista
              </Button>
            </div>
          </motion.div>

          {/* Emergency Box */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight}
            className="bg-background text-foreground rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-[100px] z-0 group-hover:scale-110 transition-transform duration-500" />
            
            <div className="bg-red-100 text-red-600 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 relative z-10">
              <AlertTriangle size={32} />
            </div>

            <h4 className="text-3xl font-display font-bold mb-4 text-slate-800">Plantão Veterinário</h4>
            <p className="text-muted-foreground mb-6">
              Sabemos que emergências não têm hora para acontecer. Nossa estrutura conta com suporte à vida contínuo para intervir nos momentos críticos.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <Clock className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <strong className="block text-slate-800 text-lg">Suporte à Vida</strong>
                  <span className="text-sm text-slate-500 mt-1 block">Monitoramento intensivo.</span>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full gap-2 bg-red-500 hover:bg-red-600 text-white rounded-full h-14 text-lg shadow-lg shadow-red-500/20" onClick={() => handleWhatsApp("EMERGÊNCIA")}>
              <Phone size={24} />
              Ligar para Emergência
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
