import React, { useState, useEffect, useCallback, useRef } from 'react';
import { scenarios } from './data/scenarios';
import type { GameState, Choice, Scenario, GameMode } from './types';
import TitleScreen from './components/TitleScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import ResultModal from './components/ResultModal';
import WaitingModal from './components/WaitingModal';
import NumberChallengeModal from './components/NumberChallengeModal';


// Fisher-Yates shuffle algorithm to randomize choices
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const secretCodes: Record<number, number> = {
  1: 118, 2: 25, 3: 20, 4: 11, 5: 83, 6: 77,
  7: 42, 8: 97, 9: 54, 10: 41, 11: 39, 12: 16,
};


const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('title');
  const [gameMode, setGameMode] = useState<GameMode>('solo');
  const [score, setScore] = useState<number>(0);
  const [currentScenarioId, setCurrentScenarioId] = useState<number>(1);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [lastSelectedChoice, setLastSelectedChoice] = useState<Choice | null>(null);

  // States for co-op mode
  const [isWaiting, setIsWaiting] = useState<boolean>(false);
  const [showChallenge, setShowChallenge] = useState<boolean>(false);
  const [pendingChoice, setPendingChoice] = useState<Choice | null>(null);

  const waitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (gameState === 'playing') {
      const scenarioData = scenarios.find(s => s.id === currentScenarioId);
      if (scenarioData) {
        setCurrentScenario({
          ...scenarioData,
          choices: shuffleArray(scenarioData.choices),
        });
      } else {
        // If scenario is not found, end the game.
        setGameState('end');
      }
    } else {
      // Reset scenario when not playing
      setCurrentScenario(null);
    }
  }, [currentScenarioId, gameState]);

  useEffect(() => {
    return () => {
      if (waitTimerRef.current) {
        clearTimeout(waitTimerRef.current);
      }
    };
  }, []);


  const startGame = (mode: GameMode) => {
    setGameMode(mode);
    setGameState('playing');
    setScore(0);
    setCurrentScenarioId(1);
    setIsWaiting(false);
    setShowChallenge(false);
    setPendingChoice(null);
  };

  const restartGame = () => {
    if (waitTimerRef.current) {
      clearTimeout(waitTimerRef.current);
      waitTimerRef.current = null;
    }
    setGameState('title');
  };

  const processChoice = useCallback((choice: Choice) => {
    setScore(prev => prev + choice.scoreChange);
    setLastSelectedChoice(choice);
    setShowResultModal(true);
  }, []);

  const handleSelectChoice = (choice: Choice) => {
    if (gameMode === 'co-op') {
      setPendingChoice(choice);
      setIsWaiting(true);
      waitTimerRef.current = window.setTimeout(() => {
        setIsWaiting(false);
        setShowChallenge(true);
        waitTimerRef.current = null;
      }, 1000);
    } else {
      processChoice(choice);
    }
  };

  const handleChallengeSubmit = (isCorrect: boolean) => {
    if (isCorrect && pendingChoice) {
      setShowChallenge(false);
      processChoice(pendingChoice);
      setPendingChoice(null);
    }
    // If incorrect, do nothing. The modal will show an error and stay open.
  };

  const handleChallengeClose = () => {
    setShowChallenge(false);
    setPendingChoice(null);
  };

  const advanceToNextScenario = () => {
    setShowResultModal(false);

    const nextId = lastSelectedChoice?.nextScenarioId;

    if (nextId) {
      setCurrentScenarioId(nextId);
    } else {
      setGameState('end');
    }
    setLastSelectedChoice(null);
  };

  return (
    <div className="relative min-h-screen text-slate-800 flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -right-1/4 w-3/4 h-3/4 bg-blue-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 -left-1/4 w-3/4 h-3/4 bg-yellow-300 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-4000"></div>

      <main className="z-10 w-full max-w-4xl mx-auto">
        {gameState === 'title' && <TitleScreen onStartGame={startGame} />}
        
        {gameState === 'playing' && currentScenario && (
          <GameScreen 
            scenario={currentScenario} 
            onSelectChoice={handleSelectChoice}
            currentScore={score}
          />
        )}

        {gameState === 'end' && <EndScreen score={score} onRestart={restartGame} />}

        {showResultModal && lastSelectedChoice && currentScenario && (
          <ResultModal
            isOpen={showResultModal}
            onClose={advanceToNextScenario}
            choices={currentScenario.choices}
            selectedChoice={lastSelectedChoice}
          />
        )}
        
        <WaitingModal isOpen={isWaiting} />

        {showChallenge && currentScenario && (
          <NumberChallengeModal
            isOpen={showChallenge}
            correctCode={secretCodes[currentScenario.id]}
            onSubmit={handleChallengeSubmit}
            onClose={handleChallengeClose}
          />
        )}
      </main>
    </div>
  );
};

export default App;