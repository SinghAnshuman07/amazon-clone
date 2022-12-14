import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home'
import Header from './Header'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";

function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    //only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)

      if(authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <React.StrictMode>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={[ <Header />,<Home />]} exact />
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          <Route path="/login" element={[<Login />]} />
        </Routes>
      </div>
    </React.StrictMode>
    </Router>
  );
}

export default App;
