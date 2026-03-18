import React, { useState } from 'react';
import { X, User, Briefcase, Mail, Phone, Lock, Eye, EyeOff, Calendar, MapPin, Upload, Check, Shield, Crown, CheckCircle2, AlertTriangle, ArrowRight, BadgeCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (userData: any) => void;
}

type UserType = 'client' | 'advertiser' | null;

const advertiserPlans = [
  {
    id: 'free',
    name: 'Gratuito',
    price: '0€',
    period: '',
    desc: 'Perfil básico com até 5 fotos',
    features: ['Perfil nos resultados', 'Contacto via plataforma', 'Até 5 fotos'],
  },
  {
    id: 'destaque',
    name: 'Destaque',
    price: '29€',
    period: '/sem',
    desc: 'Mais visibilidade na sua cidade',
    features: ['Até 10 fotos HD', 'Badge Destaque', '3x mais visualizações'],
  },
  {
    id: 'vip',
    name: 'VIP',
    price: '79€',
    period: '/sem',
    desc: 'Máximo destaque e ferramentas',
    features: ['Até 20 fotos HD', 'Badge VIP Premium', '5x mais visualizações', 'Destaque na home'],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '149€',
    period: '/sem',
    desc: 'Exclusividade total',
    features: ['Tudo do VIP', 'Banner na home', '10x mais visualizações', 'Gestor dedicado'],
  },
];

