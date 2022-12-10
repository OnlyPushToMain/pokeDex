import React from "react"
import { Link } from "react-router-dom"
import pokeballIcon from "../assets/pokeballIcon.png"

export default function Header () {
  return (
    <>
      <div className="w-[100%] bg-[red] flex flex-row items-center justify-start last:justify-end">
        <Link to="/">
          <img className="w-10 invert m-[10px]" src={pokeballIcon}/>
        </Link>
        <Link to="/index">
          <h1 className="text-[white] ml-[10px] mr-[10px]">PokéDex</h1>
        </Link>
        <Link to="/wtp">
          <h2 className="text-[white] ml-[10px] mr-[10px] text-sm">Who&#39;s that Pokémon?!</h2>
        </Link>
      </div>
    </>
  )
}
