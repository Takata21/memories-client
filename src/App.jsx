import React from "react"
import { Route, Switch } from "wouter"
import Navbar from "./components/Navbar/Navbar"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Home from "./pages/Home/Home"
import Post from "./pages/Post/Post"
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/login" component={Login} />
      </Switch>
    </>
  )
}

export default App
