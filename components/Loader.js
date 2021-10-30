import React from "react";
import Lottie from "react-lottie";
import LoaderAnimation from "../assets/Loader.json";

export default function Loader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex h-3/5	 w-full justify-center content-center">
      <Lottie

        options={defaultOptions} height={60} width={60} />
    </div>
  );
}
