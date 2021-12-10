import useSWR from "swr";
import Image from "next/image";
import axios from "axios";

import styles from "../styles/quotes.module.css";
import { useState } from "react";

const fetch = (url) => axios.get(url);

export default function Quotes() {
  const { data, err } = useSWR("https://type.fit/api/quotes", fetch);
  const [count, setCount] = useState(0);

  function randomQuote() {
    setCount(Math.floor(Math.random() * 1643));
  }

  if (err) return <div> failed to load </div>;
  if (!data) return <div> loading... </div>;

  return (
    <section className={styles.quotes}>
      <div className={styles.codeImageContainer}>
        <Image
          className={styles.codeImage}
          src="/CarbonQuotesBig.png"
          width="828px"
          height="572px"
          alt="Sample code of the random quote api"
        />
      </div>
      <div className={styles.quoteMainContainer}>
        <div className={styles.quoteContainerTitle}>
          <h1> Random Quotes </h1>
        </div>
        <div className={styles.quoteContainerContent}>
          {data.data[count].text}
          <br />
          <br />
          <address>
            by{" "}
            <a rel="author">
              <strong>
                <i>
                  {data.data[count].author
                    ? data.data[count].author
                    : "author unknown"}
                </i>
              </strong>{" "}
            </a>
          </address>
          <button className={styles.randomBtn} onClick={randomQuote}>
            Random{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
