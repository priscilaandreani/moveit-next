import { useContext } from 'react';
import { ChallangeContext } from '../contexts/ChallangeContexts';
import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {
  const {activeChallange, resetChallange } = useContext(ChallangeContext);

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
              onClick={resetChallange}
            >Falhei</button>
            <button
              type="button"
              className={styles.challangeSucceeded}
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