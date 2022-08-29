// const colors = {
//   grass: "bg-grass",
//   poison: "bg-poison",
//   fire: "bg-fire",
//   flying: "bg-flying",
//   water: "bg-water",
//   bug: "bg-bug",
//   normal: "bg-normal",
//   electric: "bg-electric",
//   ground: "bg-ground",
//   fairy: "bg-fairy",
//   fighting: "bg-fighting",
//   psychic: "bg-psychic",
//   rock: "bg-rock",
//   steel: "bg-steel",
//   ice: "bg-ice",
//   ghost: "bg-ghost",
//   dragon: "bg-dragon"
//   dark: "bg-dark",
// }

function colorObjectGenerator (pokeData) {
  const colorObject = {}
  for (let i = 0; i < pokeData.length; i++) {
    for (let j = 0; j < pokeData[i].types.length; j++) {
      if (!colorObject[`${pokeData[i].types[j].type.name}`]) {
        colorObject[`${pokeData[i].types[j].type.name}`] = "bg-" + pokeData[i].types[j].type.name
      }
    }
  }
  return colorObject
}

function colorChangeStats (stat) {
  const color = [
    "text-hp",
    "text-attack",
    "text-special-attack",
    "text-defense",
    "text-special-defense",
    "text-speed"
  ]
  let thisColor = ""
  color.find(element => {
    if (element.includes(stat)) {
      thisColor = element
      return thisColor
    }
    return thisColor
  })
  return thisColor
}
// const colorBG = {
//   grass: "from-grass",
//   poison: "from-poison",
//   fire: "from-fire",
//   flying: "from-flying",
//   water: "from-water",
//   bug: "from-bug",
//   normal: "from-normal",
//   electric: "from-electric",
//   ground: "from-ground",
//   fairy: "from-fairy",
//   fighting: "from-fighting",
//   psychic: "from-psychic",
//   rock: "from-rock",
//   steel: "from-steel",
//   ice: "from-ice",
//   ghost: "from-ghost",
//   dragon: "from-dragon"
//   dark: "from-dark",
// }

function colorChangeBG (pokeData) {
  const colorObject = {}
  for (let i = 0; i < pokeData.length; i++) {
    for (let j = 0; j < pokeData[i].types.length; j++) {
      if (!colorObject[`${pokeData[i].types[j].type.name}`]) {
        colorObject[`${pokeData[i].types[j].type.name}`] = "from-" + pokeData[i].types[j].type.name
      }
    }
  }
  return colorObject
}
// function colorChangeBG (type) {

//   let thisColor = ""
//   color.find(element => {
//     if (element.includes(type)) {
//       thisColor = element
//       return thisColor
//     }
//     return thisColor
//   })
//   return thisColor
// }
// const colorBG2 = {
//   grass: "to-grass",
//   poison: "to-poison",
//   fire: "to-fire",
//   flying: "to-flying",
//   water: "to-water",
//   bug: "to-bug",
//   normal: "to-normal",
//   electric: "to-electric",
//   ground: "to-ground",
//   fairy: "to-fairy",
//   fighting: "to-fighting",
//   psychic: "to-psychic",
//   rock: "to-rock",
//   steel: "to-steel",
//   ice: "to-ice",
//   ghost: "to-ghost",
//   dragon: "to-dragon"
//   dark: "to-dark",
// }
function colorChangeBG2 (pokeData) {
  const colorObject = {}
  for (let i = 0; i < pokeData.length; i++) {
    for (let j = 0; j < pokeData[i].types.length; j++) {
      if (!colorObject[`${pokeData[i].types[j].type.name}`]) {
        colorObject[`${pokeData[i].types[j].type.name}`] = "to-" + pokeData[i].types[j].type.name
      }
    }
  }
  return colorObject
}

export { colorObjectGenerator, colorChangeStats, colorChangeBG, colorChangeBG2 }
