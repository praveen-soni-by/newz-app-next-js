import React from "react";

export default function Card({ newz }) {
  return (
    <div className="w-full  h-90 sm:my-4 sm:px-4 sm:w-1/2 md:my-5 md:px-5 md:w-1/3 lg:my-3 lg:px-3 lg:w-1/4 xl:my-3 xl:px-3 xl:w-1/4">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={newz.urlToImage} alt="images" />
        <div className="px-6 py-4">
          <div className="font-semibold text-xs mb-2 font-sans	text-base">
            {" "}
            {newz.title}
          </div>
          <p className="text-gray-700 text-base line-clamp-3 font-sans	">
            {newz.description}
          </p>
        </div>

        <div className="flex items-center justify-center pt-4 pb-2">
          <a
            href={newz.url}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
