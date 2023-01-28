import React from "react"
import { Link } from "wouter"
function Hashtag({ info }) {
  return (
    <Link href={`/search/${info}`} className="text-gray-500">
      #{info}
    </Link>
  )
}

export default Hashtag
