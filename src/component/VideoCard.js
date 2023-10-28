import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  if (info === undefined) {
    return null;
  }
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="shadow-lg p-1 m-1 border border-slate-300 cursor-pointer w-72">
      <img
        className="p-1 m-2 rounded-lg w-64"
        src={thumbnails.medium.url}
        alt={title}
      />
      <ul className="pl-3">
        <li className="font-bold">
          {title.length > 28 ? title.slice(0, 28) + "..." : title}
        </li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export const BorderVideoCard = ({ info }) => {
  return (
    <div className="border border-black">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
