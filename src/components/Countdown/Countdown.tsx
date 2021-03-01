import { useContext } from 'react';
import { FaCheckCircle, FaPlayCircle, FaTimesCircle } from 'react-icons/fa';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';


export function Countdown() {

  const { minutes,
    seconds,
    hasFinished,
    resetCountdown,
    isActive,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteRight, minuteLeft] = String(minutes).padStart(2, '0').split('');
  const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
          <div className={styles.countdownContainer}>
      <div >
        <span>{minuteRight}</span>
        <span>{minuteLeft}</span>
      </div>
      <span>:</span>
      <div >
        <span>{secondRight}</span>
        <span>{secondLeft}</span>
      </div>
      </div>

      { hasFinished ?
        <button
          disabled
          type="button"
          className={styles.startCountdownButton}
          onClick={resetCountdown}>
          Ciclo encerrado
           <FaCheckCircle  style={{color: 'var(--green)', marginLeft: '1rem'}}/>
        </button> : (
          <>
            { isActive ? (
              <button
                type="button"
                className={`${styles.startCountdownButton} ${styles.stopCountdownButton}`}
                onClick={resetCountdown}>
                Abandonar ciclo
                <FaTimesCircle style={{ color: 'var(--red)', marginLeft: '1rem' }} />
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.startCountdownButton}
                  onClick={startCountdown}>
                  Inicar um ciclo
                  <FaPlayCircle style={{ color: 'var(--white)', marginLeft: '1rem' }} />
                </button>)
            }
          </>
        )}
        </div>



  )
 }
