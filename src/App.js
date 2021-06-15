import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Components/Search'
import Footer from './Components/Footer'

function App() {
  const [Ip, setIp] = useState({})
  useEffect(() => {
    const fetchIP = async () => {
      const { data } = await axios.get('https://ipapi.co/json/')
      setIp(data)
    }
    fetchIP()
  }, [])

  //Search Users
  const searchUsers = async (ip) => {
    const res = await axios.get(`https://ipapi.co/${ip}/json/`)
    setIp(res.data)
  }

  return (
    <Router>
      <main className="overflow-hidden">
        <div className="relative bg-indigo-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover animate-pulse"
              src="https://images.unsplash.com/photo-1606778303077-3780ea8d5420?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt=""
            />
            <div
              className="absolute inset-0 bg-green-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {Ip.ip}
            </h1>
            <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
              “It’s great to spend time at a networking event with someone you
              know and like. But that’s not what you’re there for. Your goal is
              to expand your network by meeting new people.”
            </p>
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Search searchUsers={searchUsers} />
                <Card Ip={Ip} />
              </Fragment>
            )}
          />
        </Switch>
        <Footer />
      </main>
    </Router>
  )
}

export default App
