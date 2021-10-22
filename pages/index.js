import React from "react";
import Newz from "../components/Newz";
import NewsService from "../service/NewsService";

export default function index({ news, searchNews, isSearch }) {

  const showNews = isSearch != "" && searchNews && searchNews.length > 0 ? searchNews : news;
  return <Newz news={showNews} />;
}

export async function getStaticProps() {
  const response = await NewsService.GET_HEADLINES(1)
  return {
    props: {
      news: response.data ? response.data.articles : [],
    },
    revalidate: 10,
  };
}
