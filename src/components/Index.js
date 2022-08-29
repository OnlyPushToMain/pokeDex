import React from "react"

export default function Index ({ filterParam, setFilterParam, pokemon, loading, showPoke, colors, colorsBG, colorsBG2, query, changeQuery }) {
  console.log("pokemon: ", pokemon)
  return (
    <>
      <div className="sticky top-0 bg-[white] z-[2]">
        <form onSubmit={e => { e.preventDefault() }} className="flex flex-row items-center justify-evenly">
          <input onChange={event => changeQuery(event.target.value)} type="text" className="w-full border-2 border-solid border-[grey] p-[5px] m-[2px] rounded-[25px]" placeholder="Search">
          </input>
          <select onChange={event => setFilterParam(event.target.value) } className="ml-1 mr-1">
            <option value="">None
            </option>
            <option value="type">Type
            </option>
          </select>
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
                  className="text-xl font-bold mb-2 text-gray-800 flex flex-row items-center justify-start "
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
