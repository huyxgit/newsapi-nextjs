import { useRouter } from 'next/router'
import styles from '../styles/Nav.module.css'

export default function Toolbar() {
    const router = useRouter()
    return (
        <div className={styles.main}>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/about')}>About</div>
        </div>
    )
}
