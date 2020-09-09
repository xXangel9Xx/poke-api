import React, {useState,useEffect} from 'react';
const Pokemon = (props) =>{
    useEffect(()=>{
    },[props.pokemonTypes])

    return(
        <div className="container-pokemon">
            <div className="date-pokemon">
                    <p>{props.pokemonName}</p>
                <div className="container-information-basic">
                    {props.pokemonTypes &&
                    <p>{props.pokemonTypes[0].type.name}</p>                    
                    }
                    {props.pokemonTypes &&
                        <p>{props.pokemonTypes[1].type.name}</p>                    
                    }
                </div>
            </div>


        </div>
    )
}
export default Pokemon