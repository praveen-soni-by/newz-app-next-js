import React from "react";
import Link from 'next/link'
import { useRouter } from 'next/router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faTimes, faSearch, faBars } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Navbar(props) {
  const router = useRouter();
  const [isNavExpanded, setNavExpanded] = React.useState();
  return (
    <nav className="px-6 py-2 bg-white shadow-md md:flex  ">
      <div className="flex justify-between items-center ">
        <div className="text-3xl text-gray-800 font-bold hover:text-gray-800">
          <a href="#">Newz Hub</a>
        </div>
        <div className="md:hidden">
          <button id="hamburger"
            onClick={() => setNavExpanded(!isNavExpanded)}
            className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarId"
            aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon
              color="primary"
              icon={faBars}
            ></FontAwesomeIcon>

          </button>
        </div>
      </div>
      <div id="navbarId" className=
        {`${isNavExpanded ? 'show ' : ' hidden'}  transition ease-out duration-700 w-full pb-2 md:flex md:items-center md:justify-between md:pb-0`}>

        <ul className="flex flex-col px-2 md:flex-row">
          <li className={`${router.asPath === '/' ? ' bg-gray-100  ' : ''}  xx300:mt-4 py-2 px-2 text-gray-800   rounded hover:bg-gray-900 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2 `}>
            <Link
              href="/">Home</Link>
          </li>
          <li className={`${router.asPath === '/entertainment' ? '  bg-gray-100  ' : ''}  xx300:mt-4 text-gray-800  py-2 px-2  rounded hover:bg-gray-900 hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2 `}>

            <Link

              href="/entertainment">Entertainment</Link>
          </li>
        </ul>
        {router.asPath == '/' ?
          <div className=" flex item-center ">
            <div className="bg-white  xx300:mt-6 flex  justify-center rounded-md shadow md:w-96 sm:w-full xxm:w-full ">
              <span className="w-12 h-12 flex items-center justify-center">
                <FontAwesomeIcon
                  color="primary"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </span>
              <input
                className=" rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                value={props.value}
                type="text"
                onChange={props.search}
                placeholder="Search"
              />
              {props.value &&
                <button onClick={props.clearSearch} className="w-12 h-12 flex items-center justify-center">
                  <FontAwesomeIcon
                    color="primary"
                    icon={faTimes}
                  ></FontAwesomeIcon>
                </button>
              }
            </div>
          </div> : ""}
      </div>

    </nav>
  );
}
