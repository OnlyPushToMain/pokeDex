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
function colorChangeBG (type) {
  const color = [
    "from-normal",
    "from-fire",
    "from-water",
    "from-grass",
    "from-electric",
    "from-ice",
    "from-poison",
    "from-ground",
    "from-flying",
    "from-psychic",
    "from-bug",
    "from-rock",
    "from-ghost",
    "from-dark",
    "from-dragon",
    "from-steel",
    "from-fairy",
    "bg-fighting"
  ]
  let thisColor = ""
  color.find(element => {
    if (element.includes(type)) {
      thisColor = element
      return thisColor
    }
    return thisColor
  })
  return thisColor
}

function colorChangeBG2 (type) {
  const color = [
    "to-normal",
    "to-fire",
    "to-water",
    "to-grass",
    "to-electric",
    "to-ice",
    "to-poison",
    "to-ground",
    "to-flying",
    "to-psychic",
    "to-bug",
    "to-rock",
    "to-ghost",
    "to-dark",
    "to-dragon",
    "to-steel",
    "to-fairy",
    "bg-fighting"
  ]
  let thisColor = ""
  color.find(element => {
    if (element.includes(type)) {
      thisColor = element
      return thisColor
    }
    return thisColor
  })
  return thisColor
}

export { colorObjectGenerator, colorChangeStats, colorChangeBG, colorChangeBG2 }
