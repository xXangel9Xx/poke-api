import React, {useState,useEffect} from 'react';
import '../../assets/componentsShowAssets/board.css';
import { Link } from 'react-router-dom';
import Pokemon from './pokemon'
import About from './about'
import BaseState from './baseStates'
import Moves from './moves'
const Board = (props) => {
    const [moves,setMoves] = useState()
    const [showAbout,setShowAbout] = useState(true)
    const [showBaseState, setShowBaseState] = useState(false)
    const [showMove, setShowMove] = useState(false)
    useEffect(()=>{
        try {
            setMoves(props.pokemon.moves)
        } catch (error) {
            
        }
    },[props.pokemon])
    useEffect(()=>{
    },[moves])
    function showAboutEvent(){return setShowAbout(true), setShowBaseState(false),setShowMove(false)}
    function showBaseStateEvent(){return setShowBaseState(true), setShowAbout(false), setShowMove(false)}
    function showMoveEvent(){return setShowMove(true), setShowAbout(false), setShowBaseState(false)}
    return(
    <div className="board-show-pokemon">
            <Pokemon 
                pokemonName={props.pokemon.name}
                pokemonId={props.pokemon.id}
                pokemonTypes={props.pokemon.types}
            />
        <div className="container-detail-pokemon">  
                <Link to={`/pokemons/${props.pokemon.id}/battle`}  className="link-battle">
                    <div className="battle-show">
                        <p className="battle-text">Batalla</p>
                    </div>
                </Link>
            <div className="detail-pokemon">
                <div className="details about" onClick={showAboutEvent}><p>About</p></div>
                <div className="details states" onClick={showBaseStateEvent}><p>Base states</p></div>
                <div className="details details-moves" onClick={showMoveEvent}><p>moves</p></div>
            </div>

            { showAbout == true &&
                 <About 
                    pokemonHeight={props.pokemon.height}
                    pokemonWeight={props.pokemon.weight}
                    pokemonAbilities={props.pokemon.abilities}
                />
            }

            {showBaseState == true &&
                <BaseState 
                    stats={props.pokemon.stats}
                />
            }
            <div className="container-moves">
            {showMove == true && moves &&   moves.map((pokemon,i)=>
                    <Moves 
                        key={i}
                        name={pokemon.move.name}
                        level={pokemon.version_group_details[0].level_learned_at}
                    />    
                )            
            }
            </div>
        </div>
    </div>
    )
}
export default Board