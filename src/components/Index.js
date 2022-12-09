import React from "react"

export default function Index ({ filterParam, pokemon, loading, showPoke, colors, colorsBG, colorsBG2, query }) {
  console.log("pokemon: ", pokemon)
  return (
    <>
      <div className=" grid md:grid-cols-2 gap-4 sm:grid-cols-1 gap 4">
        { loading
          ? <h1>Loading...</h1>
          : pokemon.filter(value => filterParam ? value.types.length > 1 ? value.types[0].type.name.includes(query.toLowerCase()) || value.types[1].type.name.includes(query.toLowerCase()) : value.types[0].type.name.includes(query.toLowerCase()) : value.name.includes(query.toLowerCase())
          ).map((pokemon, index) => {
            return (
              <div
                onClick={(e => showPoke(pokemon))}
                key={index}

                className={pokemon.types.length > 1 ? `select-none bg-gradient-to-r ml-1 mr-1 hover:shadow-lg hover:outline hover:outline-select p-8 rounded-lg w-auto mt-2 capitalize ${colorsBG[`${pokemon.types[0].type.name}`]} ${colorsBG2[`${pokemon.types[1].type.name}`]}` : ` select-none ml-1 mr-1 hover:shadow-lg hover:outline hover:outline-select p-8 rounded-lg  w-auto mt-2 capitalize ${colors[`${pokemon.types[0].type.name}`]}`}>

                <span
                  className="text-xl font-bold xsm:mb-2 text-gray-800 items-center justify-start flex flex-col xsm:flex-row"
                >
                  <p className="mr-1">{pokemon.id}</p>
                  <img
                    className="max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px]"
                    src={pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default ? pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default : pokemon.sprites.front_default } alt={pokemon.species.name}/>
                  <p className="ml-1 capitalize">{pokemon.species.name}</p>
                  {pokemon.types.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className={`${colors[`${value.type.name}`]} brightness-125 rounded ml-1 mr-1 shadow-md`}>
                        <p className="ml-2 mr-2" > {value.type.name} </p>

                      </div>)
                  })}
                </span>
              </div>
            )
          })}
      </div>
    </>
  )
}
