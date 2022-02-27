import styles from "../styles/portfolio.module.css";

export default function Portfolio() {
  return (
    <article className={styles.portfolio}>
      <div className={styles.container}>
        <p className={styles.para}>
          {" "}
          I am from Penang, Malaysia. I am 18 years old this year and is
          currently studying business studies in high school. I picked up
          programming when I was 14 and stopped later, then get back to learn
          Web Development when Covid-19 lockdown started in Malaysia.
        </p>
        <p className={styles.para}>
          {" "}
          I have been learning programming for a year as of this writing, and I
          have no intend to stop in the near future. Although self taught
          programming is not easy, and the process is quite painful, the rewards
          at the end after the painful process is worthwhile. This makes me to
          continue learning and improving my programming skills.
        </p>
        <p className={styles.para}>
          {" "}
          Aside from programming, I also have interest in video games and first
          aids. I am a trained first responder, and I spend my weekends to join
          duty when there is an events. At last, you can reach out to me using
          the link in the footer
        </p>
      </div>
    </article>
  );
}
