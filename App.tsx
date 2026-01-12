
import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import Quiz from './components/Quiz';
import ResultPage from './components/ResultPage';
import LandingPage from './components/LandingPage';
import InitialDecision from './components/InitialDecision';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.INITIAL);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setView(ViewState.QUIZ);
  const handleGoToSite = () => setView(ViewState.MAIN_SITE);

  const handleFinishQuiz = (answers: string[]) => {
    setQuizAnswers(answers);
    setView(ViewState.RESULT);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {view === ViewState.INITIAL && (
        <InitialDecision onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}
      
      {view === ViewState.QUIZ && (
        <Quiz onComplete={handleFinishQuiz} onSkip={handleGoToSite} />
      )}

      {view === ViewState.RESULT && (
        <ResultPage answers={quizAnswers} onContinue={handleGoToSite} />
      )}

      {view === ViewState.MAIN_SITE && (
        <LandingPage />
      )}
    </div>
  );
};

export default App;
