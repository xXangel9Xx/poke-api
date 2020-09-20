import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/countrySideBattle.css'
import Terreno from '../../images/Terreno.png'
const CountrySideBattle = (props) =>{
    useEffect(()=>{},[props.idPokemonPlayer])
    useEffect(()=>{},[props.idPokemonMachine])
    return (
        <div className="container-country-side-battle">
                <div className={"container-image-pokemon-batte width-heigh-image-and-container " + props.classPokemonPlayer}>
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+props.idPokemonPlayer+".png"} alt="" className="width-heigh-image-and-container"/>
                    <img src={Terreno} alt="" className="terreno"/>
                </div>

                <div className="container-image-pokemon-batte width-heigh-image-and-container margin-pokemon-machine">
                    <img src={"https://pokeres.bastionbot.org/images/pokemon/"+props.idPokemonMachine+".png"} alt="" className="width-heigh-image-and-container"/>
                    <img src={Terreno} alt="" className="terreno"/>
                </div>

        </div>
    )
}
export default CountrySideBattle
             