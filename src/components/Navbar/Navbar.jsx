import React from "react"
import { Link } from "wouter"

function Navbar() {
  return (
    <div className="m-4 flex items-center justify-between p-2 shadow-lg h-20">
      <Link href="/">
        <a>
          <img src="/Logo.png" alt="logo" width={60} />
        </a>
      </Link>
      <div className="pbr">
        <form action="">
          <input type="text" className="h-full" />
          <button type="submit"></button>
        </form>
      </div>
      <Link href="/auth/login">
        <a className=" bg-blue-700 p-3 rounded text-white hover:bg-blue-600 font-semibold capitalize">
          {" "}
          Log in
        </a>
      </Link>
    </div>
  )
}

export default Navbar
