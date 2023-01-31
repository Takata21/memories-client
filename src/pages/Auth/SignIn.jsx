import React from "react"
import { Link } from "wouter"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
export default function signIn() {
  return (
    <section>
      <div>
        <Link href="/" className="flex items-center gap-1 mt-3 ml-2">
          <HiOutlineArrowNarrowLeft />
          <a className="">back to memories</a>
        </Link>
        <div className="w-[350px] m-auto mt-28">
          <Link href="/" className="pbr">
            <a className="block m-auto mb-5 w-[100px]">
              <img src="/Logo.png" alt="logo" width={100} />
            </a>
          </Link>
          <form className="flex flex-col rounded-sm">
            <div className="p-4 bg-white rounded-sm shadow-lg">
              <input
                className="block w-full p-2 my-3 border border-gray-300 rounded-sm outline-none h-11 placeholder:text-gray-400"
                type="text"
                name="user"
                id="user"
                placeholder="Username or Email"
              />
              <input
                className="block w-full p-2 my-3 border border-gray-300 rounded-sm outline-none h-11 placeholder:text-gray-400"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-end gap-5 mt-4">
              <Link href="/auth/register">need an account?</Link>
              <button className="px-4 py-2 text-white capitalize bg-blue-700 rounded w-23 hover:bg-blue-600">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
