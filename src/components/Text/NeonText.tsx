import React from 'react'
import styles from './NeonText.module.css'
type Props = {
    text: string
}

const NeonText = ({ text }: Props) => {
    return (
        <div className={styles.textEffect}>
            <h1 className={styles.neon} data-text={text}>{text}</h1>
            <div className={styles.gradient}></div>
            <div className={styles.spotlight}></div>
        </div >
    )
}

export default NeonText