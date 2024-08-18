
import Link from "next/link"
import styles from './Nav.module.css'
import {links} from './links'
import Button from "../../elements/button/Button"
import Logo from "@/app/elements/logo/Logo"
import DarkModeToggle from "../darkModeToggle/DarkModeToggle"

export default function Nav() {
  return (

       
 <div className={styles.container} >


<Logo/>


 <div className={styles.links}>
    
    <DarkModeToggle/>
    
     {links.map((link,index)=>{ 
      return ( <Link key={index} className={styles.link} href={link.url}>{link.title}</Link>)
       
        
     })}

<Button/>

 </div>


 </div>
  )
}
