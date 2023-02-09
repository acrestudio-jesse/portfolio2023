"use client";

import Image from "next/image";
import placeHolder from "../../../public/grafstudy.jpg";
import { useState, useEffect } from "react";

type BgProps = {
  bgVideo: string;
  loadImg: string;
};

export default function Background({ bgVideo, loadImg }: BgProps) {
  const [vidLoaded, setVidLoaded] = useState(false);

  useEffect(() => setVidLoaded(true), [vidLoaded]);
  return (
    <div className="relative bg-cover">
      {!vidLoaded && (
        <Image
          className="h-screen w-screen"
          src={loadImg}
          width="1000"
          height="1000"
          alt="bgimg"
        ></Image>
      )}
      <video
        onLoad={() => setVidLoaded(true)}
        src={bgVideo}
        autoPlay
        loop
        muted
        className="-z-10 object-cover min-w-full h-screen"
      ></video>
    </div>
  );
}
