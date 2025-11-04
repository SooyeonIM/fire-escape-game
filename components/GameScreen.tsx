import React from 'react';
import type { Scenario, Choice } from '../types';
import { ShieldIcon } from './icons/Icons';

interface GameScreenProps {
  scenario: Scenario;
  onSelectChoice: (choice: Choice) => void;
  currentScore: number;
}

const GameScreen: React.FC<GameScreenProps> = ({ scenario, onSelectChoice, currentScore }) => {
  return (
    <div className="w-full animate-fade-in">
      {/* Header */}
      <header className="sticky top-0 z-20 py-4 mb-8 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-orange-500">화재탈출 생존게임</h1>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
            <ShieldIcon className="w-8 h-8 text-green-500" />
            <span className="text-2xl font-bold text-slate-800">안전 점수: {currentScore}</span>
          </div>
        </div>
      </header>

      {/* Situation */}
      <div className="relative bg-white p-8 rounded-lg mb-8 shadow-lg border border-slate-200">
        <div className="absolute -top-6 -left-6">
            <span className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full text-3xl font-bold text-white shadow-lg border-4 border-white">
                {scenario.id}
            </span>
        </div>
        {scenario.imageUrl && (
          <div className="mb-6">
            <img 
              src={scenario.imageUrl} 
              alt="Scenario situation" 
              className="w-full max-h-96 object-contain rounded-lg"
            />
          </div>
        )}
        <h2 className="text-4xl font-bold text-center text-slate-800">{scenario.situation}</h2>
      </div>

      {/* Choices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scenario.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => onSelectChoice(choice)}
              className="p-6 text-left text-xl bg-white rounded-lg shadow-md hover:bg-slate-50 hover:scale-105 transform transition-all duration-300 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {choice.text}
            </button>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;