
export type GameState = 'title' | 'playing' | 'end';
export type GameMode = 'solo' | 'co-op';

export interface Choice {
  text: string;
  feedback: string;
  scoreChange: number;
  nextScenarioId: number | null;
}

export interface Scenario {
  id: number;
  situation: string;
  choices: Choice[];
  imageUrl?: string;
}