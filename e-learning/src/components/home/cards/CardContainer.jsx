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
    <div className="flex w-full justify-center items-center">
      <div className="grid box-border grid-cols-1 sm:grid-cols-2 justify-center items-center lg:grid-cols-3 gap-16">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
