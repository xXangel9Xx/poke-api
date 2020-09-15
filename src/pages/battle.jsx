import React,{useState,useEffect} from 'react';
const Battle = (props) =>{
    const [idPokemonParams, setIdPokemonParams] = useState(props.match.params.id)
    useEffect(()=>{
        console.log(idPokemonParams)
    },[])
    return (
        <div className="container-battle">

        </div>
    )

}
export default Battle