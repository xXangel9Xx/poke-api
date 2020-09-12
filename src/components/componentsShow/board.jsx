import React, {useState,useEffect} from 'react'
import '../../assets/componentsShowAssets/board.css'
import Pokemon from './pokemon'
import About from './about'
import BaseState from './baseStates'
const Board = (props) => {
    useEffect(()=>{

    },[props.pokemon])
    /*
                <About 
                    pokemonHeight={props.pokemon.height}
                    pokemonWeight={props.pokemon.weight}
                    pokemonAbilities={props.pokemon.abilities}
                />*/
    return(
        <div className="board-show-pokemon">
            <Pokemon 
                pokemonName={props.pokemon.name}
                pokemonId={props.pokemon.id}
                pokemonTypes={props.pokemon.types}
            />
            <div className="container-detail-pokemon">            
            <div className="detail-pokemon">
                <div className="details"><p>About</p></div>
                <div className="details states"><p>Base states</p></div>
                <div className="details details-moves"><p>moves</p></div>
            </div>
            <BaseState 
                    stats={props.pokemon.stats}
            />
            </div>
        </div>
    )
}
export default Board