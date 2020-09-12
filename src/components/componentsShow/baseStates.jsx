import React,{useState,useEffect} from 'react';
import '../../assets/componentsShowAssets/baseState.css'
const BaseState = (props) =>{
    const [state,setState] = useState()
    useEffect(()=>{
       setState(props.stats)
    },[props.stats])

    useEffect(()=>{
        console.log(state)
    },[state])
    return (
        <div className="container-base-state">
            {state && 
            <>
            <div className="container-dates-base_state">
                <p className="color-text-stat">{state[5].stat.name}:<span className="color-number-state">{state[5].base_stat}</span> <m className="measurer background-red"> <hr className="hr hr-red" style={{width: state[5].base_stat}}/></m></p>
            </div>

            <div className="container-dates-base_state">
                <p className="color-text-stat">{state[4].stat.name}:<span className="color-number-state">{state[4].base_stat}</span><m className="measurer brackground-green"> <hr className="hr hr-green" style={{width: state[4].base_stat}}/></m></p>
            </div>

            <div className="container-dates-base_state">
               <p className="color-text-stat">{state[3].stat.name}:<span className="color-number-state">{state[3].base_stat}</span><m className="measurer brackground-green"> <hr className="hr hr-green" style={{width: state[3].base_stat}}/></m></p>
            </div>

            <div className="container-dates-base_state">
               <p className="color-text-stat">{state[2].stat.name}:<span className="color-number-state">{state[2].base_stat}</span><m className="measurer background-red"> <hr className="hr hr-red" style={{width: state[2].base_stat}}/></m></p>
            </div>

            <div className="container-dates-base_state">
               <p className="color-text-stat">{state[1].stat.name}:<span className="color-number-state">{state[1].base_stat}</span><m className="measurer background-red"> <hr className="hr hr-red" style={{width: state[1].base_stat}}/></m></p>
            </div>
            </>
            }
        </div>
    )
}
export default BaseState