import styles from './MyButton.module.css'

export function MyButton({text, func}){
    return (
        <button className={styles.button} onClick={func}>{text || "Soy un botón"}</button>
    )
}


