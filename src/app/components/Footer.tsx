import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F10] border-t border-[#D4AF37]/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <h3 
                className="text-2xl text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                PRIVYA
              </h3>
            </div>
            <p 
              className="text-sm text-[#F5F5F5]/60 mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A plataforma premium de acompanhantes de luxo em Portugal. Elegância, discrição e sofisticação.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1F1F21] hover:bg-[#8B1E3F] rounded-full flex items-center justify-center transition-colors border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1F1F21] hover:bg-[#8B1E3F] rounded-full flex items-center justify-center transition-colors border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-[#1F1F21] hover:bg-[#8B1E3F] rounded-full flex items-center justify-center transition-colors border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-[#D4AF37]" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 
              className="text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {["Início", "Perfis VIP", "Todas as Cidades", "Como Funciona", "Planos VIP"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* For Advertisers */}
          <div>
            <h4 
              className="text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Para Anunciantes
            </h4>
            <ul className="space-y-2">
              {["Criar Conta", "Planos e Preços", "Regras da Plataforma", "Dicas de Sucesso", "Suporte"].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-[#F5F5F5]/60 hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 
              className="text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#F5F5F5]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Email
                  </p>
                  <a 
                    href="mailto:contato@privya.pt" 
                    className="text-sm text-white hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    contato@privya.pt
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#F5F5F5]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Telefone
                  </p>
                  <a 
                    href="tel:+351210000000" 
                    className="text-sm text-white hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    +351 210 000 000
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#F5F5F5]/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Localização
                  </p>
                  <p className="text-sm text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Lisboa, Portugal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-[#D4AF37]/10 pt-8">
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {["Termos de Uso", "Política de Privacidade", "Cookies", "FAQ"].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm text-[#F5F5F5]/50 hover:text-[#D4AF37] transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p 
              className="text-sm text-[#F5F5F5]/40"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              © {currentYear} PRIVYA. Todos os direitos reservados. | Plataforma para maiores de 18 anos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
