import styles from '../styles/App.module.css'

function ButtonColorFilled(props) {
    return (
        <button
            className={styles.btn} 
            style={{backgroundColor: props.color}}
        >
            {props.text}
        </button>
    )
}

export default ButtonColorFilled