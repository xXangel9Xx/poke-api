import React, {useState,useEffect} from 'react';
import Cards from './letters'
import '../../assets/componentsIndexAssets/board.css'
const Board = (props) =>{

    useEffect(()=>{
        console.log(props.pokemons)
    },[props.pokemons])
    
   // useEffect(()=>{
   //         return console.log(pokemons[0])
   // },[pokemons])
    return(
        <div className="container-boards">
            {props.pokemons.map((pokemons,i)=>
                    <Cards 
                        key={i}
                        name={pokemons.name}
                        types={pokemons.types}

                    />
                )
            }
        </div>
    )
}
export default Board