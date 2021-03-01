import { useContext } from 'react';
import { ChallangeContext } from '../../contexts/ChallangeContexts';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext( ChallangeContext );

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/priscilaandreani.png" alt="Usuário" />
      <div>
        <strong>Priscila Andreani</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}</p>
      </div>
    </div>
  )
}