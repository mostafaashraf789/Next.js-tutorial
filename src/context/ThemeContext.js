'use client'

import { createContext,useState } from "react"


export const ThemeContext = createContext()


export default function ThemeProvider({children}) {

    const [mode, setmode] = useState('dark')

      const toggle = () => { 
        setmode(mode === 'dark'?'light':'dark')
       }


  return (
    <ThemeContext.Provider value={{mode,toggle}}>
       
        <div className={`Theme ${mode}`}>
        {children}
        </div>

    </ThemeContext.Provider>
  )
}
