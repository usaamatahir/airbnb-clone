import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import NearbyHotels from "../components/NearbyHotels";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <NearbyHotels />
      </main>

      {/*  */}
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
