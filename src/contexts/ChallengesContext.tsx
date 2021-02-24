import { createContext, useState, ReactNode } from  'react';


interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengsCompleted: number;
  levalUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengsCompleted, setChallengsCompleted] = useState(0);

  function levalUp() {
    setLevel(level + 1);
  }
  
  function startNewChallenge() {
    console.log('New challenge');
  }

  return (
    <ChallengesContext.Provider value={{ level: 1, levalUp, currentExperience, challengsCompleted, startNewChallenge }}>
      {children}
    </ChallengesContext.Provider>
  );
}