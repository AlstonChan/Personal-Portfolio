export default function HeadCom() {
  return (
    <>
      {/* <!-- Primary Meta Tags --> */}
      <title>Alston&apos;s Personal Portfolio</title>
      <meta name="title" content="Alston's Personal Portfolio" />
      <meta
        name="description"
        content="I make this personal portfolio for fun"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.chanalston.com/" />
      <meta property="og:title" content="Alston's Personal Portfolio" />
      <meta
        property="og:description"
        content="I make this personal portfolio for fun"
      />
      <meta property="og:image" content="/meta tags img.png" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.chanalston.com/" />
      <meta property="twitter:title" content="Alston's Personal Portfolio" />
      <meta
        property="twitter:description"
        content="I make this personal portfolio for fun"
      />
      <meta property="twitter:image" content="/meta tags img.png" />

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
