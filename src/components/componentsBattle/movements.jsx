import React, {useEffect} from 'react';
import '../../assets/componentsBattleAssets/movements.css'
import gamePokemon from '../../codeJavascript/battle/gamePokemon'

const Movements = (props) =>{
    useEffect(()=>{},[props.movementsPlayer])
    useEffect(()=>{},[props.hpPlayer])
    useEffect(()=>{},[props.hpMachine])
    useEffect(()=>{},[props.movementsMachine])
    return (
        <>
        { props.movementsPlayer && 
            <div className="container-movements">
                <div className="movement" onClick={()=> gamePokemon(props.movementsPlayer[1].stat.name,props.movementsPlayer,props.hpPlayer,props.setHpPlayer,props.hpMachine,props.setHpMachine,props.movementsMachine)}>
                    <p className="text-movement">{props.movementsPlayer[1].stat.name}</p>
                </div>
                <div className="movement" onClick={()=> gamePokemon(props.movementsPlayer[2].stat.name,props.movementsPlayer,props.hpPlayer,props.setHpPlayer,props.hpMachine,props.setHpMachine,props.movementsMachine)}>
                    <p className="text-movement">{props.movementsPlayer[2].stat.name}</p>
                </div>
                <div className="movement" onClick={()=> gamePokemon(props.movementsPlayer[3].stat.name,props.movementsPlayer,props.hpPlayer,props.setHpPlayer,props.hpMachine,props.setHpMachine,props.movementsMachine)}>
                    <p className="text-movement">{props.movementsPlayer[3].stat.name}</p>
                </div>
                <div className="movement" onClick={()=> gamePokemon(props.movementsPlayer[4].stat.name,props.movementsPlayer,props.hpPlayer,props.setHpPlayer,props.hpMachine,props.setHpMachine,props.movementsMachine)}>
                    <p className="text-movement">{props.movementsPlayer[4].stat.name}</p>
                </div>
            </div>
        }
        </>    
    )
}
export default Movements