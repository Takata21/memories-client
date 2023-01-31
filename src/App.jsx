import React from "react"
import { Route, Switch } from "wouter"
import Navbar from "./components/Navbar/Navbar"
import SignIn from "./pages/Auth/SignIn"
import Register from "./pages/Auth/Register"
import Home from "./pages/Home/Home"
import Post from "./pages/Post/Post"
import useLocation from "wouter/use-location"
function App() {
  const [location] = useLocation()
  console.log(location)
  return (
    <>
      {location !== "/auth/signin" ? (
        location !== "/auth/register" ? (
          <Navbar />
        ) : null
      ) : null}

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post/:id" component={Post} />
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/signin" component={SignIn} />
      </Switch>
    </>
  )
}

export default App
