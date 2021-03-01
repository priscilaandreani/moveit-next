import { useContext } from 'react'
import { ChallangeContext } from '../contexts/ChallangeContexts'
import styles from '../styles/components/ModalLevelUp.module.css'

export function LevelUpModal() {

  const {level, closeModal} = useContext(ChallangeContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabens!</strong>

        <p>Novo level atingido!</p>

        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt=""/>
        </button>
      </div>
    </div>
  )
}