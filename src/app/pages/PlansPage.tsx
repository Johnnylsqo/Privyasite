import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Crown, CheckCircle2, ArrowRight, ArrowLeft, Shield, Zap, 
  TrendingUp, Target, Star, Users, BadgeCheck, Sparkles,
  Eye, BarChart3, Clock, X, Menu, Globe
} from 'lucide-react';
import { Link } from 'react-router';
import LanguageSelector from '../components/LanguageSelector';

const PrivyaLogo = () => (
  <Link to="/" className="flex items-center gap-2.5">
    <div className="w-6 h-6 flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradPlans" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F2D77D" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8922A" />
          </linearGradient>
        </defs>
        <path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="url(#logoGradPlans)" />
        <path d="M12 16L9 10H15L12 16Z" fill="#0F0F10" />
      </svg>
    </div>
    <span className="text-xl tracking-[0.25em] text-white uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>
      Privya
    </span>
  </Link>
);

const plans = [
  {
    id: 'free',
    name: 'Gratuito',
    subtitle: 'Para começar',
    price: '0€',
    period: '',
    features: [
      'Perfil básico com até 5 fotos',
      'Visível nos resultados de pesquisa',
      'Contacto via plataforma',
      'Avaliações de clientes',
      'Suporte por email',
    ],
    notIncluded: [
      'Destaque na página inicial',
      'Badge VIP',
      'Estatísticas avançadas',
      'Posição prioritária',
    ],
    popular: false,
    cta: 'Começar Grátis',
  },
  {
    id: 'destaque',
    name: 'Destaque',
    subtitle: 'Mais visibilidade',
    price: '29€',
    period: '/semana',
    features: [
      'Perfil com até 10 fotos HD',
      'Posição de destaque na cidade',
      'Badge "Destaque" dourado',
      'Até 3x mais visualizações',
      'Estatísticas básicas do perfil',
      'Suporte prioritário por chat',
      'Perfil realçado nos resultados',
    ],
    notIncluded: [
      'Destaque na página inicial',
      'Estatísticas avançadas',
    ],
    popular: false,
    cta: 'Escolher Destaque',
  },
  {
    id: 'vip',
    name: 'VIP',
    subtitle: 'Máximo destaque',
    price: '79€',
    period: '/semana',
    features: [
      'Perfil com até 20 fotos HD',
      'Sempre no topo da sua cidade',
      'Badge VIP Premium dourado',
      'Até 5x mais visualizações',
      'Estatísticas detalhadas',
      'Suporte dedicado 24/7',
      'Destaque na secção VIP da home',
      'Selo de verificação prioritário',
      'Perfil em destaque nos stories',
    ],
    notIncluded: [],
    popular: true,
    cta: 'Escolher VIP',
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Exclusividade total',
    price: '149€',
    period: '/semana',
    features: [
      'Tudo do plano VIP',
      'Banner rotativo na página inicial',
      'Badge Premium exclusivo',
      'Até 10x mais visualizações',
      'Relatórios analíticos completos',
      'Gestor de conta dedicado',
      'Prioridade absoluta nos resultados',
      'Destaque em todas as cidades',
      'Stories ilimitados',
      'Acesso antecipado a novidades',
    ],
    notIncluded: [],
    popular: false,
    cta: 'Escolher Premium',
  },
];

