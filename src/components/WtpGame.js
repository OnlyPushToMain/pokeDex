import React from "react"

export default function WtpGame ({ randomPoke, pokeData, randomPokemon }) {
  return (
    <div className="flex flex-col justify-center content-center items-center mt-[10%]">
      { randomPoke &&
      <>
        <img className="contrast-0 h-[20%] w-[20%]" src={pokeData[randomPoke].sprites.other["official-artwork"].front_default} alt=""></img>
        <input type="text" className="p-[10px] w-1/2 border-2 border-solid border-[grey] m-[10px] rounded-[25px]" placeholder="Who's that Pokemon?">
        </input>
      </>
      }
      <button className="rounded-[25px] p-[5px] border-2 border-solid border-[grey]" onClick={() => randomPokemon()}>
        Shuffle
      </button>
    </div>
  )
}
