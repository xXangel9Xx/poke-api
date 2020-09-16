import React, {useState,useEffect} from 'react';
const Movements = (props) =>{
    useEffect(()=>{
        console.log(props.movements)
    },[props.movements])

    return (
        <>
        { props.movements &&
            <div className="container-movements">
                
            </div>
        }
        </>
    )
}
export default Movements