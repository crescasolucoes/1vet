import { SITE_CONFIG } from "@/lib/constants";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Sobre */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">Univet Dog'Shop</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-4 pt-4">
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="hover:text-primary transition-colors text-sm">Início</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors text-sm">Serviços</a></li>
              <li><a href="#structure" className="hover:text-primary transition-colors text-sm">Estrutura & Plantão</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors text-sm">Provas Sociais</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors text-sm">Dúvidas Comuns</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address.street}, {SITE_CONFIG.contact.address.city} - {SITE_CONFIG.contact.address.state}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>WhatsApp: {SITE_CONFIG.contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>{SITE_CONFIG.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-white font-semibold mb-6">Atendimento</h4>
            <ul className="space-y-3 text-sm">
              <li className="pb-2 border-b border-slate-800/50">
                <span className="block text-slate-400 mb-1">Dias de Semana</span>
                <strong className="text-white font-medium">{SITE_CONFIG.businessHours.weekdays}</strong>
              </li>
              <li className="pb-2 border-b border-slate-800/50">
                <span className="block text-slate-400 mb-1">Sábados</span>
                <strong className="text-white font-medium">{SITE_CONFIG.businessHours.saturday}</strong>
              </li>
              <li>
                <span className="block text-red-400 mb-1 font-medium mt-2">Emergências: 24h sob aviso prévio.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.</p>
          <p>Responsável Técnico: Médico Veterinário CRMV/RN 0000</p>
        </div>
      </div>
    </footer>
  );
}