export default function RegisterModal({ isOpen, onClose, onSuccess }: RegisterModalProps) {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('free');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    city: '',
    stageName: '',
    age: '',
    serviceCity: '',
    district: '',
    about: '',
    services: [] as string[],
    photos: [] as File[],
    idDocument: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const portugueseCities = [
    'Lisboa', 'Porto', 'Coimbra', 'Braga', 'Faro', 'Aveiro', 
    'Setúbal', 'Funchal', 'Évora', 'Leiria', 'Viseu', 'Guimarães'
  ];

  const servicesList = [
    'Acompanhamento', 'Jantares', 'Eventos', 'Massagem', 
    'Pernoite', 'Viagens', 'Beijo na Boca', 'Strip Tease'
  ];

  const totalSteps = userType === 'advertiser' ? 4 : 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'photos' | 'idDocument') => {
    const files = e.target.files;
    if (!files) return;
    if (field === 'photos') {
      setFormData(prev => ({ ...prev, photos: Array.from(files) }));
    } else {
      setFormData(prev => ({ ...prev, idDocument: files[0] }));
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.phone.trim()) newErrors.phone = 'Telefone é obrigatório';
    else if (!/^\d{9}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Telefone inválido (9 dígitos)';
    if (!formData.password) newErrors.password = 'Senha é obrigatória';
    else if (formData.password.length < 8) newErrors.password = 'Senha deve ter no mínimo 8 caracteres';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Senhas não coincidem';
    if (!formData.birthdate) newErrors.birthdate = 'Data de nascimento é obrigatória';
    else {
      const birth = new Date(formData.birthdate);
      const today = new Date();
      const age = today.getFullYear() - birth.getFullYear();
      if (age < 18) newErrors.birthdate = 'Você deve ter pelo menos 18 anos';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2Client = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.city) newErrors.city = 'Cidade é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2Advertiser = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.stageName.trim()) newErrors.stageName = 'Nome artístico é obrigatório';
    if (!formData.age) newErrors.age = 'Idade é obrigatória';
    if (!formData.serviceCity) newErrors.serviceCity = 'Cidade é obrigatória';
    if (!formData.district.trim()) newErrors.district = 'Bairro é obrigatório';
    if (!formData.about.trim()) newErrors.about = 'Descrição é obrigatória';
    if (formData.services.length === 0) newErrors.services = 'Selecione pelo menos um serviço';
    if (formData.photos.length < 3) newErrors.photos = 'Envie pelo menos 3 fotos';
    if (!formData.idDocument) newErrors.idDocument = 'Documento de identidade é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!userType) { alert('Selecione o tipo de cadastro'); return; }
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (userType === 'client') {
        if (validateStep2Client()) setStep(3);
      } else {
        if (validateStep2Advertiser()) setStep(3);
      }
    } else if (step === 3 && userType === 'advertiser') {
      // Plan selection step - no validation needed, free is default
      setStep(4);
    }
  };

  const handleSubmit = async () => {
    console.log('Cadastro:', { userType, selectedPlan, ...formData });
    onSuccess({
      type: userType,
      name: userType === 'advertiser' ? formData.stageName : formData.name,
      email: formData.email,
      plan: userType === 'advertiser' ? selectedPlan : undefined,
    });
    onClose();
  };

  const isLastStep = step === totalSteps;

  const inputStyle = (hasError: boolean) => ({
    background: 'rgba(31,31,33,0.6)',
    border: hasError ? '1px solid rgba(239,68,68,0.5)' : '1px solid rgba(139,30,63,0.2)',
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4 overflow-y-auto py-8"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden my-8"
            style={{
              background: 'linear-gradient(135deg, rgba(15,15,16,0.98) 0%, rgba(20,20,22,0.95) 100%)',
              border: '1px solid rgba(139,30,63,0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <X size={18} />
            </button>

            {/* Progress Steps */}
            <div className="px-8 pt-8 pb-4">
              <div className="flex items-center justify-center gap-2 mb-6">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all ${
                        step >= s ? 'bg-[#8B1E3F] text-white' : 'bg-white/10 text-white/40'
                      }`}
                      style={{ fontWeight: 600 }}
                    >
                      {step > s ? <Check size={18} /> : s}
                    </div>
                    {s < totalSteps && (
                      <div className={`w-10 h-1 mx-1 rounded transition-all ${step > s ? 'bg-[#8B1E3F]' : 'bg-white/10'}`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="px-8 pb-8 max-h-[calc(100vh-200px)] overflow-y-auto">
              {/* Step 1: Tipo de Usuário e Dados Básicos */}
              {step === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                      Criar Conta
                    </h2>
                    <p className="text-sm text-white/60">
                      Escolha o tipo de conta e preencha seus dados
                    </p>
                  </div>

                  {/* User Type Selection */}
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setUserType('client')}
                      className="p-6 rounded-xl transition-all hover:scale-105"
                      style={{
                        background: userType === 'client' ? 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(107,23,48,0.2) 100%)' : 'rgba(31,31,33,0.6)',
                        border: userType === 'client' ? '2px solid rgba(139,30,63,0.5)' : '1px solid rgba(139,30,63,0.2)',
                      }}
                    >
                      <User size={32} className="text-[#D4AF37] mx-auto mb-3" />
                      <h3 className="text-white text-base mb-1" style={{ fontWeight: 600 }}>Cliente</h3>
                      <p className="text-xs text-white/60">Buscar acompanhantes</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setUserType('advertiser')}
                      className="p-6 rounded-xl transition-all hover:scale-105 relative overflow-hidden"
                      style={{
                        background: userType === 'advertiser' ? 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(107,23,48,0.2) 100%)' : 'rgba(31,31,33,0.6)',
                        border: userType === 'advertiser' ? '2px solid rgba(139,30,63,0.5)' : '1px solid rgba(139,30,63,0.2)',
                      }}
                    >
                      <Briefcase size={32} className="text-[#D4AF37] mx-auto mb-3" />
                      <h3 className="text-white text-base mb-1" style={{ fontWeight: 600 }}>Anunciante</h3>
                      <p className="text-xs text-white/60">Anunciar serviços</p>
                    </button>
                  </div>

                  {/* Advertiser approval notice */}
                  {userType === 'advertiser' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }}
                      className="rounded-xl p-4 flex items-start gap-3"
                      style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}
                    >
                      <Shield size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-white/70 leading-relaxed">
                          <strong className="text-white/90">Cadastro sujeito a aprovação.</strong> O seu perfil será analisado pela nossa equipa. 
                          Fotos, descrições e documentos são verificados antes da publicação. Aprovação em até 24h.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Basic Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Nome Completo *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo"
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.name)} />
                      {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>E-mail *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.email)} />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Telefone *</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="912345678"
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.phone)} />
                        {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Data de Nascimento *</label>
                      <input type="date" name="birthdate" value={formData.birthdate} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none" style={inputStyle(!!errors.birthdate)} />
                      {errors.birthdate && <p className="text-xs text-red-400 mt-1">{errors.birthdate}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Senha *</label>
                        <div className="relative">
                          <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleInputChange} placeholder="Mínimo 8 caracteres"
                            className="w-full px-4 py-3 pr-12 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.password)} />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.password && <p className="text-xs text-red-400 mt-1">{errors.password}</p>}
                      </div>
                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Confirmar Senha *</label>
                        <div className="relative">
                          <input type={showConfirmPassword ? 'text' : 'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} placeholder="Repita a senha"
                            className="w-full px-4 py-3 pr-12 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.confirmPassword)} />
                          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white">
                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                        {errors.confirmPassword && <p className="text-xs text-red-400 mt-1">{errors.confirmPassword}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Dados Específicos */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                      {userType === 'client' ? 'Informações Adicionais' : 'Dados do Perfil'}
                    </h2>
                    <p className="text-sm text-white/60">
                      {userType === 'client' ? 'Complete seu cadastro' : 'Configure seu perfil profissional'}
                    </p>
                  </div>

                  {userType === 'client' ? (
                    <div>
                      <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Cidade *</label>
                      <select name="city" value={formData.city} onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none" style={inputStyle(!!errors.city)}>
                        <option value="">Selecione sua cidade</option>
                        {portugueseCities.map(city => <option key={city} value={city}>{city}</option>)}
                      </select>
                      {errors.city && <p className="text-xs text-red-400 mt-1">{errors.city}</p>}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Nome Artístico *</label>
                          <input type="text" name="stageName" value={formData.stageName} onChange={handleInputChange} placeholder="Nome para exibição"
                            className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.stageName)} />
                          {errors.stageName && <p className="text-xs text-red-400 mt-1">{errors.stageName}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Idade *</label>
                          <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder="18+" min="18" max="99"
                            className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.age)} />
                          {errors.age && <p className="text-xs text-red-400 mt-1">{errors.age}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Cidade de Atendimento *</label>
                          <select name="serviceCity" value={formData.serviceCity} onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none" style={inputStyle(!!errors.serviceCity)}>
                            <option value="">Selecione a cidade</option>
                            {portugueseCities.map(city => <option key={city} value={city}>{city}</option>)}
                          </select>
                          {errors.serviceCity && <p className="text-xs text-red-400 mt-1">{errors.serviceCity}</p>}
                        </div>
                        <div>
                          <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Bairro *</label>
                          <input type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="Seu bairro"
                            className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none" style={inputStyle(!!errors.district)} />
                          {errors.district && <p className="text-xs text-red-400 mt-1">{errors.district}</p>}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Sobre Você *</label>
                        <textarea name="about" value={formData.about} onChange={handleInputChange} placeholder="Descreva seu perfil, serviços e diferenciais..." rows={4}
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder:text-white/40 outline-none resize-none" style={inputStyle(!!errors.about)} />
                        {errors.about && <p className="text-xs text-red-400 mt-1">{errors.about}</p>}
                      </div>

                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Serviços Oferecidos * (mínimo 1)</label>
                        <div className="grid grid-cols-2 gap-2">
                          {servicesList.map(service => (
                            <button key={service} type="button" onClick={() => handleServiceToggle(service)}
                              className="px-4 py-2 rounded-lg text-sm transition-all"
                              style={{
                                background: formData.services.includes(service) ? 'rgba(139,30,63,0.3)' : 'rgba(31,31,33,0.6)',
                                border: formData.services.includes(service) ? '1px solid rgba(139,30,63,0.5)' : '1px solid rgba(139,30,63,0.2)',
                                color: 'white',
                              }}>
                              {service}
                            </button>
                          ))}
                        </div>
                        {errors.services && <p className="text-xs text-red-400 mt-1">{errors.services}</p>}
                      </div>

                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Fotos do Perfil * (mínimo 3)</label>
                        <div className="relative px-4 py-8 rounded-lg border-2 border-dashed cursor-pointer hover:bg-white/5 transition-all"
                          style={{ borderColor: errors.photos ? 'rgba(239,68,68,0.5)' : 'rgba(139,30,63,0.3)' }}>
                          <input type="file" accept="image/*" multiple onChange={(e) => handleFileChange(e, 'photos')} className="absolute inset-0 opacity-0 cursor-pointer" />
                          <div className="text-center">
                            <Upload size={32} className="text-white/40 mx-auto mb-2" />
                            <p className="text-sm text-white/60">
                              {formData.photos.length > 0 ? `${formData.photos.length} foto(s) selecionada(s)` : 'Clique ou arraste para enviar fotos'}
                            </p>
                          </div>
                        </div>
                        {errors.photos && <p className="text-xs text-red-400 mt-1">{errors.photos}</p>}
                        <p className="text-xs text-white/40 mt-1 flex items-center gap-1">
                          <AlertTriangle size={11} />
                          Todas as fotos são moderadas pela equipa antes da publicação
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm text-white mb-2" style={{ fontWeight: 600 }}>Documento de Identidade * (verificação)</label>
                        <div className="relative px-4 py-8 rounded-lg border-2 border-dashed cursor-pointer hover:bg-white/5 transition-all"
                          style={{ borderColor: errors.idDocument ? 'rgba(239,68,68,0.5)' : 'rgba(139,30,63,0.3)' }}>
                          <input type="file" accept="image/*,application/pdf" onChange={(e) => handleFileChange(e, 'idDocument')} className="absolute inset-0 opacity-0 cursor-pointer" />
                          <div className="text-center">
                            <Upload size={32} className="text-white/40 mx-auto mb-2" />
                            <p className="text-sm text-white/60">
                              {formData.idDocument ? formData.idDocument.name : 'Envie foto ou PDF do documento'}
                            </p>
                          </div>
                        </div>
                        {errors.idDocument && <p className="text-xs text-red-400 mt-1">{errors.idDocument}</p>}
                        <p className="text-xs text-white/40 mt-1">
                          Seu documento será mantido em sigilo e usado apenas para verificação
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3 for Advertiser: Plan Selection */}
              {step === 3 && userType === 'advertiser' && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                      Escolha o seu Plano
                    </h2>
                    <p className="text-sm text-white/60">
                      Selecione o plano que melhor se adapta às suas necessidades
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {advertiserPlans.map((plan) => (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlan(plan.id)}
                        className="relative rounded-xl p-5 text-left transition-all hover:scale-[1.02]"
                        style={{
                          background: selectedPlan === plan.id 
                            ? 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(212,175,55,0.1) 100%)' 
                            : 'rgba(31,31,33,0.6)',
                          border: selectedPlan === plan.id 
                            ? '2px solid rgba(212,175,55,0.4)' 
                            : '1px solid rgba(139,30,63,0.2)',
                          boxShadow: selectedPlan === plan.id ? '0 4px 20px rgba(212,175,55,0.1)' : 'none',
                        }}
                      >
                        {plan.popular && (
                          <div className="absolute -top-2 right-3 px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-wider"
                            style={{ background: 'linear-gradient(135deg, #F2D77D, #D4AF37)', color: '#0F0F10', fontWeight: 700 }}>
                            Popular
                          </div>
                        )}

                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-base text-white" style={{ fontWeight: 600 }}>{plan.name}</h3>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-xl text-[#D4AF37]" style={{ fontWeight: 700 }}>{plan.price}</span>
                            {plan.period && <span className="text-[10px] text-white/40">{plan.period}</span>}
                          </div>
                        </div>
                        
                        <p className="text-[11px] text-white/50 mb-3">{plan.desc}</p>
                        
                        <div className="space-y-1.5">
                          {plan.features.map((f, fi) => (
                            <div key={fi} className="flex items-center gap-2">
                              <CheckCircle2 size={12} className="text-[#D4AF37] shrink-0" />
                              <span className="text-[11px] text-white/60">{f}</span>
                            </div>
                          ))}
                        </div>

                        {/* Selected indicator */}
                        {selectedPlan === plan.id && (
                          <div className="absolute top-3 left-3 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8922A)' }}>
                            <Check size={12} className="text-[#0F0F10]" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-white/40 text-center">
                    Pode alterar o plano a qualquer momento após a aprovação do cadastro
                  </p>
                </div>
              )}

              {/* Final Step: Confirmação */}
              {((step === 3 && userType === 'client') || (step === 4 && userType === 'advertiser')) && (
                <div className="space-y-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(212,175,55,0.3) 100%)' }}
                  >
                    <Check size={48} className="text-[#D4AF37]" />
                  </div>

                  <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                    Confirmar Cadastro
                  </h2>

                  <div className="rounded-xl p-6 text-left" style={{ background: 'rgba(31,31,33,0.6)', border: '1px solid rgba(139,30,63,0.2)' }}>
                    <h3 className="text-white mb-4" style={{ fontWeight: 600 }}>Resumo dos Dados:</h3>
                    <div className="space-y-2 text-sm text-white/70">
                      <p><span className="text-white/40">Tipo:</span> {userType === 'client' ? 'Cliente' : 'Anunciante'}</p>
                      <p><span className="text-white/40">Nome:</span> {userType === 'advertiser' ? formData.stageName : formData.name}</p>
                      <p><span className="text-white/40">E-mail:</span> {formData.email}</p>
                      <p><span className="text-white/40">Telefone:</span> {formData.phone}</p>
                      {userType === 'advertiser' && (
                        <>
                          <p><span className="text-white/40">Cidade:</span> {formData.serviceCity}</p>
                          <p><span className="text-white/40">Serviços:</span> {formData.services.length}</p>
                          <p><span className="text-white/40">Fotos:</span> {formData.photos.length}</p>
                          <p>
                            <span className="text-white/40">Plano:</span>{' '}
                            <span className="text-[#D4AF37]" style={{ fontWeight: 600 }}>
                              {advertiserPlans.find(p => p.id === selectedPlan)?.name}
                              {selectedPlan !== 'free' && ` - ${advertiserPlans.find(p => p.id === selectedPlan)?.price}${advertiserPlans.find(p => p.id === selectedPlan)?.period}`}
                            </span>
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Advertiser approval reminder */}
                  {userType === 'advertiser' && (
                    <div className="rounded-xl p-4 flex items-start gap-3 text-left"
                      style={{ background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.15)' }}>
                      <BadgeCheck size={18} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-white/80 mb-1" style={{ fontWeight: 600 }}>O que acontece a seguir?</p>
                        <ul className="text-xs text-white/50 space-y-1 leading-relaxed">
                          <li>1. A nossa equipa irá analisar o seu cadastro (até 24h)</li>
                          <li>2. Fotos e conteúdo serão verificados antes da publicação</li>
                          <li>3. Receberá uma notificação por email com o resultado</li>
                          <li>4. Após aprovação, o seu perfil ficará ativo na plataforma</li>
                          {selectedPlan !== 'free' && <li>5. O pagamento do plano será solicitado após a aprovação</li>}
                        </ul>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-white/60">
                    Ao confirmar, você concorda com nossos{' '}
                    <a href="/termos" className="text-[#D4AF37] hover:underline">Termos de Uso</a>
                    {' '}e{' '}
                    <a href="/termos" className="text-[#D4AF37] hover:underline">Política de Privacidade</a>
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 py-3 rounded-xl text-sm text-white/70 border border-white/20 hover:bg-white/5 transition-all"
                    style={{ fontWeight: 600 }}
                  >
                    Voltar
                  </button>
                )}

                <button
                  type="button"
                  onClick={isLastStep ? handleSubmit : handleNext}
                  className="flex-1 py-3 rounded-xl text-sm text-[#0F0F10] transition-all hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                  style={{
                    background: 'linear-gradient(135deg, #F2D77D, #D4AF37)',
                    fontWeight: 600,
                  }}
                >
                  {isLastStep 
                    ? (userType === 'advertiser' ? 'Submeter para Aprovação' : 'Confirmar Cadastro') 
                    : 'Continuar'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
