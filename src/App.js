import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Home'
import Header from './Header'
import Checkout from './Checkout'
import Login from './Login'

function App() {
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
