import { useContext } from 'react';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { ChallangeContext } from '../contexts/ChallangeContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {
  const { activeChallange, resetChallange, completeChallange } = useContext(ChallangeContext);

  const { resetCountdown } = useContext(CountdownContext)

  function handleChallangeSucceded(){
    completeChallange()
    resetCountdown()
  }
  function handleChallangeFailed() {
    resetChallange()
    resetCountdown()
  }

  return (
    <div className={styles.containerChallangeBox}>
      { activeChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe {activeChallange.amount}xp</header>

          <main>
            <img src={`icons/${activeChallange.type}.svg`} alt=""/>
            <strong>Novo desafio!</strong>
            <p>{activeChallange.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challangeFailed}
              onClick={handleChallangeFailed}
            ><HiOutlineEmojiSad size={20}/></button>
            <button
              type="button"
              className={styles.challangeSucceeded}
              onClick={handleChallangeSucceded}
            >Consegui!</button>
          </footer>
        </div>
      ):
        (<div className={styles.challangeNotActive}>
        <strong>Finalize um ciclo e receba um novo desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level" />
          Suba de level completando desafios
        </p>
      </div>)}
    </div>
  )
};