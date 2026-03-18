"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, fadeIn } from "@/lib/animations";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-60 pointer-events-none z-0 blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              O que nossos tutores dizem
            </h2>
            <p className="text-muted-foreground text-lg">
              Avaliações reais de quem confia na Univet para cuidar da família.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div 
              key={i}
              variants={fadeIn}
              className="bg-white rounded-3xl p-8 shadow-sm border border-border/60 hover:shadow-lg transition-shadow relative"
            >
              <Quote size={40} className="absolute top-6 right-6 text-slate-100 rotate-180" />
              
              <div className="flex text-yellow-500 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-lg sm:text-xl font-medium leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-dark text-white rounded-full hidden sm:flex items-center justify-center font-bold text-lg">
                  {testimonial.initials.replace(/[^a-zA-Z]/g, '').substring(0, 2)}
                </div>
                <div>
                  <strong className="block text-foreground">{testimonial.initials}</strong>
                  <span className="text-sm text-primary font-medium">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
