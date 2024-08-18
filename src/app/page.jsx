import styles from "./page.module.css";
import Image from "next/image";
import hero from "/public/img/icons/hero.svg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Your best online shop destination !</h1>
        <p className={styles.description}>
          Discover a world of endless shopping possibilities at our online
          store. Browse choose, and order your favorite prouucts from the
          comfort of toyr home.
        </p>
        <button className={styles.button}>shop now</button>
      </div>  

      <div className={styles.right}>
        <Image src={hero} className={styles.img} alt="hero" />
      </div>
    </div>
  );
}
