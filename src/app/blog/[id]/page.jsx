import styles from './id.module.css'
import  Image  from 'next/image';

export default async function page({params}) {
const slug = params.id


  const resposn = await fetch(`https://dummyjson.com/products/${slug}`)
  const data=  await resposn.json()


  return (
    <div className={styles.container}>
      
      <header >
        <div>
          <h1 className={styles.title}>{data.title}</h1>
          <h3 style={{fontWeight:'400'}}>price : {data.price} </h3>
        </div>
        <div className={styles.imageContainer}>
        <Image
          src={data.thumbnail}
          alt={'image'}
          className={styles.image}
          fill={true}
        
          />
          <span className={styles.auther}>{data.category}</span>
        </div>

      </header>
<div className={styles.content}>
  <p className={styles.text}>{data.description}</p>
</div>

    </div>
  )
}

