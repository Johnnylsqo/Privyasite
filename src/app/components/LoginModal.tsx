import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, Upload, Calendar, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // true = login, false = cadastro
  const [ageVerified, setAgeVerified] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIdDocument(file);
      // Aqui seria validado se a pessoa tem +18 anos
      // Por enquanto, apenas aceita o arquivo
      setAgeVerified(true);
    }
  };

  const calculateAge = (birthDateString: string): number => {
    const today = new Date();
    const birth = new Date(birthDateString);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const isOver18 = birthDate ? calculateAge(birthDate) >= 18 : false;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin) {
      // Validações para cadastro
      if (!isOver18) {
        alert('Você precisa ter 18 anos ou mais para se cadastrar');
        return;
      }
      if (!idDocument) {
        alert('Por favor, envie um documento de identificação');
        return;
      }
    }
    
    login(email, password);
    onClose();
    // Reset form
    setEmail('');
    setPassword('');
    setPhone('');
    setBirthDate('');
    setIdDocument(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(15,15,16,0.98) 0%, rgba(20,20,22,0.95) 100%)',
              border: '1px solid rgba(139,30,63,0.3)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-white/5 transition-all"
            >
              <X size={20} className="text-white/70" />
            </button>

            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(139,30,63,0.2) 0%, rgba(212,175,55,0.2) 100%)' }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                  <defs>
                    <linearGradient id="logoGradLogin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F2D77D" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#B8922A" />
                    </linearGradient>
                  </defs>
                  <path d="M4 4L12 20L20 4H16L12 12L8 4H4Z" fill="url(#logoGradLogin)" />
                  <path d="M12 16L9 10H15L12 16Z" fill="#0F0F10" />
                </svg>
              </div>
              <h2 className="text-2xl text-white mb-2" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                {isLogin ? 'Bem-vindo de Volta' : 'Criar Conta'}
              </h2>
              <p className="text-sm text-white/50">
                {isLogin ? 'Entre para acessar seus favoritos e mais' : 'Cadastre-se para ter acesso completo'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8">
              <div className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm text-white/70 mb-2" style={{ fontWeight: 500 }}>
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seu@email.com"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#D4AF37]"
                      style={{ 
                        background: 'rgba(31,31,33,0.5)',
                        border: '1px solid rgba(139,30,63,0.2)',
                      }}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm text-white/70 mb-2" style={{ fontWeight: 500 }}>
                    Senha
                  </label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-12 pr-12 py-3 rounded-xl text-sm text-white placeholder:text-white/30 outline-none transition-all focus:border-[#D4AF37]"
                      style={{ 
                        background: 'rgba(31,31,33,0.5)',
                        border: '1px solid rgba(139,30,63,0.2)',
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Forgot Password - Only on Login */}
                {isLogin && (
                  <div className="text-right">
                    <button type="button" className="text-xs text-[#D4AF37] hover:underline">
                      Esqueceu a senha?
                    </button>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_25px_rgba(139,30,63,0.4)]"
                  style={{ 
                    background: 'linear-gradient(135deg, #8B1E3F, #6B1730)',
                    fontWeight: 600,
                  }}
                >
                  {isLogin ? 'Entrar' : 'Criar Conta'}
                </button>

                {/* Toggle Login/Signup */}
                <div className="text-center pt-4 border-t border-white/10">
                  <p className="text-sm text-white/50">
                    {isLogin ? 'Ainda não tem conta?' : 'Já tem uma conta?'}
                    {' '}
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-[#D4AF37] hover:underline"
                      style={{ fontWeight: 600 }}
                    >
                      {isLogin ? 'Cadastre-se' : 'Entrar'}
                    </button>
                  </p>
                </div>
              </div>
            </form>

            {/* Demo Notice */}
            <div className="px-8 pb-6">
              <div className="px-4 py-3 rounded-lg text-xs text-white/60 text-center"
                style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <strong className="text-[#D4AF37]">Demo:</strong> Use qualquer e-mail e senha para testar
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}