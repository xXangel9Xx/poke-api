import React, {useState,useEffect} from 'react';
import Board from '../components/componentsIndex/board'
import Nav from '../components/nav'
import '../assets/pages/index.css'
//import { cleanup } from '@testing-library/react';

const Index = () =>{
    const [pokemons,setPokemons] = useState([])
    const [whenPokemons,setWhenPokemons] = useState(1)

    async function fetchPokemon(){
        let start = whenPokemons + 12
        let array = []
         for(let i = whenPokemons; i < start ; i+=1){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let dataResponse = await response.json()
            array.push(dataResponse)
         }
         setWhenPokemons(start)
         setPokemons(array)
     }

    useEffect(()=>{
      //  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            fetchPokemon()
      //  }
    },[])
    return (
        <div className="container-page">
            <Nav />
            <Board 
            pokemons={pokemons}
            />
        </div>
    )
}

export default Index