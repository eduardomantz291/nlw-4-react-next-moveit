import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eduardomantz291.png" alt="Eduardo Mantz"/>
      <div>
        <strong>Eduardo Mantz</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}</p>
      </div>
    </div>
  );
}