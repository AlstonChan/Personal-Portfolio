import Head from "next/head";
import Quotes from "../components/quotes";
import Aboutme from "../components/aboutme";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chan Alston</title>
        {/* <!-- Primary Meta Tags --> */}
        <title>Alston's Personal Portfolio</title>
        <meta name="title" content="Alston's Personal Portfolio" />
        <meta
          name="description"
          content="I make this personal portfolio for fun"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Alston's Personal Portfolio" />
        <meta
          property="og:description"
          content="I make this personal portfolio for fun"
        />
        <meta property="og:image" content="/meta tags img.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Alston's Personal Portfolio" />
        <meta
          property="twitter:description"
          content="I make this personal portfolio for fun"
        />
        <meta property="twitter:image" content="/meta tags img.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="True"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="backContainer">
        <Quotes />
        <Aboutme />
      </div>
      <Footer />
    </>
  );
}
