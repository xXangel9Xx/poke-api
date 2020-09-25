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
        if (whenPokemons <= 800) {
            for(let i = whenPokemons; i < start ; i+=1){
                let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
                let dataResponse = await response.json()
                array.push(dataResponse)
            }
            setWhenPokemons(start)
            if (pokemons.length-1 >= 0) {
                setPokemons([...pokemons,...array])
            } else {
                setPokemons(array)             
            }
            setLoader(false)
        }
     }

    useEffect(()=>{
            fetchPokemon()
    },[])
    /*useEffect(()=>{
        let board = document.getElementsByClassName("container-boards")[0];
        if (board) {

            console.log(window.scrollY)
            if (window.scrollY + window.innerHeight == board.clientHeight + board.offsetTop) {
            console.log("estoy dentro weeee..")

            }  
        }
    },[window.scrollY])*/

    return (
        <div className="container-page">
            <Nav />
             
             {loader == false? <Board pokemons={pokemons}/> : <div ><img src={loading} alt="" className="loading"/></div>}
             <div className="button-fetch" onClick={fetchPokemon}>pedir mas</div>
        </div>
    )
}

export default Index