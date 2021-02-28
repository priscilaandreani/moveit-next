import { createContext, ReactNode, useState } from 'react';

interface ChallangeContextData {
  level: number,
  challangesCompleted: number,
  currentExperience: number,
  levelUp: () => void,
  startNewChallange: () => void,
}


interface ChallangeProviderProps {
  children: ReactNode;
}

export const ChallangeContext= createContext({} as ChallangeContextData);

export function ChallangeProvider({ children }): ChallangeProviderProps {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challangesCompleted, setChallangesCompleted] = useState(0);

  function startNewChallange() {
    console.log('new challange started')
  }

  function levelUp() {
    setLevel(level + 1);
  };

  return (
    <ChallangeContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challangesCompleted,
        startNewChallange
      }}>
      {children}
    </ChallangeContext.Provider>
  )
};

