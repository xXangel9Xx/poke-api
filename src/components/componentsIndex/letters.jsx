import React, {useState,useEffect} from 'react';
import '../../assets/componentsIndexAssets/letters.css'
const Cards = (props) =>{

useEffect(()=>{
    console.log(props.types)

},[props.pokemons])

    return(
        <div className="letters">
            <p>p</p>
        </div>
    )
}
export default Cards