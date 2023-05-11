import styles from './Scrollbar.module.css'

export default function Scrollbar() {

    return (
        <div className={styles.container}>
           
            {
                Array.from(Array(10)).map(ele => (
                    <div className={styles.card}></div>
                ))
            }
        </div>
    )
}