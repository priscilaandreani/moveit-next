import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { ChallangeBox } from '../components/ChallangeBox';
import { CompletedChallanges } from '../components/CompletedChallanges/CompletedChallanges';
import { Countdown } from '../components/Countdown/Countdown';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';
import { ChallangeProvider } from '../contexts/ChallangeContexts';
import { CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

interface HomeProps {
  level: number,
  currentExperience: number,
  challangesCompleted: number
}

export default function Home(props:HomeProps ) {
  return (
    <ChallangeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challangesCompleted={props.challangesCompleted}
    >
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
    </ChallangeProvider>


  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { level, currentExperience, challangesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challangesCompleted: Number(challangesCompleted)
    }
  }
}