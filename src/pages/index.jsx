import React, {useState,useEffect} from 'react';
import Board from '../components/componentsIndex/board'
import Nav from '../components/nav'
import '../assets/pages/index.css'
import loading from '../images/loading.gif'
const Index = () =>{
    const [pokemons,setPokemons] = useState([])
    const [whenPokemons,setWhenPokemons] = useState(1)
    const [loader,setLoader] = useState(true)

    async function fetchPokemon(){
        let start = whenPokemons + 100
        let array = []
         for(let i = whenPokemons; i < start ; i+=1){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            let dataResponse = await response.json()
            array.push(dataResponse)
         }

         setWhenPokemons(start)
         setPokemons(array)
         setLoader(false)
     }

    useEffect(()=>{
      //  if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
            fetchPokemon()
      //  } 
    },[])
    return (
        <div className="container-page">
            <Nav />
             {loader == false? <Board pokemons={pokemons}/> : <div ><img src={loading} alt="" className="loading"/></div>}

        </div>
    )
}

export default Index