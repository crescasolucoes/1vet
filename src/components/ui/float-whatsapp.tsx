"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatWhatsApp() {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site e preciso falar com a Univet.")}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all outline-none focus:outline-none flex object-center"
      aria-label="Falar conosco no WhatsApp"
      title="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white" />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
      </span>
    </button>
  );
}
