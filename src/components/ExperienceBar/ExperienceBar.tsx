import styles from '../../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
  return(
    <header className={styles.experienceBar
    }>
      <span>0xp</span>
      <div>
        <div style={{ width: '60%'}}></div>
        <span className={styles.currentExperience} style={{ left: '60%'}}>
          300xp
        </span>
      </div>
      <span>600xp</span>
    </header>
  )
};