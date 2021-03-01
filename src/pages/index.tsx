import Head from 'next/head';
import { ChallangeBox } from '../components/ChallangeBox';
import { CompletedChallanges } from '../components/CompletedChallanges/CompletedChallanges';
import { Countdown } from '../components/Countdown/Countdown';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moveit!</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallanges />
          <Countdown />
        </div>

        <div>
          <ChallangeBox />
        </div>
      </section>
      </CountdownProvider>

    </div>
  )
}
