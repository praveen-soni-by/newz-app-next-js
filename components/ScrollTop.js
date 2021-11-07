import React from 'react'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollTop() {
    return (
        <button
            title="Go to up"
            className="bg-blue-500
           mb-4 shadow-md   mr-1 rounded-full
          h-9 w-9
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
        </button>
    )
}
