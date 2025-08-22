import Filter from "../components/Filter.jsx"
import LessonsCard from "../components/LessonsCard.jsx"
import {lessons} from "../data/lessons.js"
import styles from '../styles/views/Lessons.module.css'
import {filtersForLessons} from '../data/filter.js'

function Lessons() {
    return (
        <>
            <Filter filters={filtersForLessons}/>
            <div className={styles.lessonsBlock}>
                {lessons.map((item) => (
                    <LessonsCard data={item} />
                ))}
            </div>
        </>
    )
}

export default Lessons