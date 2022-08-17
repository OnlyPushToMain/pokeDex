import React from "react"

export default function Index ({ pokemon, loading, showPoke }) {
  function colorChange (type) {
    if (type === "normal") {
      return "bg-normal"
    } else if (type === "grass") {
      return "bg-grass"
    } else if (type === "water") {
      return "bg-water"
    } else if (type === "electric") {
      return "bg-electric"
    } else if (type === "fighting") {
      return "bg-fighting"
    } else if (type === "psychic") {
      return "bg-psychic"
    } else if (type === "ghost") {
      return "bg-ghost"
    } else if (type === "dragon") {
      return "bg-dragon"
    } else if (type === "dark") {
      return "bg-dark"
    } else if (type === "poison") {
      return "bg-poison"
    } else if (type === "fairy") {
      return "bg-fairy"
    } else if (type === "ice") {
      return "bg-ice"
    } else if (type === "ground") {
      return "bg-ground"
    } else if (type === "flying") {
      return "bg-flying"
    } else if (type === "bug") {
      return "bg-bug"
    } else if (type === "steel") {
      return "bg-steel"
    } else if (type === "fire") {
      return "bg-fire"
    } else if (type === "rock") {
      return "bg-rock"
    }
  }
  function colorChangeBG (type) {
    if (type === "normal") {
      return "from-normal"
    } else if (type === "grass") {
      return "from-grass"
    } else if (type === "water") {
      return "from-water"
    } else if (type === "electric") {
      return "from-electric"
    } else if (type === "fighting") {
      return "from-fighting"
    } else if (type === "psychic") {
      return "from-psychic"
    } else if (type === "ghost") {
      return "from-ghost"
    } else if (type === "dragon") {
      return "from-dragon"
    } else if (type === "dark") {
      return "from-dark"
    } else if (type === "poison") {
      return "from-poison"
    } else if (type === "fairy") {
      return "from-fairy"
    } else if (type === "ice") {
      return "from-ice"
    } else if (type === "ground") {
      return "from-ground"
    } else if (type === "flying") {
      return "from-flying"
    } else if (type === "bug") {
      return "from-bug"
    } else if (type === "steel") {
      return "from-steel"
    } else if (type === "fire") {
      return "from-fire"
    } else if (type === "rock") {
      return "from-rock"
    }
  }
  function colorChangeBG2 (type) {
    if (type === "normal") {
      return "to-normal"
    } else if (type === "grass") {
      return "to-grass"
    } else if (type === "water") {
      return "to-water"
    } else if (type === "electric") {
      return "to-electric"
    } else if (type === "fighting") {
      return "to-fighting"
    } else if (type === "psychic") {
      return "to-psychic"
    } else if (type === "ghost") {
      return "to-ghost"
    } else if (type === "dragon") {
      return "to-dragon"
    } else if (type === "dark") {
      return "to-dark"
    } else if (type === "poison") {
      return "to-poison"
    } else if (type === "fairy") {
      return "to-fairy"
    } else if (type === "ice") {
      return "to-ice"
    } else if (type === "ground") {
      return "to-ground"
    } else if (type === "flying") {
      return "to-flying"
    } else if (type === "bug") {
      return "to-bug"
    } else if (type === "steel") {
      return "to-steel"
    } else if (type === "fire") {
      return "to-fire"
    } else if (type === "rock") {
      return "to-rock"
    }
  }
  return (

    <div>
      { loading
        ? <h1>Loading...</h1>
        : pokemon.map((value, index) => {
          return (
            <div onClick={(e => showPoke(value))} key={index} className={value.types.length > 1 ? `  bg-gradient-to-r ${colorChangeBG(value.types[0].type.name)} ${colorChangeBG2(value.types[1].type.name)} p-8 rounded-lg shadow-md w-auto mt-6` : `${colorChange(value.types[0].type.name)} p-8 rounded-lg shadow-md w-auto mt-6`}>
              <span
                className="text-2xl font-bold mb-2 text-gray-800 flex flex-row ml-0 items-center "
              >
                <p className="mr-10">{value.id}</p>
                <img className="max-w-[50px] max-h-[50px] min-w-[50px] min-h-[50px]"src={value.sprites.versions["generation-v"]["black-white"].animated.front_default} alt={value.species.name}/>
                <p className="ml-5">{value.species.name.toUpperCase()}</p>
                {value.types.map((value, index) => { return (<div key={index} className={`ml-5 ${colorChange(value.type.name)} brightness-125 rounded-xl shadow-md`}><p className="ml-1 mr-1" > {value.type.name} </p></div>) })}
              </span>
            </div>
          )
        })}
    </div>

  )
}
