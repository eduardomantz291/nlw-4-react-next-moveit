import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/eduardomantz291.png" alt="Eduardo Mantz"/>
      <div>
        <strong>Eduardo Mantz</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          level 1</p>
      </div>
    </div>
  );
}