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

function colorChange (type) {
  return "bg-" + type
}
function colorChangeBG (type) {
  return "from-" + type
}
function colorChangeBG2 (type) {
  return "to-" + type
}

export { colorObjectGenerator, colorChange, colorChangeBG, colorChangeBG2 }
