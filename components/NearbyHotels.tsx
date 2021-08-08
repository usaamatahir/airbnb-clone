import React, { FC } from "react";
import SmallCard from "./SmallCard";

export type DataType = {
  img: string;
  location: string;
  distance: string;
};

type PropsType = {
  exploreData: [DataType];
};
const NearbyHotels: FC<PropsType | null> = ({ exploreData }) => {
  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData.map((item, id) => (
          <SmallCard
            key={id}
            img={item.img}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </div>
    </section>
  );
};

export default NearbyHotels;
