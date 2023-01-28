import React from "react"
import AlsoCard from "../../components/AlsoCard/AlsoCard"
import Comment from "../../components/Comment/Comment"
import { MdSend } from "react-icons/md"
import Hashtag from "../../components/Hashtag/Hashtag"
function Post() {
  return (
    <div>
      <div className="flex flex-col-reverse p-4 md:flex-row">
        <div className="">
          <h1 className="my-4 capitalize font-semibold text-lg md:text-2xl">
            eiffel tower
          </h1>
          <div className="flex gap-2 my-3 flex-wrap">
            <Hashtag info="sunset" />
          </div>
          <p className="text-gray-900 mr-9">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab beatae
            autem officiis porro debitis maiores voluptates minima quam magni
            veritatis voluptates minima quam magni veritatis.
          </p>
          <p className="font-semibold mt-2 capitalize">
            created by: <span>Fallin21</span>
          </p>
          <small className="text-gray-500">21 hours ago</small>
          <div className="my-4">
            <div className="overflow-x-auto">
              <h4 className="text-xl my-3 ">12 comments</h4>
              <div className="max-h-[200px]">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2 my-6">
                <p className="flex items-center justify-center bg-gray-400 font-semibold  w-10 h-10 rounded-full">
                  D
                </p>
                <form className="flex rounded overflow-hidden md:w-3/4">
                  <input
                    className="w-full h-8 p-2 bg-gray-100 focus: outline-none"
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add a comment"
                  />
                  <button
                    type="submit"
                    className="flex justify-center items-center bg-blue-700 w-8 h-8 rounded"
                  >
                    <MdSend color="white" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/2798008/pexels-photo-2798008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          width="100%"
          className="rounded-xl md: w-600px] md:h-[400px] ml-6"
          // height="200px"
          // className="aspect-[1.5] object-cover md:object-contain md:w-full md:min-h-max"
        />
      </div>
      <div className="p-4 mt-7">
        <h3 className="font-medium">You might also like:</h3>
        <div className="flex flex-col gap-5 justify-center md:flex-row ">
          <AlsoCard />
          <AlsoCard />
          <AlsoCard />
          <AlsoCard />
          <AlsoCard />
        </div>
      </div>
    </div>
  )
}

export default Post
