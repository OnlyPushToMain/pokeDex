import React from "react"
import { colorChangeStats } from "./ColorFunctions"
export default function Card ({ pokemon2, loading2, colors, colorsBG, colorsBG2 }) {
  return (
    <>
      { loading2
        ? <div className="flex flex-row xsm:flex-col">
          <img className={pokemon2[0].types.length === 2 ? `bg-gradient-to-r  ${colorsBG[`${pokemon2[0].types[0].type.name}`]} ${colorsBG2[`${pokemon2[0].types[1].type.name}`]} w-full object-cover object-center rounded shadow-md h-[250px] xsm:h-[400px]` : `${colors[`${pokemon2[0].types[0].type.name}`]} w-full object-cover object-center rounded shadow-md h-[250px] xsm:h-[400px]`} src={pokemon2[0].sprites.other["official-artwork"].front_default} alt=""/>
          <div>

            <div className="relative xsm:mt-[-2rem]  text-sm xsm:text-base">
              <div className="bg-white xsm:p-2 rounded-lg shadow-lg bg-menu flex flex-col align-start items-start xsm:items-center mb-[7.5rem] xsm:mb-10 xsm:mb-5">
                <div className="flex flex-col items-center">
                  <div>
                    <h1 className="capitalize">{pokemon2[0].id}. {pokemon2[0].species.name}</h1>
                  </div>
                  <div className="flex flex-row capitalize ">
                    {pokemon2[0].types.map((value, index) => {
                      return (
                        <div key={index}
                          className={`${colors[`${value.type.name}`]} brightness-125 rounded shadow-md ml-1 mr-1`}>
                          <p className="ml-2 mr-2" > {value.type.name} </p>
                        </div>
                      )
                    })}
                  </div>
                  <div className="abilities capitalize">
                    {pokemon2[0].abilities.map((value, index) => {
                      return (<span key={index}>{value.ability.name} </span>)
                    })}
                  </div>
                  <div className="flex flex-col items-start xsm:items-center">
                    {pokemon2[0].stats.map((value, index) => {
                      return (<h3 className={`${colorChangeStats(value.stat.name)} drop-shadow-sm capitalize`} key={index}>{value.stat.name} : {value.base_stat}</h3>)
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
    </>
  )
}
