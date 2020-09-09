import React, {useState,useEffect} from 'react'
import Pokemon from './pokemon'
import About from './about'
const Board = (props) => {
    useEffect(()=>{
    },[props.pokemon])
    
    return(
        <div className="board-show-pokemon">
            <Pokemon 
                pokemonName={props.pokemon.name}
                pokemonId={props.pokemon.id}
                pokemonTypes={props.pokemon.types}
            />
        </div>
    )
}
export default Board