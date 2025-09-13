import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import CategoriesScreen from './components/CategoriesScreen';
import QuizScreen from './components/QuizScreen';
import ResultsScreen from './components/ResultsScreen';
import questionsData from './data/questions.json';

function App() {
  const [currentScreen, setCurrentScreen] = useState('start');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);

  // Get unique categories from questions
  const categories = [...new Set(questionsData.perguntas.map(q => q.categoria))];

  // Get questions for selected category
  const getCategoryQuestions = (category) => {
    return questionsData.perguntas.filter(q => q.categoria === category);
  };

  const handleStart = () => {
    setCurrentScreen('categories');
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (score) => {
    const categoryQuestions = getCategoryQuestions(selectedCategory);
    setQuizScore(score);
    setQuizTotal(categoryQuestions.length);
    setCurrentScreen('results');
  };

  const handleRestart = () => {
    setCurrentScreen('quiz');
    setQuizScore(0);
    setQuizTotal(0);
  };

  const handleBackToCategories = () => {
    setCurrentScreen('categories');
    setSelectedCategory('');
    setQuizScore(0);
    setQuizTotal(0);
  };

  const handleBackToStart = () => {
    setCurrentScreen('start');
    setSelectedCategory('');
    setQuizScore(0);
    setQuizTotal(0);
  };

  const handleBackFromQuiz = () => {
    setCurrentScreen('categories');
    setSelectedCategory('');
  };

  // Render current screen
  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'start':
        return <StartScreen onStart={handleStart} />;
      
      case 'categories':
        return (
          <CategoriesScreen 
            categories={categories}
            onSelectCategory={handleSelectCategory}
            onBack={handleBackToStart}
          />
        );
      
      case 'quiz':
        return (
          <QuizScreen 
            questions={getCategoryQuestions(selectedCategory)}
            onComplete={handleQuizComplete}
            onBack={handleBackFromQuiz}
          />
        );
      
      case 'results':
        return (
          <ResultsScreen 
            score={quizScore}
            totalQuestions={quizTotal}
            onRestart={handleRestart}
            onBackToCategories={handleBackToCategories}
          />
        );
      
      default:
        return <StartScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentScreen()}
    </div>
  );
}

export default App;
