import React from 'react';

interface InterstitialScreenProps {
  isOpen: boolean;
  imageUrl: string;
  onContinue: () => void;
}

const InterstitialScreen: React.FC<InterstitialScreenProps> = ({ isOpen, imageUrl, onContinue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex flex-col justify-center items-center z-50 animate-fade-in-fast p-4">
      <div className="w-full max-w-4xl h-full max-h-[80vh] mb-4">
        <img 
          src={imageUrl} 
          alt="Information" 
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      <button
        onClick={onContinue}
        className="px-8 py-3 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
      >
        다음으로
      </button>
    </div>
  );
};

export default InterstitialScreen;
