import React, { useState, useEffect } from 'react';
import { SuccessIcon, FailureIcon, WarningIcon } from './icons/Icons';

interface EndScreenProps {
  score: number;
  onRestart: () => void;
}

interface ResultDetails {
  title: string;
  message: string;
  Icon: React.FC<{ className?: string }>;
  color: string;
  buttonGradient: string;
}

const getResultDetails = (score: number): ResultDetails => {
  if (score >= 2000) {
    return {
      title: "훌륭하게 탈출에 성공했습니다!",
      message: "당신은 생존왕!",
      Icon: SuccessIcon,
      color: "text-blue-500",
      buttonGradient: "from-blue-500 to-cyan-500"
    };
  }
  if (score >= 1000) {
    return {
      title: "무사히 탈출에 성공했습니다!",
      message: "축하합니다.",
      Icon: SuccessIcon,
      color: "text-green-500",
      buttonGradient: "from-green-500 to-lime-500"
    };
  }
  if (score > 0) {
    return {
      title: "간신히 탈출했습니다",
      message: "다친 곳이 많아요. 병원으로 갑시다.",
      Icon: WarningIcon,
      color: "text-yellow-500",
      buttonGradient: "from-yellow-500 to-amber-500"
    };
  }
  return {
    title: "탈출 실패...",
    message: "죽을뻔 했지만 소방관이 구해주었어요. 오늘 경험을 꼭 기억해요!",
    Icon: FailureIcon,
    color: "text-red-500",
    buttonGradient: "from-red-500 to-rose-500"
  };
};


const EndScreen: React.FC<EndScreenProps> = ({ score, onRestart }) => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  
  useEffect(() => {
    const sound = new Audio('https://cdn.pixabay.com/audio/2022/11/17/audio_88c0392d24.mp3');
    sound.play().catch(e => console.error("Audio playback failed", e));
    
    const openTimer = setTimeout(() => setDoorsOpen(true), 300);
    const contentTimer = setTimeout(() => setContentVisible(true), 1300);

    return () => {
        clearTimeout(openTimer);
        clearTimeout(contentTimer);
    };
  }, []);

  const { Icon, title, message, color, buttonGradient } = getResultDetails(score);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className={`text-center flex flex-col items-center transition-opacity duration-1000 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Icon className={`w-28 h-28 ${color} mb-4`} />
        <h1 className={`text-6xl font-bold mb-4 ${color}`}>{title}</h1>
        <p className="text-2xl text-slate-600 mb-8 max-w-xl">
          {message}
        </p>
        <div className="text-4xl font-bold mb-10 p-6 bg-white rounded-xl shadow-md">
          최종 안전 점수: <span className={color}>{score}</span>
        </div>
        <button
          onClick={onRestart}
          className={`px-8 py-4 text-3xl font-bold text-white bg-gradient-to-r ${buttonGradient} rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300`}
        >
          다시하기
        </button>
      </div>

      {/* Door Animation Overlay */}
      <div aria-hidden="true" className="fixed inset-0 flex z-30 pointer-events-none">
        <div className={`w-1/2 h-full bg-slate-800 border-r-2 border-slate-500 transform transition-transform duration-1000 ease-in-out flex justify-end items-center pr-4 ${doorsOpen ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className="w-5 h-24 bg-slate-600 rounded-full shadow-inner"></div>
        </div>
        <div className={`w-1/2 h-full bg-slate-800 border-l-2 border-slate-500 transform transition-transform duration-1000 ease-in-out flex justify-start items-center pl-4 ${doorsOpen ? 'translate-x-full' : 'translate-x-0'}`}>
          <div className="w-5 h-24 bg-slate-600 rounded-full shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default EndScreen;