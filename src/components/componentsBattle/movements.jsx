import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/movements.css'
import gamePokemon from '../../codeJavascript/battle/gamePokemon'

const Movements = (props) =>{
    useEffect(()=>{},[props.movements])
    useEffect(()=>{},[props.hpPlayer])
    useEffect(()=>{},[props.hpMachine])

    return (
        <>
        { props.movements && 
            <div className="container-movements">
                <div className="movement" onClick={function(){alert('a')}}><p className="text-movement">{props.movements[1].stat.name}</p></div>
                <div className="movement" onClick={function(){alert('a')}}><p className="text-movement">{props.movements[2].stat.name}</p></div>
                <div className="movement" onClick={function(){alert('a')}}><p className="text-movement">{props.movements[3].stat.name}</p></div>
                <div className="movement" onClick={function(){alert('a')}}><p className="text-movement">{props.movements[4].stat.name}</p></div>
            </div>
        }
        </>    
    )
}
export default Movements