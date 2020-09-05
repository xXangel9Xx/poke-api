import React, {useState,useEffect} from 'react';
import Cards from './letters'
import '../../assets/componentsIndexAssets/board.css'
const Board = (props) =>{
    useEffect(()=>{
        console.log(props.pokemons)
    },[props.pokemons])
    
    return(
        <div className="container-boards">
            {props.pokemons.map((pokemons,i)=>
                    <Cards 
                        key={i}
                        name={pokemons.name}
                        classNameType={pokemons.types[0].type.name}
                        type={pokemons.types}
                        id={i}
                    />
             )
            }
        </div>
    )
}
export default Board