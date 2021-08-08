import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import LiveAnywhere from "../components/LiveAnywhere";
import NearbyHotels from "../components/NearbyHotels";

export default function Home({ exploreData, CardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <NearbyHotels exploreData={exploreData} />
        <LiveAnywhere CardsData={CardsData} />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists Created by Airbnb"
          btnText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const promiseExploreData = await fetch("https://links.papareact.com/pyp");
  const exploreData = await promiseExploreData.json();

  const promiseCardsData = await fetch("https://links.papareact.com/zp1");
  const CardsData = await promiseCardsData.json();
  return {
    props: {
      exploreData,
      CardsData,
    },
  };
}
