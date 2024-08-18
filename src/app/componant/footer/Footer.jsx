import styles from './footer.module.css'
import  Image  from 'next/image';
import {icons} from './icons'
export default function Footer() {
  return (
    <div className={styles.container}>
<div >© 2023 De4aShop. All rights reserved.</div>


<div className={styles.images}>

{icons.map((icons,index) => { 
  return(

<Image
src={'/img/icons/'+icons.src}
width={25}
height={25}
className={styles.icon}
alt={icons.alt}
key={index}
/>


  ) })}

</div>
    </div>
  )
}
