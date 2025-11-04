import React, { useState } from 'react';

interface NumberChallengeModalProps {
  isOpen: boolean;
  correctCode: number;
  onSubmit: (isCorrect: boolean) => void;
  onClose: () => void;
}

const NumberChallengeModal: React.FC<NumberChallengeModalProps> = ({ isOpen, correctCode, onSubmit, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(inputValue, 10) === correctCode) {
      setError('');
      onSubmit(true);
    } else {
      setError('코드를 다시 입력해주세요');
      setInputValue(''); // Clear input for retry
      onSubmit(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 animate-fade-in-fast p-4">
      <div className="bg-white border border-slate-200 rounded-xl shadow-2xl w-full max-w-md">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-3xl font-bold text-center text-slate-800">비밀 코드 입력</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-8">
          <p className="text-center text-slate-600 mb-6 text-lg">선택 결과를 보려면 비밀 코드를 입력하세요.</p>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-3 text-3xl text-center bg-slate-100 border-2 border-slate-300 rounded-lg text-slate-800 focus:border-blue-500 focus:ring-blue-500 outline-none transition"
            placeholder="####"
            autoFocus
          />
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="submit"
              className="px-8 py-3 text-xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              확인
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-xl font-bold bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition"
            >
              뒤로가기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NumberChallengeModal;