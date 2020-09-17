import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/board.css'
import NamePokemons from './namePokemons'
import CountrySideBattle from './countrysideBattle'
import Movements from './movements'
const Board = (props) =>{
    useEffect(()=>{console.log(props.pokemonPlayer)},[props.pokemonPlayer])
    useEffect(()=>{},[props.pokemonMachine])
       /*    */     
        
    return (
        <div className="board-battle">
            <p className="battle-letters">Batalla</p>
            <div className="container-name-pokemons letters">
                <NamePokemons 
                    namePokemon={props.pokemonPlayer.name}
                    
                />
                <p>Vs</p>
                <NamePokemons 
                    namePokemon={props.pokemonMachine.name}
                    
                />
            </div>
            <CountrySideBattle 
                idPokemonPlayer={props.pokemonPlayer.id}
                idPokemonMachine={props.pokemonMachine.id}
                classPokemonPlayer={"pokemon-player"}
                classPokemonMachine={"pokemon-machine"}
            /> 
            <Movements 
                movements={props.pokemonPlayer.stats}
            />
        </div>
    )

}
export default Board
