import React from "react"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Search from "../../components/Search/Search"

function Home() {
  return (
    <div className="flex max-w-[1300px] min-h-screen py-4 mx-6 ">
      <CardsContainer />
      <Search />
    </div>
  )
}

export default Home
