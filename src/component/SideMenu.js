import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className="col-span-2 bg-blue-100 ">
      <ul className=" pl-5 pt-2 ">
        <li className="py-1">
          <strong>
            <Link to={"/"}>Home</Link>
          </strong>
        </li>
        <li className="py-1">Shorts</li>
        <li className="py-1">Subscriptions</li>
        <hr />
        <li className="py-1">Library</li>
        <li className="py-1">History</li>
        <li className="py-1">Your videos</li>
        <li className="py-1">Watch later</li>
        <li className="py-1">Liked videos</li>
        <li className=" py-2">
          <strong>Subscriptions</strong>
        </li>

        <li className="py-1">Trending</li>
        <li className="py-1">Shopping</li>
        <li className="py-1">Music</li>
        <li className="pt-1">Movies</li>
        <li className="py-1">Trending</li>
        <li className="py-1">Shopping</li>
        {/* <li className="py-1">Music</li>
        <li className="pt-1">Movies</li>
        <li className="py-1">Shopping</li>
        <li className="py-1">Music</li> */}
        <li className="pt-1 pb-3">Movies</li>
      </ul>
    </div>
  );
};

export default SideMenu;
