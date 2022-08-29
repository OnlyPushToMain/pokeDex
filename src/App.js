import React from "react"
import Home from "./components/Home"
import "./App.css"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import WtpGame from "./components/WtpGame"

export default function App () {
  return (
    <>
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/wtp" element={<WtpGame/>}/>
      </Routes>
    </>
  )
}
