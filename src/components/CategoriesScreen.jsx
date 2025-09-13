import React from 'react';
import CornerDecorations from './CornerDecorations';

const CategoriesScreen = ({ categories, onSelectCategory, onBack }) => {
  // Definir as cores específicas para cada categoria conforme a imagem
  const getCategoryColor = (category) => {
    switch(category) {
      case 'Conhecimentos gerais':
        return 'bg-pink-400 hover:bg-pink-500';
      case 'Filmes e Séries':
      case 'Filmes e séries':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'Livros e Músicas':
      case 'Livros e músicas':
        return 'bg-orange-500 hover:bg-orange-600';
      case 'Estudo':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="bg-white min-h-screen overflow-hidden relative">
      <CornerDecorations />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-8 relative z-10">
        {/* Theme Selection Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl text-center leading-tight" style={{fontFamily: 'Nerko One, cursive', color: '#4169E1'}}>
            Escolha o tema<br />para as perguntas
          </h2>
        </div>
        
        {/* Category Buttons */}
        <div className="flex flex-col space-y-4 w-full max-w-sm">
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`theme-button ${getCategoryColor(category)} text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="mt-8 text-pink-400 hover:text-pink-500 text-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span>← voltar</span>
        </button>
      </div>
    </div>
  );
};

export default CategoriesScreen;
