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
    <section>
      <h1> Random Quotes </h1>
      <blockquote>
        {data.data[count].text}
        <address>
          <a rel="author">{data.data[count].author} </a>
        </address>
      </blockquote>
      <Image src="/CarbonQuotesBig.png" width="828px" height="572px" />
      <button onClick={randomQuote}>Random </button>
    </section>
  );
}
