import styles from '../styles/components/ChallengesBox.module.css'

export function ChallengesBox() {
  return (
    <div className={styles.challengesBoxContainer}>
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando um desafio.
        </p>
      </div>  
    </div>
  );
}