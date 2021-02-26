import { createContext, useState, ReactNode, useEffect } from  'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';
import { LevelUpModal } from '../components/LeveUpModal';


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
  levelUp: () => void;
  startNewChallenge: () => void;
  resertChalleges: () => void;
  completeChallenge: () => void;
  closeLeveUpModel: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number;
  currentExperience: number;
  challengsCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengsCompleted, setChallengsCompleted] = useState(rest.challengsCompleted ?? 0);

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengsCompleted', String(challengsCompleted));
  }, [level, currentExperience, challengsCompleted])

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLeveUpModel() {
    setIsLevelUpModalOpen(false);
  }
  
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === "granted") {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  function resertChalleges() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if(!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if(finalExperience > experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengsCompleted(challengsCompleted + 1)
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp, completeChallenge, closeLeveUpModel, currentExperience, challengsCompleted, startNewChallenge, activeChallenge, resertChalleges, experienceToNextLevel: experienceToNextLevel }}>
      {children}
      

      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  );
}