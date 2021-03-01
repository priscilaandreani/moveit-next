import { useContext } from 'react';
import { ChallangeContext } from '../../contexts/ChallangeContexts';
import styles from '../../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext( ChallangeContext );

  return (
    <div className={styles.profileContainer}>
      <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png" alt="Usuário" />
      <div>
        <strong>YoY!</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}</p>
      </div>
    </div>
  )
}