import React from "react"
import Card from "./Card"
import Index from "./Index"
import SearchBar from "./SearchBar"

export default function Home ({ setQuery, query, filterParam, setFilterParam, pokeData, loading, showPokemon, colors, colorsBG, colorsBG2, showPoke, loading2 }) {
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
          { loading2 ? <Card pokemon2={showPoke} loading2={loading2} colors={colors} colorsBG={colorsBG} colorsBG2={colorsBG2}/> : null}
        </div>
      </div>
    </>
  )
}
