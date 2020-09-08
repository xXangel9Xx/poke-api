import React, {useState,useEffect} from 'react';
import Letters from './letters'
import '../../assets/componentsIndexAssets/board.css'
import { Link } from 'react-router-dom';
const Board = (props) =>{
    useEffect(()=>{
        console.log(props.pokemons)
    },[props.pokemons])
    
    return(
        <div className="container-boards">
            {props.pokemons.map((pokemons,i)=>
                <Link to={`/pokemons/${pokemons.id}`}  className="link-show" >
                    <Letters 
                        key={pokemons.id}
                        name={pokemons.name}
                        classNameType={pokemons.types[0].type.name}
                        type={pokemons.types}
                        id={pokemons.id}
                    />
                </Link>
             )
            }
        </div>
    )
}
export default Board