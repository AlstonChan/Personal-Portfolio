import styles from "../styles/aboutme.module.css";
import Image from "next/image";

export default function Aboutme() {
  return (
    <article>
      <div className={styles.iconGroup}></div>
      <div className={styles.nameIntro}>
        <p>Hi, I am</p>
        <h1>CHAN ALSTON</h1>
      </div>
    </article>
  );
}
