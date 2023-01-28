import React from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
export default function Search() {
  return (
    <section className="w-[350px] h-max ">
      <form className="p-3 bg-white rounded-sm shadow-lg">
        <input
          className="block w-full p-2 my-3 border border-gray-300 rounded-sm outline-none h-11 placeholder:text-gray-400"
          type="text"
          name="memories"
          id="memories"
          placeholder="Search Memories"
        />
        <input
          className="block w-full p-2 my-3 border border-gray-300 rounded-sm outline-none h-11 placeholder:text-gray-400"
          type="text"
          name="tag"
          id="tag"
          placeholder="Search Tags"
        />
        <button className="w-full text-white capitalize bg-blue-700 rounded h-11 hover:bg-blue-600">
          search
        </button>
      </form>
      <p className="p-3 my-4 text-center bg-white rounded-sm shadow-lg h-max">
        Please Sign In to create your own memories and like other&#39;s
        memories.
      </p>
      <div className="relative flex p-3 rounded-sm shadow-lg justify-evenly">
        <button className="flex items-center justify-center mx-1 text-lg w-7 h-7 hover:scale-150">
          <MdKeyboardArrowLeft size={20} />
        </button>
        <div className="flex w-full justify-evenly ">
          <button className="flex items-center justify-center mx-1 text-lg border border-gray-400 rounded-full w-7 h-7 hover:bg-gray-300">
            1
          </button>
          <button className="flex items-center justify-center mx-1 text-lg border border-gray-400 rounded-full w-7 h-7 hover:bg-gray-300">
            2
          </button>
          <button className="flex items-center justify-center mx-1 text-lg border border-gray-400 rounded-full w-7 h-7 hover:bg-gray-300">
            3
          </button>
        </div>
        <button className="flex items-center justify-center mx-1 text-lg w-7 h-7 hover:scale-150">
          <MdKeyboardArrowRight size={20} />
        </button>
      </div>
    </section>
  )
}
