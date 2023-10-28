import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Most_Like_Video } from "./utils/constant";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    fetchMostLikeVideo();
  }, []);
  const fetchMostLikeVideo = async () => {
    const data = await fetch(Most_Like_Video);
    const json = await data.json();
    console.log(json);
  };

  return (
    <div className="">
      <iframe
        className="m-2 p-2 rounded-lg"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
