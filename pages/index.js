import Head from "next/head";
import axios from "axios";
import Quotes from "../components/quotes";
import Aboutme from "../components/aboutme";
import Footer from "../components/footer";
import HeadCom from "../components/head";

const url = "https://type.fit/api/quotes";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <HeadCom />
      </Head>
      <div className="backContainer">
        <div className="backDropDark">
          <Quotes data={data} />
          <Aboutme />
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(url);
  const data = res.data;

  return {
    props: { data },
  };
}
