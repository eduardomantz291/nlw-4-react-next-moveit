import { createContext, useState, ReactNode } from  'react';
import challenges from '../../challenges.json';


interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengsCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levalUp: () => void;
  startNewChallenge: () => void;
  resertChalleges: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(23);
  const [challengsCompleted, setChallengsCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  function levalUp() {
    setLevel(level + 1);
  }
  
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  function resertChalleges() {
    setActiveChallenge(null);
  }

  return (
    <ChallengesContext.Provider value={{ level: 1, levalUp, currentExperience, challengsCompleted, startNewChallenge, activeChallenge, resertChalleges, experienceToNextLevel: experienceToNextLevel }}>
      {children}
    </ChallengesContext.Provider>
  );
}