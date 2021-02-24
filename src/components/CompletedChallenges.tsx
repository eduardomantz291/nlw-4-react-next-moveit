import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ComplatedChallenges.module.css'

export function ComplatedChallenges() {
  const { challengsCompleted } = useContext(ChallengesContext)

  return (
    <div className={styles.complatedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengsCompleted}</span>
    </div>
  );
}