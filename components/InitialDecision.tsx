
import React from 'react';
import { IMAGES, EXPERT_DATA } from '../constants';

interface InitialDecisionProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const InitialDecision: React.FC<InitialDecisionProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-6">
      <div className="absolute inset-0 z-0 opacity-40">
        <img src={IMAGES.hero} alt="Ingrid Belly Background" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="space-y-2">
            <h2 className="text-sm uppercase tracking-[0.3em] text-emerald-500 font-semibold">Exclusividade & Arte</h2>
            <h1 className="text-5xl font-serif leading-tight">{EXPERT_DATA.name}</h1>
            <p className="text-gray-400 font-light px-4">Escolha como deseja iniciar sua jornada de transformação.</p>
        </div>

        <div className="flex flex-col gap-4">
          <button 
            onClick={onStartQuiz}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-2xl shadow-xl shadow-emerald-900/20 transform transition active:scale-95 text-lg"
          >
            FAZER AVALIAÇÃO PERSONALIZADA
          </button>
          
          <button 
            onClick={onGoToSite}
            className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-4 rounded-2xl backdrop-blur-md border border-white/10 transition"
          >
            Acessar Site Direto
          </button>

          <a 
            href={EXPERT_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm underline underline-offset-4 decoration-emerald-500/50"
          >
            Falar direto no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default InitialDecision;
