import React, { useState, useEffect } from 'react';
import CornerDecorations from './CornerDecorations';

const StartScreen = ({ onStart }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Iniciar animação após um pequeno delay
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen overflow-hidden relative">
      <CornerDecorations />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
        {/* Quiz Title */}
        <div className="mb-12">
          <h1 className="quiz-title text-center">
            <span 
              className={`inline-block letter-animation ${showAnimation ? 'animate-bounce-in' : 'animate-bounce-in-delay-1'}`}
              style={{
                color: '#FF69B4',
                animationDelay: showAnimation ? '0.1s' : '0s',
                transform: showAnimation ? 'translateY(0)' : 'translateY(-100vh)',
                fontSize: '110px',
                fontFamily: 'Nerko One, cursive'
              }}
            >
              Q
            </span>
            <span 
              className={`inline-block letter-animation ${showAnimation ? 'animate-bounce-in' : 'animate-bounce-in-delay-2'}`}
              style={{
                color: '#FF8C00',
                animationDelay: showAnimation ? '0.3s' : '0.2s',
                transform: showAnimation ? 'translateY(0)' : 'translateY(-100vh)',
                fontSize: '110px',
                fontFamily: 'Nerko One, cursive'
              }}
            >
              u
            </span>
            <span 
              className={`inline-block letter-animation ${showAnimation ? 'animate-bounce-in' : 'animate-bounce-in-delay-3'}`}
              style={{
                color: '#FFD700',
                animationDelay: showAnimation ? '0.5s' : '0.4s',
                transform: showAnimation ? 'translateY(0)' : 'translateY(-100vh)',
                fontSize: '110px',
                fontFamily: 'Nerko One, cursive'
              }}
            >
              i
            </span>
            <span 
              className={`inline-block letter-animation ${showAnimation ? 'animate-bounce-in' : 'animate-bounce-in-delay-4'}`}
              style={{
                color: '#4169E1',
                animationDelay: showAnimation ? '0.7s' : '0.6s',
                transform: showAnimation ? 'translateY(0)' : 'translateY(-100vh)',
                fontSize: '110px',
                fontFamily: 'Nerko One, cursive'
              }}
            >
              z
            </span>
          </h1>
        </div>
        
        {/* Start Button */}
        <button 
          onClick={onStart}
          className={`bg-white hover:bg-gray-50 border-2 border-pink-400 text-pink-400 font-semibold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${showAnimation ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          style={{
            animationDelay: showAnimation ? '1.5s' : '0s',
            transitionDelay: showAnimation ? '1.5s' : '0s'
          }}
        >
          INICIAR
        </button>
        
        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">Toque para começar o quiz</p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
