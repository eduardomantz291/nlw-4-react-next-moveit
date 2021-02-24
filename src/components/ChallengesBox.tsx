import styles from '../styles/components/ChallengesBox.module.css'

export function ChallengesBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengesBoxContainer}>
 
      { hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400px</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFaileButton}>Falhei</button>
            <button type="button" className={styles.challengeSucceededButton}>Completei</button>
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