const faqs = [
  {
    q: 'Como funciona a aprovação do cadastro?',
    a: 'Após submeter o seu cadastro, a nossa equipa analisa todos os dados, fotos e documentos enviados. Este processo demora em média até 24 horas. Receberá uma notificação por email assim que o seu perfil for aprovado ou caso seja necessário algum ajuste.',
  },
  {
    q: 'O conteúdo que envio é moderado?',
    a: 'Sim. Todas as fotos, descrições e qualquer conteúdo enviado para a plataforma passa por uma análise da nossa equipa antes de ser publicado. Isto garante a qualidade e segurança de todos os utilizadores.',
  },
  {
    q: 'Posso mudar de plano a qualquer momento?',
    a: 'Sim! Pode fazer upgrade ou downgrade do seu plano quando quiser. Ao fazer upgrade, a diferença será cobrada proporcionalmente. Ao fazer downgrade, o novo plano entra em vigor no próximo ciclo.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Aceitamos cartão de crédito/débito, MBWay e transferência bancária. Os planos são renovados automaticamente, mas pode cancelar a qualquer momento sem compromisso.',
  },
  {
    q: 'O que acontece se o meu perfil for rejeitado?',
    a: 'Se o seu perfil não cumprir as nossas diretrizes, a equipa entrará em contacto com orientações para ajustar o conteúdo. Pode resubmeter quantas vezes for necessário sem qualquer custo.',
  },
];

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<'weekly' | 'monthly'>('weekly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getPrice = (plan: typeof plans[0]) => {
    if (plan.id === 'free') return { value: '0€', period: '' };
    const weeklyPrice = parseInt(plan.price);
    if (billingCycle === 'monthly') {
      const monthlyPrice = Math.round(weeklyPrice * 3.5); // ~3.5 weeks discount
      return { value: `${monthlyPrice}€`, period: '/mês' };
    }
    return { value: plan.price, period: plan.period };
  };

  return (
    <div className="min-h-screen bg-[#0F0F10] text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-[100]" style={{ 
        backdropFilter: 'blur(20px)', 
        background: 'linear-gradient(180deg, rgba(15,15,16,0.97) 0%, rgba(15,15,16,0.92) 100%)',
        borderBottom: '1px solid rgba(212,175,55,0.08)',
      }}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-5 lg:px-10 h-[64px]">
          <PrivyaLogo />
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Link to="/" className="flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Voltar</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-[100px] pb-20">
        {/* Hero */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.3)' }}
          >
            <Crown size={18} className="text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] uppercase tracking-wider" style={{ fontWeight: 600 }}>
              Planos para Anunciantes
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-5xl text-white mb-4" 
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
          >
            Escolha o plano <span className="italic" style={{ color: '#D4AF37' }}>ideal</span> para si
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/50 max-w-2xl mx-auto mb-8"
          >
            Invista no seu perfil e alcance mais clientes. Todos os planos incluem suporte e moderação de conteúdo.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-1 p-1 rounded-full"
            style={{ background: 'rgba(31,31,33,0.8)', border: '1px solid rgba(139,30,63,0.2)' }}
          >
            <button 
              onClick={() => setBillingCycle('weekly')}
              className="px-6 py-2.5 rounded-full text-sm transition-all duration-300"
              style={{ 
                background: billingCycle === 'weekly' ? 'linear-gradient(135deg, #8B1E3F, #6B1730)' : 'transparent',
                color: billingCycle === 'weekly' ? '#F2D77D' : 'rgba(255,255,255,0.5)',
                fontWeight: billingCycle === 'weekly' ? 600 : 400,
              }}
            >
              Semanal
            </button>
            <button 
              onClick={() => setBillingCycle('monthly')}
              className="px-6 py-2.5 rounded-full text-sm transition-all duration-300 flex items-center gap-2"
              style={{ 
                background: billingCycle === 'monthly' ? 'linear-gradient(135deg, #8B1E3F, #6B1730)' : 'transparent',
                color: billingCycle === 'monthly' ? '#F2D77D' : 'rgba(255,255,255,0.5)',
                fontWeight: billingCycle === 'monthly' ? 600 : 400,
              }}
            >
              Mensal
              <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(212,175,55,0.2)', color: '#D4AF37' }}>
                -15%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans Grid */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => {
              const price = getPrice(plan);
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="relative rounded-2xl p-7 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
                  style={{
                    background: plan.popular 
                      ? 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(139,30,63,0.15) 100%)'
                      : 'linear-gradient(135deg, rgba(31,31,33,0.7) 0%, rgba(26,26,28,0.5) 100%)',
                    border: plan.popular 
                      ? '2px solid rgba(212,175,55,0.4)'
                      : '1px solid rgba(139,30,63,0.2)',
                    boxShadow: plan.popular 
                      ? '0 10px 40px rgba(212,175,55,0.15)'
                      : '0 8px 30px rgba(0,0,0,0.2)',
                  }}
                >
                  {plan.popular && (
                    <div 
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs uppercase tracking-wider"
                      style={{ 
                        background: 'linear-gradient(135deg, #F2D77D, #D4AF37)',
                        color: '#0F0F10',
                        fontWeight: 700,
                      }}
                    >
                      Mais Popular
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <p className="text-[11px] text-[#D4AF37] uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>
                      {plan.subtitle}
                    </p>
                    <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl text-white" style={{ fontWeight: 700 }}>
                        {price.value}
                      </span>
                      {price.period && (
                        <span className="text-sm text-white/40">{price.period}</span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6 flex-1">
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="text-[13px] text-white/70">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, fi) => (
                      <div key={`no-${fi}`} className="flex items-start gap-2.5 opacity-40">
                        <X size={15} className="text-white/40 shrink-0 mt-0.5" />
                        <span className="text-[13px] text-white/40 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button 
                    className="w-full py-3 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: plan.popular 
                        ? 'linear-gradient(135deg, #F2D77D, #D4AF37)'
                        : plan.id === 'free' ? 'rgba(255,255,255,0.06)' : 'rgba(212,175,55,0.1)',
                      color: plan.popular ? '#0F0F10' : plan.id === 'free' ? 'white' : '#D4AF37',
                      border: plan.popular ? 'none' : plan.id === 'free' ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(212,175,55,0.3)',
                      fontWeight: 600,
                    }}
                  >
                    {plan.cta}
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Approval Notice */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(31,31,33,0.8) 0%, rgba(139,30,63,0.1) 100%)',
              border: '1px solid rgba(139,30,63,0.2)',
            }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none" 
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(139,30,63,0.2)', border: '1px solid rgba(139,30,63,0.3)' }}>
                <Shield size={24} className="text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-lg text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                  Qualidade e segurança garantidas
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <BadgeCheck size={14} className="text-[#D4AF37] shrink-0 mt-1" />
                    <p className="text-sm text-white/60">
                      <strong className="text-white/80">Cadastro com aprovação:</strong> Todos os perfis de anunciantes são analisados pela nossa equipa antes da ativação.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Eye size={14} className="text-[#D4AF37] shrink-0 mt-1" />
                    <p className="text-sm text-white/60">
                      <strong className="text-white/80">Moderação de conteúdo:</strong> Fotos, descrições e qualquer material enviado é verificado antes de ser publicado na plataforma.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock size={14} className="text-[#D4AF37] shrink-0 mt-1" />
                    <p className="text-sm text-white/60">
                      <strong className="text-white/80">Prazo de aprovação:</strong> Em média até 24 horas após a submissão completa do perfil.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto px-6 lg:px-10 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl lg:text-3xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
              Perguntas <span className="italic" style={{ color: '#D4AF37' }}>Frequentes</span>
            </h2>
            <p className="text-sm text-white/40">Tudo o que precisa saber sobre os nossos planos</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                className="rounded-xl overflow-hidden"
                style={{ 
                  background: 'rgba(31,31,33,0.6)', 
                  border: '1px solid rgba(139,30,63,0.15)',
                }}
              >
                <button 
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <span className="text-sm text-white/80 pr-4" style={{ fontWeight: 500 }}>{faq.q}</span>
                  <motion.div animate={{ rotate: expandedFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <span className="text-[#D4AF37] text-xl">+</span>
                  </motion.div>
                </button>
                {expandedFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #8B1E3F 0%, #6B1730 50%, #4A0F20 100%)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <div className="absolute top-0 left-0 w-60 h-60 rounded-full blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)' }} />
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
                Pronta para <span className="italic" style={{ color: '#D4AF37' }}>começar?</span>
              </h3>
              <p className="text-sm text-white/60 mb-8 max-w-lg mx-auto">
                Crie o seu perfil gratuitamente e escolha o plano que melhor se adapta às suas necessidades. Pode fazer upgrade a qualquer momento.
              </p>
              <button 
                className="px-10 py-4 rounded-xl text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] inline-flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #F2D77D, #D4AF37, #B8922A)',
                  color: '#0F0F10',
                  fontWeight: 700,
                }}
              >
                Criar Perfil Grátis
                <ArrowRight size={20} />
              </button>
              <p className="text-xs text-white/40 mt-4">
                Cadastro sujeito a aprovação · Todo conteúdo é moderado pela equipa PRIVYA
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10" style={{ borderTop: '1px solid rgba(139,30,63,0.15)' }}>
        <div className="h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, #8B1E3F, #D4AF37, #8B1E3F, transparent)' }} />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <PrivyaLogo />
          <p className="text-[10px] text-white/20 tracking-wider uppercase">
            © 2026 PRIVYA — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
