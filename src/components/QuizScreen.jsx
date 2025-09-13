import React, { useState, useEffect } from 'react';

const QuizScreen = ({ questions, onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // Função para obter as cores da categoria
  const getCategoryColors = (category) => {
    switch(category) {
      case 'Conhecimentos gerais':
        return {
          card: 'bg-pink-400',
          cardHover: 'bg-pink-500',
          button: 'bg-pink-200 hover:bg-pink-300',
          buttonHover: 'bg-pink-300',
          counter: 'bg-pink-400',
          buttonColor: '#ec4899'
        };
      case 'Filmes e Séries':
      case 'Filmes e séries':
        return {
          card: 'bg-blue-600',
          cardHover: 'bg-blue-700',
          button: 'bg-blue-200 hover:bg-blue-300',
          buttonHover: 'bg-blue-300',
          counter: 'bg-blue-600',
          buttonColor: '#2563eb'
        };
      case 'Livros e Músicas':
      case 'Livros e músicas':
        return {
          card: 'bg-orange-500',
          cardHover: 'bg-orange-600',
          button: 'bg-orange-200 hover:bg-orange-300',
          buttonHover: 'bg-orange-300',
          counter: 'bg-orange-500',
          buttonColor: '#f97316'
        };
      case 'Estudo':
        return {
          card: 'bg-green-500',
          cardHover: 'bg-green-600',
          button: 'bg-green-200 hover:bg-green-300',
          buttonHover: 'bg-green-300',
          counter: 'bg-green-500',
          buttonColor: '#10b981'
        };
      default:
        return {
          card: 'bg-gray-500',
          cardHover: 'bg-gray-600',
          button: 'bg-gray-500 hover:bg-gray-400',
          buttonHover: 'bg-gray-400',
          counter: 'bg-gray-500',
          buttonColor: '#6b7280'
        };
    }
  };

  useEffect(() => {
    // Shuffle questions and options
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const shuffledWithOptions = shuffled.map(q => ({
      ...q,
      opcoes: [...q.opcoes].sort(() => Math.random() - 0.5)
    }));
    setShuffledQuestions(shuffledWithOptions);
  }, [questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === currentQuestion.resposta) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      onComplete(score + (selectedAnswer === currentQuestion.resposta ? 1 : 0));
    }
  };

  if (!currentQuestion) return null;

  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
  const colors = getCategoryColors(currentQuestion.categoria);

  return (
    <div className="bg-white min-h-screen overflow-hidden relative">
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0">
        <div className="w-16 h-32 bg-yellow-300"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-orange-400 rounded-br-full"></div>
      </div>
      
      <div className="absolute top-0 right-0">
        <div className="w-32 h-16 bg-blue-600"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-pink-300 rounded-bl-full"></div>
      </div>
      
      <div className="absolute bottom-0 left-0">
        <div className="w-32 h-16 bg-orange-400"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-600 rounded-tr-full"></div>
      </div>
      
      <div className="absolute bottom-0 right-0">
        <div className="w-16 h-32 bg-pink-300"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300 rounded-tl-full"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
        {/* Question Counter */}
        <div className="mb-6">
          <div className={`w-12 h-12 ${colors.counter} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
            {currentQuestionIndex + 1}
          </div>
        </div>

        {/* Quiz Card */}
        <div className={`quiz-card ${colors.card} rounded-3xl p-6 w-full max-w-md mx-4 text-white`}>
          {/* Category */}
          <div className="text-center mb-4">
            <span className="text-sm font-semibold opacity-90">Categoria: {currentQuestion.categoria}</span>
          </div>

          {/* Question */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold leading-relaxed" style={{fontFamily: 'Nerko One, cursive'}}>
              {currentQuestion.pergunta}
            </h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuestion.opcoes.map((option, index) => {
              let buttonClass = "option-button w-full py-3 px-4 rounded-xl text-left font-medium transition-all duration-200 ";
              
              if (selectedAnswer === option) {
                buttonClass += option === currentQuestion.resposta 
                  ? "bg-green-500 text-white" 
                  : "bg-red-500 text-white";
              } else if (showResult && option === currentQuestion.resposta) {
                buttonClass += "bg-green-500 text-white";
              } else {
                buttonClass += `${colors.button} text-gray-800`;
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={buttonClass}
                  disabled={showResult}
                  style={{fontFamily: 'Nerko One, cursive'}}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Progress */}
          <div className="text-center text-sm opacity-90">
            {currentQuestionIndex + 1}/{shuffledQuestions.length}
          </div>

          {/* Next Button */}
          {showResult && (
            <div className="mt-4 text-center">
              <button
                onClick={handleNextQuestion}
                className="bg-white border-4 rounded-full p-4 transition-all duration-200 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  borderColor: colors.buttonColor,
                  borderHoverColor: colors.buttonColor + '80'
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" style={{color: colors.buttonColor}}>
                  <path d="M8 5v14l11-7z"/>
                  <path d="M16 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-full max-w-md">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className={`${colors.counter} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Back Button */}
        <button 
          onClick={onBack}
          className="mt-6 text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;
