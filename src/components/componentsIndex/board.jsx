import React, {useState,useEffect} from 'react';
import Cards from './cards'

const Board = (props) =>{

    useEffect(()=>{
        console.log(props.pokemons)
    },[props.pokemons])

    return(
        <div className="containerBoards">
            {props.pokemons.map((pokemons,i)=>
                    <Cards 
                        key={i}
                    />
                )
            }
        </div>
    )

}
export default Board