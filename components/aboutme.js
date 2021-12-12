import styles from "../styles/aboutme.module.css";
import Image from "next/image";

export default function Aboutme() {
  return (
    <article className={styles.aboutme}>
      <div className={styles.iconGroup}>
        <div className={styles.iconSquare}>
          <Image
            src="/Html5.png"
            width="130px"
            height="130px"
            alt="HTML5 Logo"
          />
        </div>
        <div>
          <Image src="/CSS3.png" width="145px" height="145px" alt="CSS3 Logo" />
        </div>
        <div>
          <Image
            src="/Node js.png"
            width="158px"
            height="138px"
            alt="Node Js Logo"
          />
        </div>
        <div>
          <Image
            src="/React js.png"
            width="139px"
            height="139px"
            alt="React Js Logo"
          />
        </div>
        <div>
          <Image
            src="/Javascript.png"
            width="130px"
            height="130px"
            alt="Javascript Logo"
          />
        </div>
        <div className={styles.iconLong}>
          <Image
            src="/Next js.png"
            width="185px"
            height="124px"
            alt="Next Js Logo"
          />
        </div>
        <div>
          <Image
            src="/Figma.png"
            width="130px"
            height="130px"
            alt="Figma Logo"
          />
        </div>
      </div>
      <div className={styles.nameIntro}>
        <p>Hi, I am</p>
        <h1>CHAN ALSTON</h1>
      </div>
    </article>
  );
}
