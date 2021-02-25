import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengesBox.module.css'

export function ChallengesBox() {
  const { activeChallenge, resertChalleges, completeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.challengesBoxContainer}>
 
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}px</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFaileButton} onClick={resertChalleges}>Falhei</button>
            <button type="button" className={styles.challengeSucceededButton} onClick={completeChallenge}>Completei</button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando um desafio.
          </p>
        </div>  
      ) }
    </div>
  );
}