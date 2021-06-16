import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './Components/Search'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  const [Ip, setIp] = useState({})
  useEffect(() => {
    const fetchIP = async () => {
      const { data } = await axios.get('https://ipapi.co/json/')
      setIp(data)
    }
    fetchIP()
  }, [])

  //Search IP
  const searchIP = async (ip) => {
    const res = await axios.get(`https://ipapi.co/${ip}/json/`)
    setIp(res.data)
  }

  return (
    <Router>
      <main className="overflow-hidden">
        <Header Ip={Ip} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Search searchIP={searchIP} />
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
