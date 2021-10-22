import React from "react";
import Link from 'next/link'

export default function index({users}) { 
     return (
      <div>
   
        <header>
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
        </header>
        <ul>
      {users.map((user,index) => (
        <>
        <li key={index}>{user.name}</li>
        <li key={index}>{user.age}</li>
        </>
      ))}
    </ul>
      </div>
    )

}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.

  await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data));
  return {
    props: {
      users,
    },
  }
}
