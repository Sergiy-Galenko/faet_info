import styles from '../styles/App.module.css'

function ButtonColorBorder(props) {
    return (
        <button 
            className={styles.btn} 
            style={{border: `2px solid ${props.color}`}}
        >
            {props.text}
        </button>
    )
}

export default ButtonColorBorder