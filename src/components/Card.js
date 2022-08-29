import React from "react"
import { colorChangeStats } from "./ColorFunctions"
export default function Card ({ pokemon, loading, colors, colorsBG, colorsBG2 }) {
  return (
    <div className="wrapper">
      {loading && <div>
        <img className={pokemon[0].types.length === 2 ? `bg-gradient-to-r  ${colorsBG[`${pokemon[0].types[0].type.name}`]} ${colorsBG2[`${pokemon[0].types[1].type.name}`]} w-full object-cover object-center rounded shadow-md` : `${colors[`${pokemon[0].types[0].type.name}`]} w-full object-cover object-center rounded shadow-md`} src={pokemon[0].sprites.other["official-artwork"].front_default} alt=""/>
        <div>

          <div className="relative mt-[1rem]  ">
            <div className="bg-white p-6 rounded-lg shadow-lg bg-menu flex flex-col items-center mb-5">
              <div className="flex flex-col items-center">
                <div>
                  <h1 className="capitalize">{pokemon[0].id}. {pokemon[0].species.name}</h1>
                </div>
                <div className="flex flex-row capitalize">
                  {pokemon[0].types.map((value, index) => {
                    return (
                      <div key={index}
                        className={`${colors[`${value.type.name}`]} brightness-125 rounded shadow-md ml-1 mr-1`}>
                        <p className="ml-2 mr-2" > {value.type.name} </p>
                      </div>
                    )
                  })}
                </div>
                <div className="abilities capitalize">
                  {pokemon[0].abilities.map((value, index) => {
                    return (<span key={index}>{value.ability.name} </span>)
                  })}
                </div>
                <div className="flex flex-col items-center">
                  {pokemon[0].stats.map((value, index) => {
                    return (<h3 className={`${colorChangeStats(value.stat.name)} drop-shadow-sm capitalize`} key={index}>{value.stat.name} : {value.base_stat}</h3>)
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
}
