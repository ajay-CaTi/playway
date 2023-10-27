import React from "react";
import hamburger from "./images/hamburger.png";
import menu from "./images/menu.png";
import userIcon from "./images/userIcon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

const Head = () => {
  const dispath = useDispatch();

  const toggleMenuHandler = () => {
    dispath(toggleMenu());
  };

  return (
    <div>
      <nav className="grid grid-flow-col bg-slate-100 rounded-lg m-1 p-2 items-center shadow-lg">
        <div className="flex col-span-1">
          <img
            onClick={() => toggleMenuHandler()}
            className="w-7 m-1 cursor-pointer"
            src={hamburger}
            alt="hamburger"
          />
          <a href="/">
            <img className="w-28 cursor-pointer" src={menu} alt="menu" />
          </a>
        </div>
        <form className="col-span-10 text-center ">
          <input
            className="w-7/12 rounded-l-full border border-slate-400 px-2 py-1"
            type="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="rounded-r-full border border-l-0 border-slate-400 px-4 py-1"
          >
            &#128269;
          </button>
        </form>
        <div className="col-span-1 ">
          <img
            className="w-6 h-6 cursor-pointer"
            src={userIcon}
            alt="userIcon"
          />
        </div>
      </nav>
    </div>
  );
};

export default Head;
