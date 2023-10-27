import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const bList = [
    "All",
    "Music",
    "Movie",
    "Story",
    "Trending",
    "shorts",
    "Cricket",
    "Cooking",
    "Live",
    "Soccer",
    "Gaming",
  ];
  return (
    <div className="mx-2 my-2 flex">
      {bList.map((b, index) => {
        return <Button key={index} button={b} />;
      })}
    </div>
  );
};

export default ButtonList;
