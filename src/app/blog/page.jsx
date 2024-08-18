
import Link from "next/link";
import styles from "./blog.module.css";
import Image from "next/image";

export default async function Blog() {




  const resposn = await fetch('https://fakestoreapi.com/products')
  const data =  await resposn.json()

         




  return (
    <div className={styles.mainContainer}>
      
      {data.map((items,index) => {return(

<Link key={index} className={styles.link} href={`/blog/${items.id}`}>
<div>
  <Image
    src={
     items.image
    }
    className={styles.image}
    width={250}
    height={200}
    alt={'post image'}
  />
</div>
      <div className={styles.content}>
      <h2 className={styles.title}> {items.title}</h2>
      <p className={styles.text}> {items.description}</p>
      </div>



</Link>
      ) })}
     
     
  
    </div>
  );
}
