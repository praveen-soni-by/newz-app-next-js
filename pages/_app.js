import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useCallback } from "react";
import _debounce from "lodash/debounce";
import Router from "next/router";
import { useRouter } from 'next/router';

import Navbar from "../components/Navbar"
import Loader from "../components/Loader";
import NewsService from "../service/NewsService";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

export default function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState("");
  const [searchNews, setSearchNewz] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);
  const router = useRouter();

  async function handleDebounceFn(inputValue) {
    setLoading(true);
    if ("" != inputValue) {
      const res = await NewsService.search(inputValue)
      if (res?.data?.articles?.length > 0) {
        setSearchNewz(res.data.articles);
      } else {
        setSearchNewz([]);
      }
      setLoading(false);
    }
    else {
      setSearchNewz([]);
      setLoading(false);
    }
  }

  function handleChange(event) {
    setValue(event.target.value);
    debounceFn(event.target.value);
  }

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);


  React.useEffect(() => setValue(""), [router.asPath])

  return (
    <div className="mx-auto overflow-x-hidden">
      <Navbar search={handleChange} value={value} clearSearch={() => setValue("")} />
      {isLoading ? <Loader />
        : <Component {...pageProps} isLoading={isLoading} searchNews={searchNews} isSearch={value} />}
    </div>
  )
}
