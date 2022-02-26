import Image from "next/image";
import CarbonQuotes from "../public/CarbonQuotes.png";

import styles from "../styles/quotes.module.css";
import { useState } from "react";

export default function Quotes({ data }) {
  const [count, setCount] = useState(0);

  function randomQuote() {
    setCount(Math.floor(Math.random() * 1643));
  }

  // if (!data) return <div> loading... </div>;

  return (
    <section className={styles.quotes}>
      <div className={styles.codeImageContainer}>
        <Image
          className={styles.codeImage}
          src={CarbonQuotes}
          alt="Sample code of the random quote api"
          priority
        />
      </div>
      <div className={styles.quoteMainContainer}>
        <div className={styles.quoteContainerTitle}>
          <h1> Random Quotes </h1>
        </div>
        {!data ? (
          <div className={styles.quoteContainerContent}>
            <p className={styles.loadingContent}>Loading...</p>
          </div>
        ) : (
          <div className={styles.quoteContainerContent}>
            {data[count].text}
            <br />
            <br />
            <address>
              by{" "}
              <a rel="author">
                <strong>
                  <i>
                    {data[count].author ? data[count].author : "author unknown"}
                  </i>
                </strong>{" "}
              </a>
            </address>
            <button className={styles.randomBtn} onClick={randomQuote}>
              Random{" "}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
