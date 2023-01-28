import React from "react"
import { Link } from "wouter"

function Navbar() {
  return (
    <div className="flex items-center justify-between h-20 p-2 m-4 shadow-lg">
      <Link href="/">
        <a>
          <img src="/Logo.png" alt="logo" width={60} />
        </a>
      </Link>

      <Link href="/auth/login">
        <a className="p-3 font-semibold text-white capitalize bg-blue-700 rounded hover:bg-blue-600">
          Log in
        </a>
      </Link>
    </div>
  )
}

export default Navbar
