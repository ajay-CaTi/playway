import React, { useEffect, useState } from "react";
import hamburger from "./images/hamburger.png";
import menu from "./images/menu.png";
import userIcon from "./images/userIcon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispath = useDispatch();

  useEffect(() => {
    console.log(searchQuery);

    let timer = setTimeout(() => {
      getSearchSuggestions();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
    setSuggestions(json[1]);
  };

  const toggleMenuHandler = () => {
    dispath(toggleMenu());
  };

  return (
    <div className="sticky top-0">
      <nav className="grid grid-flow-col bg-slate-100 rounded-lg m-1 p-2 items-center shadow-lg ">
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            type="submit"
            className="rounded-r-full border border-l-0 border-slate-400 px-4 py-1"
          >
            &#128269;
          </button>
          <div>
            <ul className="fixed bg-white w-96 mx-24 rounded-lg shadow-lg transition-all delay-75 ">
              {showSuggestions &&
                suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="p-1 text-left pl-2 hover:bg-gray-100 rounded-lg"
                  >
                    {s}
                    <hr />
                  </li>
                ))}
            </ul>
          </div>
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
