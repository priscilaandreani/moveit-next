import Cookies from 'js-cookie';
import { createContext, ReactNode, useEffect, useState } from 'react';
import challanges from '../../challenges.json';
import { LevelUpModal } from '../components/LevelUpModal';


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
  activeChallange: Challange,

  levelUp: () => void,
  startNewChallange: () => void,
  resetChallange: () => void,
  completeChallange: () => void;
  closeModal: () => void;
}

interface ChallangeProviderProps {
  children: ReactNode,
  level: number,
  currentExperience: number,
  challangesCompleted: number
}

export const ChallangeContext= createContext({} as ChallangeContextData);

export function ChallangeProvider({ children, ...rest }: ChallangeProviderProps) {

  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challangesCompleted, setChallangesCompleted] = useState(rest.challangesCompleted ?? 0);

  const [activeChallange, setActiveChallange] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  },[])

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challangesCompleted', String(challangesCompleted));

  }, [level, currentExperience, challangesCompleted]);

  function levelUp() {
    setLevel(level + 1);
    setIsModalOpen(true);
  };

  function closeModal(){
    setIsModalOpen(false)
  }


  function startNewChallange() {
    const randomChallangesIndex = Math.floor(Math.random() * challanges.length);
    console.log(randomChallangesIndex, 'randomChallangesIndex')
    const challange = challanges[randomChallangesIndex]

    setActiveChallange(challange);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio desbloqueado! 🎉', {
        body: `Valendo ${challange.amount}xp, booora!`
      })
    }
  }

  function resetChallange() {
    setActiveChallange(null);
  }

  function completeChallange() {
    if (!activeChallange) {
      return;
    }

    const { amount } = activeChallange;
    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp()
    }

    setCurrentExperience(finalExperience);
    setActiveChallange(null);
    setChallangesCompleted(challangesCompleted + 1);
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
        experienceToNextLevel,
        completeChallange,
        closeModal
      }}>
      {children}
     { isModalOpen  &&  <LevelUpModal /> }
    </ChallangeContext.Provider>
  )
};

