import React from "react"
import { Link } from "wouter"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
const like = false
function AlsoCard() {
  return (
    <Link href="/post/14" className="p-1 shadow-sm rounded-sm">
      <h5 className="font-medium my-2">Gray Concrete Triumphal Arch</h5>
      <small className="font-semibold text-gray-500 my-2">Fallin21</small>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
        natus.
      </p>
      <button className="flex items-center gap-1 hover:text-gray-600 my-2">
        {like ? <FcLike /> : <FcLikePlaceholder />}
        <span>2 Like</span>
      </button>
      <img
        className="aspect-[1.5]"
        src="https://images.pexels.com/photos/1055068/pexels-photo-1055068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="70%"
        height="200px"
      />
    </Link>
  )
}

export default AlsoCard
