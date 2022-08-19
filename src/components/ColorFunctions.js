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

export { colorObjectGenerator, colorChange, colorChangeBG, colorChangeBG2, colorChangeStats }

