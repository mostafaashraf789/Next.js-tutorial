import Link from 'next/link'
import styles from './logo.module.css'
import {  Montserrat } from 'next/font/google'

const logo =   Montserrat({ subsets: ['latin'] ,
weight:['900']
})


export default function Logo() {
  return (
    <Link href='/' className={`${styles.logo} ${logo.className}`}> De4aShop </Link>
  )
}
