import React from 'react';

interface WaitingModalProps {
  isOpen: boolean;
}

const WaitingModal: React.FC<WaitingModalProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 animate-fade-in-fast">
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-12 flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-2xl text-slate-600">기다려주세요...</p>
      </div>
    </div>
  );
};

export default WaitingModal;