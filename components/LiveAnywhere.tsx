import React, { FC } from "react";
import MediumCard from "./MediumCard";

export type CardsType = {
  img: string;
  title: string;
};

type PropsType = {
  CardsData: [CardsType];
};
const LiveAnywhere: FC<PropsType> = ({ CardsData }) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 ">
        {CardsData.map((item, id) => (
          <MediumCard key={id} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default LiveAnywhere;
