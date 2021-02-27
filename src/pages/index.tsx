import { CompletedChallanges } from '../components/CompletedChallanges/CompletedChallanges/CompletedChallanges';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallanges />
        </div>
      </section>
    </div>
  )
}
