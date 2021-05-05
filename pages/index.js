import Toolbar from '../components/Nav'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>Latest News</h1>
        <button className={styles.btnGo} onClick={() => router.push('feed/1')}>Check it out</button>
      </div>
    </div>
  )
}
