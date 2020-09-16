import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/namePokemons.css'
const NamePokemons = (props) =>{
    useEffect(()=>{},[props.namePokemon])
    return(
        <div className="container-name">
            <p>{props.namePokemon}</p>
        </div>
    )
}
export default NamePokemons