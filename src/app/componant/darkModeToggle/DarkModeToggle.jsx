'use client'
import { useContext } from 'react'
import styles from './darkMode.module.css'
import { ThemeContext } from '@/context/ThemeContext'




export default function DarkModeToggle() {

 const {mode,toggle} = useContext(ThemeContext)
  
    return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.light}>🌙</div>
        <div className={styles.dark}>🌚</div>
        <div style={mode==='light'?{right:0}:{left:0}} className={styles.switch}/>

    </div>
  )

}
