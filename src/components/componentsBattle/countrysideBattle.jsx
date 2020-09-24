import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/countrySideBattle.css'
import Terreno from '../../images/Terreno.png'
const CountrySideBattle = (props) =>{
    useEffect(()=>{},[props.idPokemonPlayer])
    useEffect(()=>{},[props.idPokemonMachine])
    function movementEffect(search){
        let image = document.getElementById(search)
        let repy = 0
        while (repy <= 100) {
            for(let i = 0; i<= 50; i+=1){
            setTimeout(()=>{
                image.style.marginRight = i+"px"
            },1000) 
            }
            repy++
        }
    }
    function movementEffectMachine(search){
        let image = document.getElementById(search)
        let repy = 0
        while (repy<=100) {
            for(let i = 0; i<= 50; i+=1){
            setTimeout(()=>{
                image.style.marginLeft = i+"px"
            },1000) 
            }
            repy++
        }
    }
    function hp(hpProperty,hp){
        for(let i = 0; i <= hp; i+=1){  
            hpProperty.style.width = i+"px"
        }
    }
    useEffect(()=>{
        let hpPropertyWidth = document.getElementById("hp-player");
        hp(hpPropertyWidth,props.hpPlayer)
        movementEffect("image-player")

    },[props.hpPlayer])

    useEffect(()=>{
        let hpPropertyWidth = document.getElementById("hp-machine")
        hp(hpPropertyWidth,props.hpMachine)
        movementEffectMachine("image-machine")
    },[props.hpMachine])
    return (
        <div className="container-country-side-battle">
                <div className={"container-image-pokemon-batte width-heigh-image-and-container  " + props.classPokemonPlayer} id="image-player">
                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+props.idPokemonPlayer+".png"} alt="" className="width-heigh-image-and-container"/>
                    <img src={Terreno} alt="" className="terreno"/>
                    <div className="container-hp">
                       <hr className="hp" id="hp-player" /> 
                        <p className="hp-number">{props.hpPlayer}<span>Hp</span></p>
                    </div>
                    
                </div>

                <div className="container-image-pokemon-batte width-heigh-image-and-container margin-pokemon-machine" id="image-machine">
                    <img src={"https://pokeres.bastionbot.org/images/pokemon/"+props.idPokemonMachine+".png"} alt="" className="width-heigh-image-and-container"/>
                    <img src={Terreno} alt="" className="terreno"/>
                    <div className="container-hp">
                        <hr className="hp" id="hp-machine" />
                        <p className="hp-number">{props.hpMachine}<span>Hp</span> </p>
                    </div>
                    

                </div>

        </div>
    )
}
export default CountrySideBattle
                     /*let hpStyle = window.getComputedStyle(hpPropertyWidth)
        let width = hpStyle.getPropertyValue("width");
        console.log(parseInt(width))*/