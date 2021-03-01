import { createContext, ReactNode, useState } from 'react';
import challanges from '../../challenges.json';

interface Challange {
  type: 'body', 'eye',
  description: string,
  amount: number
}

interface ChallangeContextData {
  level: number,
  challangesCompleted: number,
  currentExperience: number,
  experienceToNextLevel: number,
  levelUp: () => void,
  startNewChallange: () => void,
  activeChallange: Challange,
  resetChallange: () => void,
}

interface ChallangeProviderProps {
  children: ReactNode;
}

export const ChallangeContext= createContext({} as ChallangeContextData);

export function ChallangeProvider({ children }: ChallangeProviderProps) {

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(25);
  const [challangesCompleted, setChallangesCompleted] = useState(1);

  const [activeChallange, setActiveChallange] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


  function levelUp() {
    setLevel(level + 1);
  };


  function startNewChallange() {
    const randomChallangesIndex = Math.floor(Math.random() * challanges.length);
    console.log(randomChallangesIndex, 'randomChallangesIndex')
    const challange = challanges[randomChallangesIndex]

    setActiveChallange(challange);
  }

  function resetChallange() {
    setActiveChallange(null);
  }

  return (
    <ChallangeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challangesCompleted,
        startNewChallange,
        activeChallange,
        resetChallange,
        experienceToNextLevel
      }}>
      {children}
    </ChallangeContext.Provider>
  )
};

