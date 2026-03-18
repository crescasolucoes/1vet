"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/animations";

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Venha nos visitar em Mossoró
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fácil acesso, estacionamento próprio e estrutura completa para receber você e seu pet com todo o conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações de Contato */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 h-full flex flex-col justify-center gap-8">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Endereço</h4>
                  <p className="text-muted-foreground">{SITE_CONFIG.contact.address.street}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-slate-900">Horário de Funcionamento</h4>
                  <p className="text-muted-foreground">{SITE_CONFIG.businessHours.weekdays}</p>
                  <p className="text-muted-foreground">{SITE_CONFIG.businessHours.saturday}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-foreground">Contato</h4>
                  <p className="text-muted-foreground">WhatsApp: {SITE_CONFIG.contact.whatsapp}</p>
                  <p className="text-muted-foreground">E-mail: {SITE_CONFIG.contact.email}</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Fallback do Mapa (Iframe do Google Maps) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight}
            className="lg:col-span-2 relative h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-sm border border-border/50"
          >
            {/* Um iframe de mapa real do Google Maps apontando provisoriamente para Mossoró */}
            <iframe
              title="Mapa de Localização Univet Dog'Shop"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.9482914757396!2d-37.341790400000005!3d-5.1883949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba071a4c7f7511%3A0xcc9fbb58563cd6fd!2sUnivet%20Dog&#39;Shop!5e0!3m2!1spt-BR!2sbr!4v1710714798623!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full object-cover filter contrast-[0.9] saturate-[1.2]"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
