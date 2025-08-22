import styles from "../styles/views/Lessons.module.css"

function LessonsCard({ data }) {
    return (
        <div className={styles.card}>
            <div className={styles.card_title}>
                <p className={styles.title__text}>
                    {data.text}
                </p>
            </div>
            <div className={styles.card_teachersCount}>
                <p className={styles.teachersCount__text}>
                    Викладає викладачів: {data.teachers} 
                </p>
            </div>
        </div>
    )
}

export default LessonsCard