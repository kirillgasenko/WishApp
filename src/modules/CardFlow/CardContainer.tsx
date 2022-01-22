import React from "react";
import { WishCard } from "./components/WishCard/WishCard";
import wishTest from "../../assets/wishTest.svg";
import { AddCard } from "./components/WishCard/AddCard";

export const CardContainer = () => {
  return (
    <div className="card-container">
      <AddCard />
      <WishCard costLevel={1} name="default image" />
      <WishCard
        imgSrc={wishTest}
        costLevel={3}
        name="with image and loooooooooooong text"
      />
    </div>
  );
};
