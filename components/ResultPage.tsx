
import React from 'react';
import { IMAGES, EXPERT_DATA } from '../constants';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

interface ResultPageProps {
  answers: string[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const handleWhatsAppResult = () => {
    const message = encodeURIComponent(`Olá Ingrid! Acabei de completar o quiz e meu perfil deu COMPATÍVEL. Minhas respostas: ${answers.join(', ')}. Gostaria de agendar uma consulta.`);
    window.open(`${EXPERT_DATA.whatsapp}&text=${message}`, '_blank');
  };

  const handleWhatsAppDirect = () => {
    window.open(EXPERT_DATA.whatsapp, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center p-4">
      {/* Background with Blur */}
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.authority1} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-sm glass rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border border-emerald-500/30 animate-in slide-in-from-bottom-10 duration-700">
        
        {/* Compact Header */}
        <div className="bg-emerald-500/10 p-4 border-b border-emerald-500/20 text-center space-y-1">
          <div className="inline-flex bg-emerald-500 p-1 rounded-full mb-1">
            <CheckCircle2 size={14} className="text-black" />
          </div>
          <h2 className="text-lg font-bold text-emerald-400 uppercase tracking-wider leading-tight">
            Perfil Compatível.<br/>Você é a Paciente ideal.
          </h2>
        </div>

        {/* Hero Photo & Text Grouped - Very Compact */}
        <div className="p-5 space-y-4">
          <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-inner">
            <img 
              src={IMAGES.authority1} 
              alt="Ingrid Belly" 
              className="absolute inset-0 w-full h-full object-cover object-top" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </div>

          <p className="text-sm leading-snug font-light text-gray-200 text-center px-2">
            Com base nas suas respostas, o Método da <span className="text-emerald-400 font-semibold">{EXPERT_DATA.name}</span> consegue entregar exatamente a naturalidade e segurança que você procura.
          </p>

          <div className="flex flex-col gap-2 pt-2">
            <button 
              onClick={handleWhatsAppResult}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2 transition-all active:scale-95 text-sm animate-pulse"
            >
              <MessageCircle size={18} />
              1- ENVIAR MINHA AVALIAÇÃO A DRA
            </button>
            
            <button 
              onClick={handleWhatsAppDirect}
              className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-3 rounded-xl border border-white/10 transition text-sm flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              2- CHAMAR NO WHATSAPP
            </button>

            <button 
              onClick={onContinue}
              className="w-full bg-transparent text-gray-500 hover:text-gray-300 font-medium py-2 rounded-xl transition text-[10px] uppercase tracking-[0.15em]"
            >
              3- NÃO ENVIAR E CONTINUAR NO SITE
            </button>
          </div>
        </div>

        {/* Footer Badge */}
        <div className="bg-emerald-500 py-2 text-center">
            <p className="text-black text-[9px] font-black uppercase tracking-widest">Acesso Exclusivo Liberado</p>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
