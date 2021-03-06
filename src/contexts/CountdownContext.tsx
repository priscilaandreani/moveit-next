import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallangeContext } from "./ChallangeContexts";

interface CountdownContextData {
  minutes: number,
  seconds: number,
  hasFinished: Boolean,
  isActive: Boolean,
  startCountdown: () => void,
  resetCountdown: () => void,

}

interface CountdownContextProps {
  children: ReactNode,
}

let countdownTimeout: NodeJS.Timeout;


export const CountdownContext = createContext({} as CountdownContextData)

export function CountdownProvider({ children }: CountdownContextProps) {

   const { startNewChallange, activeChallange } = useContext(ChallangeContext);

  const [time, setTime] = useState( 25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

 function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time -1)
      },1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallange();
    }
  }, [isActive, time])


  return (
    <CountdownContext.Provider value={{
      minutes,
      seconds,
      hasFinished,
      isActive,
      startCountdown,
      resetCountdown
    }}>
      { children }
    </CountdownContext.Provider>
  )
}