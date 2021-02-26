import Head from 'next/head';

import { ComplatedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengesBox } from '../components/ChallengesBox';

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <ComplatedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}