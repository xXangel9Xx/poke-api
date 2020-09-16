import React,{useState,useEffect} from 'react';
import '../assets/componentsBattleAssets/battle.css'
import getPokemon from '../codeJavascript/getPokemon'
import Board from '../components/componentsBattle/board'

const Battle = (props) =>{
    const [pokemonPlayer, setPokemonPlayer] = useState(props.match.params.id)
    const [pokemonMachine, setPokemonMachine] = useState( Math.floor(Math.random()*900)+1 )
    useEffect(()=>{
        if (pokemonPlayer) {
            getPokemon(pokemonPlayer).then(val => setPokemonPlayer(val) )            
        } else {
          let pokemon = Math.floor(Math.random()*900)+1
          getPokemon(pokemon).then(val => setPokemonPlayer(val) )
        }
    },[])
    useEffect(()=>{
        getPokemon(pokemonMachine).then(val => setPokemonMachine(val) )  
    },[])

    return (
        <div className="container-battle-board">
            <Board 
                pokemonPlayer={pokemonPlayer}
                pokemonMachine={pokemonMachine}
            />
        </div>
    )

}
export default Battle