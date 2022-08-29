import React from "react"
import pokeballIcon from "../assets/pokeballIcon.png"

export default function Header () {
  return (
    <>
      <div className="w-[100%] bg-[red] flex flex-row items-center justify-start last:justify-end">
        <img className="w-10 invert m-[10px]" src={pokeballIcon}/>
        <h1 className="text-[white] ml-[10px] mr-[10px]">PokéDex</h1>
        <h2 className="text-[white] ml-[10px] mr-[10px] text-sm">Who&#39;s that Pokémon?!</h2>
      </div>
    </>
  )
}
