import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const PrivyaLogo = ({ size = 'default' }: { size?: 'default' | 'small' }) => {
  const iconSize = size === 'small' ? 'w-5 h-5' : 'w-6 h-6';
  const textSize = size === 'small' ? 'text-sm' : 'text-xl';
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${iconSize} flex items-center justify-center`}>
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="logoGradTerms" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F2D77D" />
              <stop offset="50%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#B8922A" />
            </linearGradient>
          </defs>
          <path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="url(#logoGradTerms)" />
          <path d="M12 16L9 10H15L12 16Z" fill="#0F0F10" />
        </svg>
      </div>
      <span className={`${textSize} tracking-[0.25em] text-white uppercase`} style={{ fontFamily: 'Playfair Display, serif' }}>
        Privya
      </span>
    </div>
  );
};

export default function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="sticky top-0 z-50" style={{ backdropFilter: 'blur(20px)', background: 'linear-gradient(180deg, rgba(15,15,16,0.95) 0%, rgba(15,15,16,0.85) 100%)', borderBottom: '1px solid rgba(139,30,63,0.15)' }}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft size={20} />
              <span className="text-sm">Voltar</span>
            </button>
            <PrivyaLogo size="small" />
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-6 lg:px-10 py-12">
        
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full"
            style={{ background: 'linear-gradient(135deg, rgba(139,30,63,0.2) 0%, rgba(212,175,55,0.2) 100%)' }}
          >
            <Shield size={32} className="text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl text-white mb-4" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
            Direitos e Deveres
          </h1>
          <p className="text-white/60 text-lg">
            Regras, responsabilidades e garantias para todos os usuários da plataforma PRIVYA
          </p>
          <p className="text-white/40 text-sm mt-2">
            Última atualização: 17 de Março de 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          
          {/* Direitos dos Anunciantes */}
          <section className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={24} className="text-emerald-400" />
              <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Direitos dos Anunciantes
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Direito à privacidade e proteção de dados pessoais conforme LGPD e GDPR</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Controle total sobre as informações publicadas no perfil</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Poder de aceitar ou recusar clientes sem justificativa</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Definir seus próprios preços e condições de atendimento</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Solicitar remoção de avaliações ofensivas ou falsas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Denunciar comportamentos abusivos ou desrespeitosos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Cancelar ou pausar anúncio a qualquer momento</span>
              </li>
            </ul>
          </section>

          {/* Deveres dos Anunciantes */}
          <section className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-[#D4AF37]" />
              <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Deveres dos Anunciantes
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Ter no mínimo 18 anos completos (verificação obrigatória)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Publicar apenas fotos reais e atualizadas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Ser honesto sobre serviços oferecidos e valores</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Respeitar horários e compromissos agendados</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Manter comportamento profissional e respeitoso</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Não utilizar a plataforma para atividades ilegais</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Atualizar disponibilidade e status online regularmente</span>
              </li>
            </ul>
          </section>

          {/* Direitos dos Clientes */}
          <section className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle size={24} className="text-emerald-400" />
              <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Direitos dos Clientes
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Privacidade e discrição total em todas as interações</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Acesso a informações verdadeiras sobre serviços e valores</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Avaliar anunciantes de forma honesta e construtiva</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Denunciar perfis falsos ou comportamentos inadequados</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Cancelar agendamentos com antecedência razoável</span>
              </li>
            </ul>
          </section>

          {/* Deveres dos Clientes */}
          <section className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-[#D4AF37]" />
              <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Deveres dos Clientes
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Ter no mínimo 18 anos completos (verificação obrigatória)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Respeitar limites e condições estabelecidos pelo anunciante</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Manter higiene pessoal adequada</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Ser pontual e cumprir acordos combinados</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Não gravar, fotografar ou filmar sem consentimento</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Não compartilhar dados pessoais do anunciante</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Comportar-se de forma educada e respeitosa</span>
              </li>
            </ul>
          </section>

          {/* Proibições */}
          <section className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(139,30,63,0.15) 0%, rgba(107,23,48,0.1) 100%)', border: '1px solid rgba(139,30,63,0.3)' }}>
            <div className="flex items-center gap-3 mb-6">
              <XCircle size={24} className="text-red-400" />
              <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Estritamente Proibido
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Exploração sexual de menores (banimento permanente + denúncia às autoridades)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Tráfico de pessoas ou coerção de qualquer tipo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Uso de fotos de terceiros sem autorização</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Assédio, ameaças ou comportamento abusivo</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Fraudes financeiras ou golpes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Discriminação por raça, gênero, orientação sexual ou religião</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-400 mt-1">✕</span>
                <span>Compartilhamento de conteúdo ilegal</span>
              </li>
            </ul>
          </section>

          {/* Responsabilidade da Plataforma */}
          <section className="rounded-2xl p-8" style={{ background: 'linear-gradient(135deg, rgba(31,31,33,0.6) 0%, rgba(26,26,28,0.4) 100%)', border: '1px solid rgba(139,30,63,0.15)' }}>
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} className="text-[#D4AF37]" />
              <h2 className="text-2xl text-white" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Compromisso da PRIVYA
              </h2>
            </div>
            <ul className="space-y-3 text-white/70">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Proteger dados pessoais com criptografia de ponta</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Moderar conteúdo e remover anúncios irregulares</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Investigar denúncias em até 48 horas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Banir usuários que violem os termos de uso</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span>Manter ambiente seguro e respeitoso para todos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] mt-1">•</span>
                <span className="font-bold text-white/90">Nota importante: A PRIVYA é apenas uma plataforma de anúncios. Não intermediamos pagamentos nem temos responsabilidade sobre os serviços prestados entre anunciantes e clientes.</span>
              </li>
            </ul>
          </section>

          {/* Contact */}
          <div className="text-center pt-8">
            <p className="text-white/50 mb-4">
              Dúvidas sobre direitos e deveres?
            </p>
            <button 
              className="px-8 py-3 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_25px_rgba(139,30,63,0.4)]"
              style={{ 
                background: 'linear-gradient(135deg, #8B1E3F, #6B1730)',
                fontWeight: 600,
              }}
            >
              Entrar em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
