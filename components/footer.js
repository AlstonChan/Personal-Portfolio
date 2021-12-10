import styles from "../styles/footer.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [toggleModal, setToggleModal] = useState(false);

  if (toggleModal === true) {
    setTimeout(() => setToggleModal(false), 5000);
  }

  return (
    <footer className={styles.footer}>
      <div>
        <a
          href="https://www.facebook.com/profile.php?id=100008623459238"
          rel="noreferrer nofollow"
          target="_blank"
        >
          <Image
            src="/Facebook.svg"
            width="50px"
            height="50px"
            alt="Facebook Icon"
          />
        </a>
        <a
          href="https://github.com/AlstonChan"
          rel="noreferrer nofollow"
          target="_blank"
        >
          <Image
            src="/Github.svg"
            width="50px"
            height="50px"
            alt="Github Icon"
          />
        </a>
        <button
          onClick={() => {
            setToggleModal(true);

            navigator.clipboard.writeText("Firemonster391#1331");
          }}
        >
          <Image
            className={styles.disBtn}
            src="/Discord.svg"
            width="50px"
            height="50px"
            alt="Discord Icon"
          />
        </button>
        <div
          className={`${styles.modal} ${toggleModal ? styles.modalShow : ""}`}
        >
          <p>Copied !</p>
        </div>
      </div>
      <p>Copyright © 2021 chanalston</p>
    </footer>
  );
}
