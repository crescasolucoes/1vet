"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { clsx } from "clsx";
import { FAQ_ITEMS } from "@/lib/constants";
import { fadeIn, staggerContainer } from "@/lib/animations";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-primary/10 text-primary mb-6 rotate-3">
              <MessageCircleQuestion size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-black text-slate-800 mb-4 tracking-tight">
              Perguntas <span className="text-primary relative"><span className="relative z-10">Frequentes</span><svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20 z-0" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/></svg></span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tire suas dúvidas rapidamente sobre nossos serviços e atendimento.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`border-2 rounded-[2rem] transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-primary/30 shadow-md shadow-primary/5 bg-white scale-[1.02]" : "border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200"
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-lg md:text-xl ${isOpen ? "text-primary" : "text-slate-800"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    size={20} 
                    className={clsx("shrink-0 transition-transform duration-300", {
                      "rotate-180 text-primary": isOpen,
                      "text-muted-foreground": !isOpen
                    })} 
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
