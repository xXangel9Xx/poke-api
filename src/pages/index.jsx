import React, {useState,useEffect} from 'react';
import Board from '../components/componentsIndex/board'
import Nav from '../components/nav'
import '../assets/pages/index.css'

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
         return setPokemons(array),setWhenPokemons(start)
     }
      //  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            fetchPokemon()
      //  }
    },[])


    return (
        <div className="container-page">
            <Nav />
            <Board />
        </div>
    )
}
//https://pokeapi.co/api/v2/pokemon/{id or name}/
//fetch()

export default Index