import React from 'react'

export default function Card({pokemon, loading}) {
    function colorChange(type){
        // typecheck(type){
            // string = 'bg-'
            // string.append(type)
        // }
        if(type == 'normal'){
          return `bg-normal`
        }else if(type == 'grass'){
          return `bg-grass`
        }else if(type == 'water'){
          return `bg-water`
        }else if(type == 'electric'){
          return `bg-electric`
        }else if(type == 'fighting'){
          return `bg-fighting`
        }else if(type == 'psychic'){
          return `bg-psychic`
        }else if(type == 'ghost'){
          return `bg-ghost`
        }else if(type == 'dragon'){
          return `bg-dragon`
        }else if(type == 'dark'){
          return `bg-dark`
        }else if(type == 'poison'){
          return `bg-poison`
        }else if(type == 'fairy'){
          return `bg-fairy`
        }else if(type == 'ice'){
          return `bg-ice`
        }else if(type == 'ground'){
          return `bg-ground`
        }else if(type == 'flying'){
          return `bg-flying`
        }else if(type == 'bug'){
          return `bg-bug`
        }else if(type == 'steel'){
          return `bg-steel`
        }else if(type == 'fire'){
          return `bg-fire`
        }else if(type == 'rock'){
          return `bg-rock`
        }
      }
      function colorChangeBG(type){
        if(type == 'normal'){
          return 'from-normal'
        }else if(type == 'grass'){
          return 'from-grass'
        }else if(type == 'water'){
          return 'from-water'
        }else if(type == 'electric'){
          return 'from-electric'
        }else if(type == 'fighting'){
          return 'from-fighting'
        }else if(type == 'psychic'){
          return 'from-psychic'
        }else if(type == 'ghost'){
          return 'from-ghost'
        }else if(type == 'dragon'){
          return 'from-dragon'
        }else if(type == 'dark'){
          return 'from-dark'
        }else if(type == 'poison'){
          return 'from-poison'
        }else if(type == 'fairy'){
          return 'from-fairy'
        }else if(type == 'ice'){
          return 'from-ice'
        }else if(type == 'ground'){
          return 'from-ground'
        }else if(type == 'flying'){
          return 'from-flying'
        }else if(type == 'bug'){
          return 'from-bug'
        }else if(type == 'steel'){
          return 'from-steel'
        }else if(type == 'fire'){
          return 'from-fire'
        }else if(type == 'rock'){
          return 'from-rock'
        }
      }
      function colorChangeBG2(type){
        if(type == 'normal'){
          return 'to-normal'
        }else if(type == 'grass'){
          return 'to-grass'
        }else if(type == 'water'){
          return 'to-water'
        }else if(type == 'electric'){
          return 'to-electric'
        }else if(type == 'fighting'){
          return 'to-fighting'
        }else if(type == 'psychic'){
          return 'to-psychic'
        }else if(type == 'ghost'){
          return 'to-ghost'
        }else if(type == 'dragon'){
          return 'to-dragon'
        }else if(type == 'dark'){
          return 'to-dark'
        }else if(type == 'poison'){
          return 'to-poison'
        }else if(type == 'fairy'){
          return 'to-fairy'
        }else if(type == 'ice'){
          return 'to-ice'
        }else if(type == 'ground'){
          return 'to-ground'
        }else if(type == 'flying'){
          return 'to-flying'
        }else if(type == 'bug'){
          return 'to-bug'
        }else if(type == 'steel'){
          return 'to-steel'
        }else if(type == 'fire'){
          return 'to-fire'
        }else if(type == 'rock'){
          return 'to-rock'
        }
      }
    console.log(pokemon);
  return (
    <div className="wrapper">
                {loading && <div>
                    <img className={pokemon[0].types.length > 1 ?`bg-gradient-to-r ${colorChangeBG(pokemon[0].types[0].type.name)} ${colorChangeBG2(pokemon[0].types[1].type.name)} w-full object-cover object-center rounded-lg shadow-md` : `${colorChange(pokemon[0].types[0].type.name)} w-full object-cover object-center rounded-lg shadow-md`} src={pokemon[0].sprites.other["official-artwork"].front_default} alt=''/>
                    <div>
                    
                        <div className="relative px-4 -mt-20  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg bg-menu flex flex-col items-center mb-5">
                                <div className="flex flex-col items-center">
                                    <div>
                                        <h1>{pokemon[0].id}. {pokemon[0].species.name.toUpperCase()}</h1>
                                    </div>
                                    <span className='type'>
                                        {pokemon[0].types.map((value,index)=>{return(<span key={index}>{value.type.name} </span>)})}
                                    </span>
                                    <div className='abilities'>
                                        {pokemon[0].abilities.map((value, index)=>{
                                            return(<span key={index}>{value.ability.name} </span>)
                                        })}
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        {pokemon[0].stats.map((value,index)=>{
                                            return(<h3 key={index}>{value.stat.name} : {value.base_stat}</h3>)
                                        })}
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>}

    </div>
  )
}
