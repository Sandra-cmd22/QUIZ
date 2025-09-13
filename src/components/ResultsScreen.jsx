import React, { useEffect, useState } from 'react';
import CornerDecorations from './CornerDecorations';

const ResultsScreen = ({ score, totalQuestions, onRestart, onBackToCategories }) => {
  const [percentage, setPercentage] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    // Animate score counting
    const timer = setInterval(() => {
      setAnimatedScore(prev => {
        if (prev < score) {
          return prev + 1;
        }
        clearInterval(timer);
        return score;
      });
    }, 50);

    // Calculate percentage
    setPercentage(Math.round((score / totalQuestions) * 100));

    return () => clearInterval(timer);
  }, [score, totalQuestions]);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excelente! Você é um gênio! 🎉";
    if (percentage >= 80) return "Muito bom! Parabéns! 👏";
    if (percentage >= 70) return "Bom trabalho! 👍";
    if (percentage >= 60) return "Não foi mal! 😊";
    if (percentage >= 50) return "Precisa estudar mais! 📚";
    return "Que tal tentar novamente? 🤔";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getPerformanceBg = () => {
    if (percentage >= 80) return "bg-green-100 border-green-300";
    if (percentage >= 60) return "bg-yellow-100 border-yellow-300";
    return "bg-red-100 border-red-300";
  };

  // Save to localStorage
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const newResult = {
      date: new Date().toISOString(),
      score,
      totalQuestions,
      percentage
    };
    history.unshift(newResult);
    
    // Keep only last 10 results
    if (history.length > 10) {
      history.splice(10);
    }
    
    localStorage.setItem('quizHistory', JSON.stringify(history));
  }, [score, totalQuestions, percentage]);

  return (
    <div className="bg-white min-h-screen overflow-hidden relative">
      <CornerDecorations />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
        {/* Results Card */}
        <div className={`quiz-card rounded-3xl p-8 w-full max-w-md mx-4 text-center border-2 ${getPerformanceBg()}`}>
          {/* Score Circle */}
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-pink-400 shadow-lg relative">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">{animatedScore}</div>
                <div className="text-sm opacity-90">de {totalQuestions}</div>
              </div>
              {/* Modern Icon */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Percentage */}
          <div className="mb-4">
            <h2 className={`text-4xl font-bold ${getPerformanceColor()}`}>
              {percentage}%
            </h2>
          </div>

          {/* Performance Message */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-700">
              {getPerformanceMessage()}
            </p>
          </div>

          {/* Score Details */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="font-semibold text-gray-600">Acertos</div>
                </div>
                <div className="text-2xl font-bold text-green-600">{animatedScore}</div>
              </div>
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="font-semibold text-gray-600">Erros</div>
                </div>
                <div className="text-2xl font-bold text-red-600">{totalQuestions - animatedScore}</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onRestart}
              className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Jogar Novamente
            </button>
            
            <button
              onClick={onBackToCategories}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Outras Categorias
            </button>
          </div>
        </div>

        {/* Motivational Message */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 className="text-white font-bold text-lg" style={{fontFamily: 'Nerko One, cursive'}}>
                Continue Praticando!
              </h3>
            </div>
            <p className="text-white font-semibold text-base leading-relaxed">
              Continue praticando para melhorar sua pontuação!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
