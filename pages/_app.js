import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import React, { useState, useCallback } from "react";
import _debounce from "lodash/debounce";
import Router from "next/router";
import { useRouter } from 'next/router';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import Navbar from "../components/Navbar"
import Loader from "../components/Loader";
import NewsService from "../service/NewsService";
import { withHeadTitle } from "../components/hoc/withHeadTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  const [value, setValue] = useState("");
  const [searchNews, setSearchNewz] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const debounceFn = useCallback(_debounce(handleDebounceFn, 500), []);
  const router = useRouter();

  const srcollRef = React.useRef();

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
    <div className="mx-auto overflow-x-hidden" ref={srcollRef}>
      <Navbar search={handleChange} value={value} clearSearch={() => setValue("")} />

      {isLoading ? <Loader />
        : <Component {...pageProps} isLoading={isLoading} searchNews={searchNews} isSearch={value} />}

      <div className="flex justify-end content-center ">
        <button className="bg-blue-500
          focus-within:  mb-10  mr-5
        hover:bg-blue-500 text-white font-bold py-2 px-2 "
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }} >

          <FontAwesomeIcon
            color="primary"
            icon={faArrowUp}
          ></FontAwesomeIcon>
        </button> </div>
    </div>
  )
}


export default withHeadTitle(MyApp, "Home")