import styles from '../styles/EOM.module.css'
import Toolbar from '../components/toolbar'

export default function EOM({ employee }) {
    console.log(employee)
    return (
        <div className='page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Employee of the month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} />
                    <p>{employee.description}</p>
                </div>

            </div>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const res = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')

    const emp = await res.json()

    return {
        props: {
            employee: emp
        }
    }
}
