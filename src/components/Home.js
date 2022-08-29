import React, { useEffect, useState } from "react"
import { colorObjectGenerator, colorChangeBG, colorChangeBG2 } from "./ColorFunctions"
import axios from "axios"
import Card from "./Card"
import Index from "./Index"
import SearchBar from "./SearchBar"

export default function Home () {
  const [pokeData, setPokeData] = useState([])
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(false)
  const [showPoke, setShowPoke] = useState([])
  const url = "https://pokeapi.co/api/v2/pokemon?limit=898&offset=0"
  const [colors, setColors] = useState({})
  const [colorsBG, setColorsBG] = useState({})
  const [colorsBG2, setColorsBG2] = useState({})
  const [query, setQuery] = useState("")
  const [filterParam, setFilterParam] = useState(null)

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
    console.log("value", value)
    if (loading2 === true && value === showPoke[0]) {
      setLoading2(false)
      console.log("loading:", loading)
    } else {
      setLoading2(true)
      console.log("loading:", loading)
    }
  }
  useEffect(() => {
    pokeFun()
  }, [])
  useEffect(() => {
    setColors(colorObjectGenerator(pokeData))
    setColorsBG(colorChangeBG(pokeData))
    setColorsBG2(colorChangeBG2(pokeData))
  }, [pokeData])
  console.log("this is the filterParam:", filterParam)
  return (
    <>
      <SearchBar changeQuery={setQuery} query={query} filterParam={filterParam} setFilterParam={setFilterParam}/>
      <div className="h-screen flex">
        <div className="ml-[.5rem] flex-1 flex overflow-hidden ">
          <div className="flex-1 overflow-y-scroll">
            <Index query={query} filterParam={filterParam} setFilterParam={setFilterParam} changeQuery={setQuery} pokemon={pokeData} loading={loading} showPoke={showPokemon} colors={colors} colorsBG={colorsBG} colorsBG2={colorsBG2}/>
          </div>
        </div>
        <div className=" mr-2 mt-2 sticky top-0 left-0 right-0 overflow-hidden">
          { loading2 ? <Card pokemon={showPoke} loading={loading2} colors={colors} colorsBG={colorsBG} colorsBG2={colorsBG2}/> : null}
        </div>
      </div>
    </>
  )
}
