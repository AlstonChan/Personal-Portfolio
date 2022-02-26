import styles from "../styles/aboutme.module.css";
import Image from "next/image";

import htmlLogo from "../public/icon/Html5.png";
import cssLogo from "../public/icon/CSS3-240.png";
import jsLogo from "../public/icon/Javascript.png";
import reactJsLogo from "../public/icon/React js-240.png";
import nextJsLogo from "../public/icon/nextjs logo.png";
import nodeJsLogo from "../public/icon/Node js-240.png";
import figmaLogo from "../public/icon/Figma-240.png";
import docker from "../public/icon/docker.png";
import firebase from "../public/icon/Firebase-240.png";
import mongodb from "../public/icon/Mongo db-240.png";

const logosOne = [
  { img: htmlLogo, txt: "HTML5" },
  { img: cssLogo, txt: "CSS3" },
  { img: jsLogo, txt: "Javascript" },
  { img: reactJsLogo, txt: "React Js" },
  { img: nextJsLogo, txt: "Next Js" },
];

const logosTwo = [
  { img: nodeJsLogo, txt: "Node Js" },
  { img: figmaLogo, txt: "Figma" },
  { img: docker, txt: "Docker" },
  { img: firebase, txt: "Firebase" },
  { img: mongodb, txt: "Mongo DB" },
];

export default function Aboutme() {
  return (
    <article className={styles.aboutme}>
      <div className={styles.skillSet}>
        <h2 className={styles.skillTitle}>What I Know</h2>
        <div className={styles.iconGroup}>
          <hr />
          <div className={styles.iconRow}>
            {logosOne.map((logo, index) => {
              return (
                <div className={styles.logoItem} key={index}>
                  <div className={styles.iconSquare}>
                    <Image src={logo.img} />
                  </div>
                  <p className={styles.logoCap}>{logo.txt} </p>
                </div>
              );
            })}
          </div>
          <div className={styles.iconRow}>
            {logosTwo.map((logo, index) => {
              return (
                <div className={styles.logoItem} key={index}>
                  <div className={styles.iconSquare}>
                    <Image src={logo.img} />
                  </div>
                  <p className={styles.logoCap}>{logo.txt} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.nameIntro}>
        <p className={styles.headingStr}>Hi, I am</p>
        <h1 className={styles.headingMain}>CHAN ALSTON</h1>
      </div>
    </article>
  );
}
