import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function index({ news }) {
  return (
    <div>
      {/* <header>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </header> */}

      <div className="bg-indigo-800 dark:bg-light_secondary rounded-lg py-5 px-5">
        <div className="grid grid-rows-2 gap-5">
          <div className="row-span-2">
            <h1 className="text-1xl md:text-2xl text-white mb-5">My posts</h1>
            <div className="grid grid-cols-3 px-10 gap-2">
              {news.map((newz, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <div className="max-w-lg mx-auto" key={index}>
                    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                      <a href="#">
                        <img
                        width={100}
                        height={100}
                          className="rounded"
                          src={newz.urlToImage}
                          alt="#"
                        />
                      </a>
                      <div className="p-5">
                        <a href="#">
                          <h5 className="text-gray-900 font-bold text-md tracking-tight mb-2">
                            {newz.title}
                          </h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3">
                          {newz.description}
                        </p>

                        <a
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                          href={newz.url}
                        >
                          Read more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`
  );
  const news = await res.json();

  return {
    props: {
      news: news ? news.articles : [],
    },
  };
}
