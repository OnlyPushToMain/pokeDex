import React, {useEffect, useState} from 'react'
import axios from "axios"
import Card from './Card'
import Index from './Index'
export default function Home() {
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(false)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=151")
    const [showPoke, setShowPoke] = useState([])
    const pokeFun = async()=>{
        setLoading(true)
        const res= await axios.get(url);
        getPokemon(res.data.results);
        setLoading(false);
        // console.log(pokeData);
    }
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
           const result= await axios.get(item.url)
           setPokeData(state=>{
               state = [...state,result.data]
               state.sort((a,b)=>a.id>b.id?1:-1)
               return state;
           })
        }) 
        // console.log("data:", pokeData);  
     }
     const showPokemon = (value) => {
        setShowPoke([value])
        console.log("should be 1:", showPoke);
        setLoading2(true)
     }
    useEffect(()=>{
        pokeFun();
    }, [])
  return (
    <>
    <div className='h-screen flex'>
        <div className='ml-10 flex-1 flex overflow-hidden '>
            <div className='flex-1 overflow-y-scroll'>
                <Index pokemon={pokeData} loading={loading} showPoke={showPokemon}/>
            </div>
        </div>
        <div className=' mr-2 mt-2 sticky top-0 left-0 right-0 overflow-hidden'>
            <Card pokemon={showPoke} loading={loading2}/>
        </div>
    </div>
    </>
  )
}
