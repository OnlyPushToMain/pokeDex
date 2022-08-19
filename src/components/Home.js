import React, { useEffect, useState } from "react"
import { colorObjectGenerator, colorObjectGeneratorGradient, colorObjectGeneratorStats } from "./ColorFunctions"
import axios from "axios"
import Card from "./Card"
import Index from "./Index"

export default function Home () {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)
  const [showPoke, setShowPoke] = useState([])
  const url = "https://pokeapi.co/api/v2/pokemon/?limit898"
  const [colors, setColors] = useState({})
  const [stats, setStats] = useState({})
  const [gradient, setGradient] = useState({})
  // const colors = {
  //   grass: "bg-grass",
  //   poison: "bg-poison",
  //   fire: "bg-fire",
  //   flying: "bg-flying",
  //   water: "bg-water",
  //   bug: "bg-bug",
  //   normal: "bg-normal",
  //   electric: "bg-electric",
  //   ground: "bg-ground",
  //   fairy: "bg-fairy",
  //   fighting: "bg-fighting",
  //   psychic: "bg-psychic",
  //   rock: "bg-rock",
  //   steel: "bg-steel",
  //   ice: "bg-ice",
  //   ghost: "bg-ghost",
  //   dragon: "bg-dragon"
  // }

  const pokeFun = async () => {
    setLoading(true)
    const res = await axios.get(url)
    getPokemon(res.data.results)
    setLoading(false)
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
    setShowPoke([value])
    console.log("should be 1:", showPoke)
    setLoading2(true)
  }
  useEffect(() => {
    pokeFun()
  }, [])
  useEffect(() => {
    setColors(colorObjectGenerator(pokeData))
    setStats(colorObjectGeneratorStats(pokeData))
    setGradient(colorObjectGeneratorGradient(pokeData))
  }, [pokeData])

  return (
    <>
      <div className="h-screen flex">
        <div className="ml-10 flex-1 flex overflow-hidden ">
          <div className="flex-1 overflow-y-scroll">
            <Index pokemon={pokeData} loading={loading} showPoke={showPokemon} gradient={gradient} colors={colors}/>
          </div>
        </div>
        <div className=" mr-2 mt-2 sticky top-0 left-0 right-0 overflow-hidden">
          <Card pokemon={showPoke} loading={loading2} colors={colors} gradient={gradient} stats={stats}/>
        </div>
      </div>
    </>
  )
}
