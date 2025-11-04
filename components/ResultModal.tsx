import React from 'react';
import type { Choice } from '../types';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  choices: Choice[];
  selectedChoice: Choice;
}

const ResultModal: React.FC<ResultModalProps> = ({ isOpen, onClose, choices, selectedChoice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 animate-fade-in-fast p-4">
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-center text-slate-800">선택 결과</h2>
        </div>
        <div className="p-6 md:p-8 overflow-y-auto">
          <div className="space-y-4">
            {choices.map((choice, index) => {
              const isSelected = choice.text === selectedChoice.text;
              const scoreColor = choice.scoreChange > 0 ? 'text-green-600' : choice.scoreChange < 0 ? 'text-red-600' : 'text-slate-500';
              const selectionRing = isSelected ? 'ring-2 ring-blue-500' : 'border border-slate-200';

              return (
                <div key={index} className={`p-4 bg-slate-50 rounded-lg ${selectionRing} transition-all`}>
                  <div className="flex justify-between items-start mb-2">
                    <p className="flex-1 text-slate-800 mr-4 text-lg">{choice.text}</p>
                    <span className={`text-2xl font-bold whitespace-nowrap ${scoreColor}`}>
                      {choice.scoreChange > 0 ? `+${choice.scoreChange}` : choice.scoreChange}
                    </span>
                  </div>
                  <p className="text-slate-600 text-base">{choice.feedback}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-6 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="px-8 py-3 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            다음으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;