import styles from '../styles/EOM.module.css'
import Toolbar from '../components/toolbar'

export default function About({ employee }) {
    console.log(employee)
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <a href='https://github.com/huynguyez'><h3>Huy Z</h3></a>
            </div>
        </div>
    )
}

