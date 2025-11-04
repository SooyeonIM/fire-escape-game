import React from 'react';
import { KeyIcon } from './icons/Icons';

interface CodeHistoryPanelProps {
  codes: number[];
}

const CodeHistoryPanel: React.FC<CodeHistoryPanelProps> = ({ codes }) => {
  return (
    <div className="fixed bottom-4 left-4 z-30 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg shadow-lg p-4 max-w-xs animate-fade-in">
      <h3 className="text-lg font-bold text-yellow-600 mb-2 flex items-center gap-2">
        <KeyIcon className="w-5 h-5"/>
        획득한 비밀 코드
      </h3>
      {codes.length > 0 ? (
        <ul className="space-y-1">
          {codes.map((code, index) => (
            <li key={index} className="text-slate-700 font-mono text-xl tracking-widest bg-slate-100 px-2 py-1 rounded">
              {code}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-500">아직 발견한 코드가 없습니다.</p>
      )}
    </div>
  );
};

export default CodeHistoryPanel;