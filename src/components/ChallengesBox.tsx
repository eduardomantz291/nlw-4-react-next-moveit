import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengesBox.module.css'
import { ComplatedChallenges } from './CompletedChallenges';

export function ChallengesBox() {
  const { activeChallenge, resertChalleges, completeChallenge } = useContext(ChallengesContext);
  const { resertCountDown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resertCountDown();
  }

  function handleChallengeFailded() {
    resertChalleges();
    resertCountDown();
  }

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
            <button type="button" className={styles.challengeFaileButton} onClick={handleChallengeFailded}>Falhei</button>
            <button type="button" className={styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>Completei</button>
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