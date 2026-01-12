
import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS, IMAGES, EXPERT_DATA } from '../constants';

interface QuizProps {
  onComplete: (answers: string[]) => void;
  onSkip: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onSkip }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsAnalyzing(true);
    }
  };

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setAnalysisProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(answers), 500);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, onComplete, answers]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl z-0">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative z-10 w-full max-w-sm glass rounded-[2rem] overflow-hidden flex flex-col shadow-2xl border border-white/20 animate-in zoom-in-95 duration-500">
        
        {/* Header with Photo & Progress */}
        <div className="bg-white/5 p-4 border-b border-white/10 flex items-center gap-3">
          <div className="relative shrink-0">
            <div className="w-12 h-12 rounded-xl border-2 border-emerald-500 overflow-hidden shadow-lg shadow-emerald-500/30 rotate-2">
              <img src={IMAGES.hero} alt="Ingrid" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="font-serif text-base leading-tight truncate">{EXPERT_DATA.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
              <span className="text-[9px] text-gray-400 font-bold tabular-nums">
                {currentStep + 1}/{QUIZ_QUESTIONS.length}
              </span>
            </div>
          </div>
          <button onClick={onSkip} className="text-gray-500 text-[9px] uppercase font-bold tracking-widest px-2">
            Sair
          </button>
        </div>

        {/* Quiz Content */}
        <div className="p-6">
          {!isAnalyzing ? (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h3 className="text-lg md:text-xl font-serif text-center leading-tight px-2">
                {QUIZ_QUESTIONS[currentStep].text}
              </h3>
              
              <div className="grid gap-2.5">
                {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="w-full bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/10 text-center py-3.5 px-4 rounded-xl transition-all active:scale-95 group"
                  >
                    <span className="text-sm md:text-base font-light text-gray-200 group-hover:text-emerald-400">
                      {option}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-6 animate-in zoom-in duration-500">
               <div className="relative mx-auto w-20 h-20 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      className="text-emerald-500/10"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      strokeDasharray={226}
                      strokeDashoffset={226 - (226 * analysisProgress) / 100}
                      className="text-emerald-500 transition-all duration-300"
                    />
                  </svg>
                  <span className="text-lg font-serif text-emerald-500">{analysisProgress}%</span>
               </div>
               <div className="space-y-1">
                  <h3 className="text-xl font-serif text-emerald-500">Analisando...</h3>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-light">
                    Cruzando seus dados com o <br/> Método {EXPERT_DATA.name}
                  </p>
               </div>
            </div>
          )}
        </div>
        
        <div className="p-3 text-center bg-black/20">
            <p className="text-[9px] text-gray-500 uppercase tracking-widest">Avaliação Exclusiva</p>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
