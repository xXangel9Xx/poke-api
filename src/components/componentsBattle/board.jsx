import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/board.css'
import NamePokemons from './namePokemons'
import CountrySideBattle from './countrysideBattle'
import Movements from './movements'

const Board = (props) =>{
    const [hpPlayer,setHpPlayer] = useState(100)
    const [hpMachine,setHpMachine] = useState(100)

    useEffect(()=>{},[props.pokemonPlayer])
    useEffect(()=>{},[props.pokemonMachine])
        
    return (
        <div className="board-battle">
            <p className="battle-letters">Batalla</p>
            <div className="container-name-pokemons letters">
                {props.pokemonPlayer &&
                <NamePokemons 
                    namePokemon={props.pokemonPlayer.name}
                />
                }
                <p>Vs</p>
                { props.pokemonMachine &&
                <NamePokemons 
                    namePokemon={props.pokemonMachine.name}
                    
                />  
                }
            </div>
            { props.pokemonPlayer && props.pokemonPlayer &&
                <CountrySideBattle 
                idPokemonPlayer={props.pokemonPlayer.id}
                idPokemonMachine={props.pokemonMachine.id}
                classPokemonPlayer={"pokemon-player"}
                classPokemonMachine={"pokemon-machine"}
                /> 
            }
            { props.pokemonPlayer && props.pokemonMachine &&
                <Movements 
                movementsPlayer={props.pokemonPlayer.stats}
                movementsMachine={props.pokemonMachine.stats}
                hpPlayer={hpPlayer}
                setHpPlayer={setHpPlayer}
                hpMachine={hpMachine}
                setHpMachine={setHpMachine}
                /> 
            }
            
        </div>
    )

}
export default Board
