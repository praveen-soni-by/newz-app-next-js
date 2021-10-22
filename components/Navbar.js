import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

export default function Navbar() {
    return (
        <nav className="px-6 py-2 bg-white shadow-md md:flex ">
        <div className="flex justify-between items-center">
          <div className="text-3xl text-gray-800 font-bold hover:text-gray-800">
            <a href="#">Newz Hub</a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="block text-gray-900 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full pb-2 md:flex md:items-center md:justify-between md:pb-0">
          <div className="flex flex-col px-2 md:flex-row">
            <a
              href="#"
              className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
            >
              Headlines
            </a>
            <a
              href="#"
              className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
            >
              Sports
            </a>
            <a
              href="#"
              className="py-2 px-2 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium md:mx-2"
            >
              Worldwide
            </a>
          </div>
          <div className=" flex item-center">
            <div className="bg-white   flex  justify-center rounded-md shadow md:w-96 sm:w-full xxm:w-full ">
              <span className="w-12 h-12 flex items-center justify-center">
                <FontAwesomeIcon
                  color="primary"
                  icon={faSearch}
                ></FontAwesomeIcon>
              </span>
              <input
                className=" rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </nav>
    )
}
