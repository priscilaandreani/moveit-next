import styles from '../styles/components/ChallangeBox.module.css';

export function ChallangeBox() {

  const hasChallange = true;

  return (
    <div className={styles.containerChallangeBox}>
      { hasChallange ? (
        <div className={styles.challangeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt=""/>
            <strong>Novo desafio!</strong>
            <p>Levante e caminhe.</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challangeFailed}
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
          Suba de level completando desafios.
        </p>
      </div>)}
    </div>
  )
};