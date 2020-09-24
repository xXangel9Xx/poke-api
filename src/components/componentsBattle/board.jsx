import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../assets/componentsBattleAssets/board.css'
import NamePokemons from './namePokemons'
import CountrySideBattle from './countrysideBattle'
import Movements from './movements'
import back from '../../images/Back.png'

const Board = (props) =>{
    const [hpPlayer,setHpPlayer] = useState(100)
    const [hpMachine,setHpMachine] = useState(100)

    useEffect(()=>{},[props.pokemonPlayer])
    useEffect(()=>{},[props.pokemonMachine])
        
    return (
        <div className="board-battle">
            <div className="container-back">
                <Link to="/" >
                <img src={back} alt="" id="back-battle"/>
                </Link>

                
                </div>
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
                hpPlayer={hpPlayer}
                hpMachine={hpMachine}           
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
