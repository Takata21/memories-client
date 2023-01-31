import React from "react"
import Card from "../Card/Card"

function CardsContainer() {
  return (
    <section className="flex flex-wrap justify-center flex-1 gap-4 my-5 md:my-0">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default CardsContainer
