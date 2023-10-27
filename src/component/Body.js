import React from "react";
import SideMenu from "./SideMenu";
import MainBlock from "./MainBlock";

const Body = () => {
  return (
    <div className="grid grid-flow-col h-full">
      <SideMenu />
      <MainBlock />
    </div>
  );
};

export default Body;
