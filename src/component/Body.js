import React from "react";
import SideMenu from "./SideMenu";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-flow-col h-full">
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Body;
