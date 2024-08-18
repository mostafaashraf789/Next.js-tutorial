'use client'
import styles from './button.module.css'

export default function Button() {
  return (
    <button className={styles.Button} onClick={() => { console.log('log out'); }}>log out</button>
  )
}
