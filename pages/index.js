import Head from 'next/head'
import Image from 'next/image'
import Toolbar from '../components/toolbar'
import styles from '../styles/Home.module.css'

// news API 70b17305b0f144f0901f8d1ed95e86d1

export default function Home() {
  return (
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <h1>NextJS News App</h1>
        <h3>Checkout our latest news!</h3>


      </div>

    </div>
  )
}
