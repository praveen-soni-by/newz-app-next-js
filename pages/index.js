import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function index({ news }) {
  return (
    <div>
      <Navbar />

      <div className="flex flex-wrap -mx-1 py-10 px-10 overflow-hidden sm:-mx-2 md:-mx-1 lg:-mx-3 xl:-mx-2">
        {news.map((newz, index) => (
          <Card newz={newz} key={index}/>
        ))}
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
