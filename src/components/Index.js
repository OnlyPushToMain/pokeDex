import React from "react"

export default function Index ({ pokemon, loading, showPoke, colors, gradient }) {
  console.log("pokemon: ", pokemon)
  return (

    <div className="grid grid-cols-2 gap-4">
      { loading
        ? <h1>Loading...</h1>
        : pokemon.map((value, index) => {
          return (
            <div
              onClick={(e => showPoke(value))}
              key={index}

              className={value.types.length > 1 ? `ml-1 mr-1 hover:shadow-lg hover:outline hover:outline-select p-8 rounded-lg w-auto mt-2 capitalize bg-gradient-to-r ${gradient[`${value.types[0].type.name}`]} ${gradient[`${value.types[1].type.name}`]}` : `${colors[`${value.types[0].type.name}`]} ml-1 mr-1 hover:shadow-lg hover:outline hover:outline-select p-8 rounded-lg  w-auto mt-2 capitalize`}>

              <span
                className="text-xl font-bold mb-2 text-gray-800 flex flex-row items-center justify-start "
              >
                <p className="mr-1">{value.id}</p>
                <img
                  className="max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px]"
                  src={value.sprites.versions["generation-v"]["black-white"].animated.front_default ? value.sprites.versions["generation-v"]["black-white"].animated.front_default : value.sprites.front_default } alt={value.species.name}/>
                <p className="ml-1 capitalize">{value.species.name}</p>
                {value.types.map((value, index) => {
                  return (
                    <div
                      key={index}
                      className={` ${colors[`${value.type.name}`]} brightness-125 rounded ml-1 mr-1 shadow-md`}>
                      <p className="ml-2 mr-2" > {value.type.name} </p>

                    </div>)
                })}
              </span>
            </div>
          )
        })}
    </div>

  )
}
