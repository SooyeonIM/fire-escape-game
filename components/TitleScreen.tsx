import React from 'react';
import { FireIcon } from './icons/Icons';
import type { GameMode } from '../types';

interface TitleScreenProps {
  onStartGame: (mode: GameMode) => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ onStartGame }) => {
  return (
    <div className="text-center animate-fade-in">
      <div className="flex justify-center items-center mb-6">
        <FireIcon className="w-20 h-20 text-orange-500" />
        <h1 className="text-5xl md:text-7xl font-bold ml-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
          화재탈출 생존게임
        </h1>
      </div>
      <p className="text-slate-600 mb-12 max-w-2xl mx-auto text-xl">
        초등학교 6학년 과학 '연소와 소화' 단원을 기반으로 한 화재 대처 학습 게임입니다.
        각 상황에 맞는 최선의 선택을 하여 '안전 점수'를 높이고 무사히 탈출하세요!
      </p>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => onStartGame('solo')}
          className="px-10 py-5 text-4xl font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          시작하기
        </button>
        <button
          onClick={() => onStartGame('co-op')}
          className="px-10 py-5 text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
        >
          함께하기
        </button>
      </div>
    </div>
  );
};

export default TitleScreen;
