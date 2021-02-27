import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import styles from '../../styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);


  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteRight, minuteLeft] = String(minutes).padStart(2, '0').split('');
  const [secondRight, secondLeft] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
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
    }
  }, [isActive, time])

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
              </button>
            ) : (
                <button
                  type="button"
                  className={styles.startCountdownButton}
                  onClick={startCountdown}>
                  Inicar um ciclo
                </button>)
            }
          </>
        )}
        </div>



  )
 }
