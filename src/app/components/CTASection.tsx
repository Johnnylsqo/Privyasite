import { UserPlus, Shield, Star, TrendingUp } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B1E3F]/20 via-[#0F0F10] to-[#0F0F10]" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8B1E3F]/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-[#1F1F21] to-[#2a2a2c] rounded-3xl p-8 md:p-12 border border-[#D4AF37]/10 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Torne-se uma Anunciante
            </h2>
            
            <p 
              className="text-lg text-[#F5F5F5]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Junte-se à plataforma premium de Portugal e alcance clientes de alto padrão
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="text-center p-6 bg-[#0F0F10]/50 rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B1E3F] to-[#8B1E3F]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Segurança
              </h3>
              <p 
                className="text-sm text-[#F5F5F5]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Plataforma segura e discreta
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#0F0F10]/50 rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-[#0F0F10]" />
              </div>
              <h3 
                className="text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Destaque VIP
              </h3>
              <p 
                className="text-sm text-[#F5F5F5]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Maior visibilidade com plano VIP
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#0F0F10]/50 rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#8B1E3F] to-[#8B1E3F]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 
                className="text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Mais Contatos
              </h3>
              <p 
                className="text-sm text-[#F5F5F5]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Alcance clientes premium
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#0F0F10]/50 rounded-xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#D4AF37]/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-6 h-6 text-[#0F0F10]" />
              </div>
              <h3 
                className="text-white mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Fácil Gestão
              </h3>
              <p 
                className="text-sm text-[#F5F5F5]/60"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Gerencie seu perfil facilmente
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-gradient-to-r from-[#8B1E3F] to-[#8B1E3F]/90 hover:from-[#8B1E3F]/90 hover:to-[#8B1E3F] text-white rounded-full transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              <UserPlus className="w-5 h-5" />
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Criar Conta Agora</span>
            </button>
            
            <button className="px-10 py-4 bg-transparent hover:bg-[#1F1F21] text-[#D4AF37] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] rounded-full transition-all">
              <span style={{ fontFamily: 'Inter, sans-serif' }}>Saiba Mais</span>
            </button>
          </div>
          
          {/* Info text */}
          <p 
            className="text-center text-sm text-[#F5F5F5]/50 mt-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            * Todos os perfis são moderados antes da publicação para garantir qualidade e autenticidade
          </p>
        </div>
      </div>
    </section>
  );
}
