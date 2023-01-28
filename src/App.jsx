import React from "react"
import { Route, Switch } from "wouter"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Post from "./pages/Post/Post"
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </>
  )
}

export default App
