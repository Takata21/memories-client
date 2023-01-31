import React from "react"
import { Link } from "wouter"
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { IoMdTrash } from "react-icons/io"
import { BsThreeDots } from "react-icons/bs"
function Card() {
  const like = true
  return (
    <article className="flex flex-col shadow-2xl w-[350px] md:w-[300px] rounded-xl overflow-hidden ">
      <Link href="/post/2" className="group">
        <div className="relative ">
          <img
            className="aspect-[1.5]"
            src="https://images.pexels.com/photos/1055068/pexels-photo-1055068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width="100%"
            height="200px"
          />
          <div className="absolute top-0 flex items-start justify-between invisible w-full h-full p-5 text-white bg-black opacity-50 group-hover:visible">
            <div>
              <h3 className="text-xl font-semibold">Fallin21</h3>
              <span className="font-medium">21 hours ago</span>
            </div>
            <button>
              <BsThreeDots size={25} />
            </button>
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-wrap gap-2 my-3">
            <span className="text-xs text-gray-700">#croatia</span>
            <span className="text-xs text-gray-700">#castle</span>
            <span className="text-xs text-gray-700">#sunset</span>
            <span className="text-xs text-gray-700">#beautiful</span>
          </div>
          <h2 className="text-xl font-semibold">
            Gray Concrete Triumphal Arch
          </h2>
          <p className="text-sm font-medium text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            natus tempora? Voluptates, exercitationem! Unde culpa nostrum atque
            repellendus animi
          </p>
        </div>
      </Link>

      <div className="px-4">
        <div className="flex items-center justify-between gap-1 my-3 ">
          <button className="flex items-center gap-1 hover:text-gray-600">
            {like ? <FcLike /> : <FcLikePlaceholder />}
            <span>2 Like</span>
          </button>
          <button className="flex items-center gap-1 hover:text-gray-600">
            <IoMdTrash />
            Delete
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
