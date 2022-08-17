import React from "react"
import { colorChange, colorChangeBG, colorChangeBG2 } from "./ColorFunctions.js"

export default function Card ({ pokemon, loading }) {
  return (
    <div className="wrapper">
      {loading && <div>
        <img className={pokemon[0].types.length > 1 ? `bg-gradient-to-r ${colorChangeBG(pokemon[0].types[0].type.name)} ${colorChangeBG2(pokemon[0].types[1].type.name)} w-full object-cover object-center rounded-lg shadow-md` : `${colorChange(pokemon[0].types[0].type.name)} w-full object-cover object-center rounded-lg shadow-md`} src={pokemon[0].sprites.other["official-artwork"].front_default} alt=""/>
        <div>

          <div className="relative px-4 -mt-20  ">
            <div className="bg-white p-6 rounded-lg shadow-lg bg-menu flex flex-col items-center mb-5">
              <div className="flex flex-col items-center">
                <div>
                  <h1>{pokemon[0].id}. {pokemon[0].species.name.toUpperCase()}</h1>
                </div>
                <div className="flex flex-row">
                  {pokemon[0].types.map((value, index) => {
                    return (
                      <div key={index}
                        className={`${colorChange(value.type.name)} brightness-125 rounded-xl shadow-md`}>
                        <p className="ml-1 mr-1" > {value.type.name} </p>
                      </div>
                    )
                  })}
                </div>
                <div className="abilities">
                  {pokemon[0].abilities.map((value, index) => {
                    return (<span key={index}>{value.ability.name} </span>)
                  })}
                </div>
                <div className="flex flex-col items-center">
                  {pokemon[0].stats.map((value, index) => {
                    return (<h3 key={index}>{value.stat.name} : {value.base_stat}</h3>)
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
