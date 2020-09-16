import React, {useState,useEffect} from 'react';
import '../../assets/componentsBattleAssets/movements.css'
const Movements = (props) =>{
    useEffect(()=>{
        console.log(props.movements)
    },[props.movements])

    return (
        <>
        { props.movements &&
            <div className="container-movements">
                <div className="movement"><p>{props.movements[1].stat.name}</p></div>
                <div className="movement"><p>{props.movements[2].stat.name}</p></div>
                <div className="movement"><p>{props.movements[3].stat.name}</p></div>
                <div className="movement"><p>{props.movements[4].stat.name}</p></div>
            </div>
        }
        </>
    )
}
export default Movements