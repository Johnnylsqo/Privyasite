import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AgeVerificationBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasVerified = localStorage.getItem('privya_age_verified');
    if (!hasVerified) {
      setShowBanner(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('privya_age_verified', 'true');
    setShowBanner(false);
  };

  const handleDeny = () => {
    // Redirecionar para página de saída ou mostrar mensagem
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-center justify-center px-4"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25 }}
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, rgba(15,15,16,0.98) 0%, rgba(20,20,22,0.95) 100%)',
              border: '2px solid rgba(139,30,63,0.4)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
            }}
          >
            {/* Header */}
            <div className="px-8 pt-8 pb-6 text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(139,30,63,0.3) 0%, rgba(212,175,55,0.3) 100%)' }}
              >
                <AlertTriangle size={40} className="text-[#D4AF37]" />
              </div>
              
              <h2 className="text-3xl text-white mb-3" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>
                Verificação de Idade
              </h2>
              
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  Este site contém conteúdo adulto e é destinado apenas para maiores de 18 anos.
                </p>
                <p>
                  Ao continuar, você confirma que tem idade legal para acessar este tipo de conteúdo em seu país.
                </p>
              </div>
            </div>

            {/* Warning Box */}
            <div className="mx-8 mb-6 px-4 py-3 rounded-xl"
              style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}
            >
              <div className="flex items-start gap-3">
                <Shield size={18} className="text-[#D4AF37] mt-0.5 shrink-0" />
                <div className="text-xs text-white/60 leading-relaxed">
                  Este site respeita sua privacidade e cumpre todas as leis aplicáveis. 
                  Ao acessar, você concorda com nossos{' '}
                  <button className="text-[#D4AF37] underline hover:no-underline">
                    Termos de Uso
                  </button>
                  {' '}e{' '}
                  <button className="text-[#D4AF37] underline hover:no-underline">
                    Política de Privacidade
                  </button>.
                </div>
              </div>
            </div>

            {/* Question */}
            <div className="px-8 mb-6 text-center">
              <p className="text-lg text-white mb-6" style={{ fontWeight: 600 }}>
                Você tem 18 anos ou mais?
              </p>
              
              <div className="flex gap-4">
                {/* Deny Button */}
                <button
                  onClick={handleDeny}
                  className="flex-1 py-3.5 rounded-xl text-sm text-white/70 border border-white/20 hover:bg-white/5 transition-all"
                  style={{ fontWeight: 600 }}
                >
                  Não, tenho menos de 18
                </button>
                
                {/* Confirm Button */}
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-3.5 rounded-xl text-sm text-white transition-all hover:shadow-[0_0_25px_rgba(139,30,63,0.5)]"
                  style={{ 
                    background: 'linear-gradient(135deg, #8B1E3F, #6B1730)',
                    fontWeight: 600,
                  }}
                >
                  Sim, tenho 18 ou mais
                </button>
              </div>
            </div>

            {/* Footer Note */}
            <div className="px-8 pb-6 text-center">
              <p className="text-xs text-white/40">
                Ao confirmar, você declara sob pena da lei que possui idade legal para acessar conteúdo adulto.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
