import React,{useState,useEffect} from 'react';
import '../../assets/componentsShowAssets/moves.css'
const Moves = (props) =>{
    return(
        <div className="container-datos-of-moves">
                <div className="container-date-move" >
                    <p className="name-move">{props.name}</p>
                    <p className="level-learned-at">Level: {props.level}</p>  
                    <hr/>           
                </div>
        </div>
    )
}
export default Moves