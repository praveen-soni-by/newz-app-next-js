import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/404.json";


export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height="100vh" width="100%" />;
}
