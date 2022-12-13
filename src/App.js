import React, { useState, useEffect } from "react"
import Home from "./components/Home"
import "./App.css"
import Header from "./components/Header"
import { Routes, Route } from "react-router-dom"
import WtpGame from "./components/WtpGame"
import { colorObjectGenerator, colorChangeBG, colorChangeBG2 } from "./components/ColorFunctions"
import axios from "axios"
import HomePage from "./components/HomePage"

export default function App () {
  const [pokeData, setPokeData] = useState(() => [])
  const [loading, setLoading] = useState(() => true)
  const [loading2, setLoading2] = useState(() => false)
  const [showPoke, setShowPoke] = useState(() => [])
  const url = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0"
  const [colors, setColors] = useState(() => {})
  const [colorsBG, setColorsBG] = useState(() => {})
  const [colorsBG2, setColorsBG2] = useState(() => {})
  const [query, setQuery] = useState(() => "")
  const [filterParam, setFilterParam] = useState(() => null)
  const [randomPoke, setRandomPoke] = useState()
  const [counter, setCounter] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const pokeFun = async () => {
    setLoading(prevState => true)
    const res = await axios.get(url)
    getPokemon(res.data.results)
    setLoading(prevState => false)
  }
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url)
      setPokeData(state => {
        state = [...state, result.data]
        state.sort((a, b) => a.id > b.id ? 1 : -1)
        return state
      })
    })
    console.log("data:", pokeData)
  }
  const showPokemon = (value) => {
    setShowPoke(prevState => [value])
    console.log("value", value)
    if (loading2 === true && value === showPoke[0]) {
      setLoading2(false)
      console.log("loading:", loading)
    } else {
      setLoading2(true)
      console.log("loading:", loading)
    }
  }
  const randomPokemon = () => {
    if (pokeData) {
      const randomNum = Math.floor(Math.random() * pokeData.length)
      console.log("random number:", randomNum)
      setRandomPoke(randomNum)
    }
  }
  useEffect(() => {
    pokeFun()
  }, [url])
  useEffect(() => {
    setColors(colorObjectGenerator(pokeData))
    setColorsBG(colorChangeBG(pokeData))
    setColorsBG2(colorChangeBG2(pokeData))
    randomPokemon()
  }, [pokeData])
  console.log("this is the filterParam:", filterParam)
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage setQuery={ setQuery } query={ query } filterParam={ filterParam } setFilterParam={ setFilterParam } pokeData={ pokeData } loading={ loading } showPokemon={ showPokemon } colors={ colors } colorsBG={ colorsBG } colorsBG2={ colorsBG2 } showPoke={ showPoke } loading2={ loading2 }/>}/>
        <Route path="/index" element={<Home setQuery={ setQuery } query={ query } filterParam={ filterParam } setFilterParam={ setFilterParam } pokeData={ pokeData } loading={ loading } showPokemon={ showPokemon } colors={ colors } colorsBG={ colorsBG } colorsBG2={ colorsBG2 } showPoke={ showPoke } loading2={ loading2 }/>}/>
        <Route path="/wtp" element={<WtpGame randomPokemon={randomPokemon} counter={counter} setCounter={setCounter} highScore={highScore} setHighScore={setHighScore} pokeData={ pokeData } randomPoke={randomPoke} />}/>
      </Routes>
    </>
  )
}
