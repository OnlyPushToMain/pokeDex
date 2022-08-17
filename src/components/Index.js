import React from "react"
import { colorChange, colorChangeBG, colorChangeBG2 } from "./ColorFunctions.js"

export default function Index ({ pokemon, loading, showPoke }) {
  return (

    <div>
      { loading
        ? <h1>Loading...</h1>
        : pokemon.map((value, index) => {
          return (
            <div
              onClick={(e => showPoke(value))}
              key={index}
              className={value.types.length > 1 ? `bg-gradient-to-r ${colorChangeBG(value.types[0].type.name)} ${colorChangeBG2(value.types[1].type.name)} p-8 rounded-lg shadow-md w-auto mt-6` : `${colorChange(value.types[0].type.name)} p-8 rounded-lg shadow-md w-auto mt-6`}>
              <span
                className="text-2xl font-bold mb-2 text-gray-800 flex flex-row ml-0 items-center "
              >
                <p className="mr-10">{value.id}</p>
                <img
                  className="max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px]"
                  src={value.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={value.species.name}/>
                <p className="ml-5">{value.species.name.toUpperCase()}</p>
                {value.types.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={`ml-5 ${colorChange(value.type.name)} brightness-125 rounded-xl shadow-md`}>
                      <p className="ml-1 mr-1" > {value.type.name} </p>
                    </div>)
                })}
              </span>
            </div>
          )
        })}
    </div>

  )
}
