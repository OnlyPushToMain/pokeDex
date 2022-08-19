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

function colorObjectGeneratorStats (pokeData) {
  const colorObject = {}
  for (let i = 0; i < pokeData.length; i++) {
    for (let j = 0; j < pokeData[i].stats.length; j++) {
      if (!colorObject[`${pokeData[i].stats[j].stat.name}`]) {
        colorObject[`${pokeData[i].stats[j].stat.name}`] = "text-" + pokeData[i].stats[j].stat.name
      }
    }
  }
  return colorObject
}
function colorObjectGeneratorGradient (pokeData) {
  const colorObject = {}
  // const colorObject2 = {}
  for (let i = 0; i < pokeData.length; i++) {
    for (let j = 0; j < pokeData[i].types.length; j++) {
      if (!colorObject[`${pokeData[i].types[j].type.name}`] && pokeData[i].types.length > 1) {
        colorObject[`${pokeData[i].types[j].type.name}`] = "from-" + pokeData[i].types[j].type.name
        colorObject[`${pokeData[i].types[j + 1].type.name}`] = "to-" + pokeData[i].types[j + 1].type.name
      }
    }
    console.log(colorObject)
  }
  return colorObject
}

export { colorObjectGenerator, colorObjectGeneratorStats, colorObjectGeneratorGradient }
