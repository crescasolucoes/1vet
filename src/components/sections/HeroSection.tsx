"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeIn, slideInFromLeft, slideInFromRight, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de agendar um serviço para meu pet.")}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background"
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] z-0 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-primary/20 text-primary-dark rounded-full px-5 py-2 text-sm font-bold mb-2 w-max border-2 border-primary/30 shadow-sm">
              <PawPrint size={18} className="text-primary-dark" />
              <span>Cuidado com muito amor e carinho</span>
            </motion.div>

            <motion.h1
              variants={slideInFromLeft}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.2] tracking-tight"
            >
              Cuidar do seu <span className="text-secondary">melhor amigo</span> nunca foi tão <span className="inline-block bg-primary/10 text-primary border-2 border-primary/20 px-4 py-1 rounded-2xl -rotate-2 ml-1 mt-2 shadow-sm">fácil!</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed font-medium"
            >
              Um espaço alegre e divertido onde seu pet ganha banho, tosa e todo o cuidado veterinário com profissionais apaixonados por animais.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 mt-6"
            >
              <Button size="lg" onClick={handleWhatsApp} className="gap-2 group shadow-xl shadow-primary/30 rounded-full font-bold text-lg px-8">
                Quero agendar!
                <PawPrint size={18} className="group-hover:rotate-12 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={fadeIn} className="flex flex-wrap gap-6 mt-8 pt-6 border-t-2 border-border/60 border-dashed">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground/70 bg-white rounded-full px-4 py-2 shadow-sm border border-border">
                <Heart size={20} className="text-red-400 fill-red-400" />
                Muuuito Amor
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-foreground/70 bg-white rounded-full px-4 py-2 shadow-sm border border-border">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                Estrutura 5 Estrelas
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            variants={slideInFromRight}
            initial="hidden"
            animate="visible"
            className="relative lg:ml-auto w-full max-w-[500px] mx-auto"
          >
            {/* Organic Shape Image Wrapper */}
            <div className="relative aspect-4/5 sm:aspect-square lg:aspect-4/5 w-full">
              {/* Decorative blob behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[spin_20s_linear_infinite] scale-105" />
              <div className="absolute inset-0 bg-secondary/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[spin_25s_linear_infinite_reverse] scale-110" />

              <div className="absolute inset-0 flex items-center justify-center translate-x-4">
                <Image
                  src="/logo.png"
                  alt="Univet Dog'Shop Logo"
                  width={600}
                  height={400}
                  className="w-[110%] h-auto md:w-[120%] rotate-2 hover:rotate-0 transition-transform duration-500 drop-shadow-2xl object-contain object-right-bottom scale-[1.10]"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-white rounded-3xl p-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] flex items-center gap-4 border-2 border-primary/20 z-20"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-[1.5rem] shrink-0">
                  <Star size={28} fill="currentColor" />
                </div>
                <div>
                  <p className="font-extrabold text-foreground text-lg leading-tight">+1.000 Pets</p>
                  <p className="text-sm font-bold text-muted-foreground leading-tight">Felizes e cheirosos!</p>
                </div>
              </motion.div>
            </div>

            {/* Small decorative dot grid behind the image */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(var(--color-primary)_3px,transparent_3px)] bg-size-[20px_20px] opacity-20 rotate-12" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
