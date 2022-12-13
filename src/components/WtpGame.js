import React, { useState } from "react"

export default function WtpGame ({ randomPoke, pokeData, randomPokemon, counter, setCounter, highScore, setHighScore }) {
  const randomArr = [`${Math.floor(Math.random() * pokeData.length)}`, `${Math.floor(Math.random() * pokeData.length)}`, `${Math.floor(Math.random() * pokeData.length)}`, `${randomPoke}`]
  const [showModal, setShowModal] = useState(false)
  const [displayAns, setDisplayAns] = useState()

  function shuffle (array) {
    let currentIndex = array.length
    let randomIndex
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }

    return array
  }

  function answer (data) {
    if (data.toLowerCase() === pokeData[randomPoke].species.name.toLowerCase()) {
      setDisplayAns(`${pokeData[randomPoke].species.name.charAt(0).toUpperCase() + pokeData[randomPoke].species.name.slice(1)} is that Pokemon!`)
      setCounter(currentState => currentState + 1)
      return true
    } else {
      setDisplayAns(`Sorry, ${data.charAt(0).toUpperCase() + data.slice(1)} is not correct. It was ${pokeData[randomPoke].species.name.charAt(0).toUpperCase() + pokeData[randomPoke].species.name.slice(1)}!`)
      if (counter > highScore) {
        setHighScore(counter)
      }
      setCounter(currentState => currentState - currentState)
      return true
    }
  }

  let shuffled = shuffle(randomArr)

  function closeModal () {
    randomPokemon()
    shuffled = shuffle(randomArr)
    setShowModal(false)
  }

  function click (data) {
    answer(data)
    setShowModal(true)
  }

  return (
    <div className="flex flex-col justify-center content-center items-center mt-[10%]">
      { randomPoke &&
      <>
        <div>Score: {counter} High Score: {highScore}</div>
        <img className="contrast-0 h-[20%] w-[20%]" draggable="false" id="noSelect" src={pokeData[randomPoke].sprites.other["official-artwork"].front_default} alt=""></img>
        <div className="grid grid-cols-2 gap-10 ">
          <button className="rounded-[25px] p-[10px] border-2 border-solid border-[grey] hover:bg-[red] ease-in-out duration-300 hover:text-[white]" onClick={() => click(pokeData[shuffled[0]].species.name)}> {pokeData[shuffled[0]].species.name.charAt(0).toUpperCase() + pokeData[shuffled[0]].species.name.slice(1)}</button>
          <button className="rounded-[25px] p-[10px] border-2 border-solid border-[grey] hover:bg-[red] ease-in-out duration-300 hover:text-[white]" onClick={() => click(pokeData[shuffled[1]].species.name)}> {pokeData[shuffled[1]].species.name.charAt(0).toUpperCase() + pokeData[shuffled[1]].species.name.slice(1)}</button>
          <button className="rounded-[25px] p-[10px] border-2 border-solid border-[grey] hover:bg-[red] ease-in-out duration-300 hover:text-[white]" onClick={() => click(pokeData[shuffled[2]].species.name)}> {pokeData[shuffled[2]].species.name.charAt(0).toUpperCase() + pokeData[shuffled[2]].species.name.slice(1)}</button>
          <button className="rounded-[25px] p-[10px] border-2 border-solid border-[grey] ease-in-out duration-300 hover:bg-[red] hover:text-[white]" onClick={() => click(pokeData[shuffled[3]].species.name)}> {pokeData[shuffled[3]].species.name.charAt(0).toUpperCase() + pokeData[shuffled[3]].species.name.slice(1)}</button>
        </div>
      </>
      }
      {/* <button className="rounded-[25px] p-[5px] border-2 border-solid border-[grey]" onClick={() => randomPokemon()}>
        Shuffle
      </button> */}
      {showModal
        ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-[white]">
                  {/* header */}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-[red] text-[white]">
                    <h3 className="text-3xl font-semibold">
                    Who&apos;s that Pokemon?!
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => closeModal()}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative p-6">
                    <div className="flex flex-col justify-center align-center items-center">
                      <img className="h-[50%] w-[50%] contrast-0" id="contrastTarg" src={pokeData[randomPoke].sprites.other["official-artwork"].front_default} alt=""></img>
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        {displayAns}
                      </p>
                    </div>
                  </div>
                  {/* footer */}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => closeModal()}
                    >
                    Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )
        : null}

    </div>
  )
}
