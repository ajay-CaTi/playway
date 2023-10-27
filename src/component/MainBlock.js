import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const MainBlock = () => {
  return (
    <div className="bg-slate-300 col-span-11">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainBlock;
