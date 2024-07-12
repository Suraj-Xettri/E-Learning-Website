import React from "react";
import Card from "./card";

const CardContainer = () => {
  const cards = [
    {
      title: "Hello",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Hello",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    ,
    {
      title: "Hello",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Hello",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Hello",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Hello",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

export default CardContainer;
