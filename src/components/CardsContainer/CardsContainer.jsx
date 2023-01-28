import React from "react"
import Card from "../Card/Card"

function CardsContainer() {
  return (
    <div className="flex flex-wrap gap-4 m-auto w-full justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardsContainer
