import React, {useState,useEffect} from 'react';
import Board from '../components/componentsIndex/board'

const Index = () =>{
    const [pokemons,setPokemons] = useState([])
    const [whenPokemons,setWhenPokemons] = useState(1)

    useEffect(()=>{
    async function fetchPokemon(){
        let start = whenPokemons + 10
        let array = []
         for(let i = whenPokemons; i < start ; i+=1){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let dataResponse = await response.json()
            array.push(dataResponse)
         }
         console.log(array)
         setPokemons(array)
         setWhenPokemons(start)
     }
     fetchPokemon()
    },[])


    return (
        <div className="containerBoard">
            <Board />
        </div>
    )
}
//https://pokeapi.co/api/v2/pokemon/{id or name}/
//fetch()

export default Index