import React, {useState,useEffect} from 'react'
import '../../assets/componentsShowAssets/board.css'
import Pokemon from './pokemon'
import About from './about'
import BaseState from './baseStates'
import Moves from './moves'
const Board = (props) => {
    const [moves,setMoves] = useState()
    const [show, setShow] = useState(false)

    useEffect(()=>{
        try {
            setMoves(props.pokemon.moves)
        } catch (error) {
            
        }
    },[props.pokemon])

    useEffect(()=>{
    },[moves])


    /*
                 <About 
                    pokemonHeight={props.pokemon.height}
                    pokemonWeight={props.pokemon.weight}
                    pokemonAbilities={props.pokemon.abilities}
                />
                
            <BaseState 
                    stats={props.pokemon.stats}
            />
                
                */


/*
show == true &&
*/
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

            <div className="container-moves">
            {moves &&   moves.map((pokemon,i)=>
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