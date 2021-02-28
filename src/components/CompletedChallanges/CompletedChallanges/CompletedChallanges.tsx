import { useContext } from 'react';
import { ChallangeContext } from '../../../contexts/ChallangeContexts';
import styles from '../../../styles/components/CompletedChallanges.module.css';

export function CompletedChallanges() {

  const { challangesCompleted } = useContext(ChallangeContext);

  return (
    <div className={styles.completeCompletedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challangesCompleted}</span>
    </div>
  )
}