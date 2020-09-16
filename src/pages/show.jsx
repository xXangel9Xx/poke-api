import React, {useState,useEffect} from 'react';
import Board from '../components/componentsShow/board'
import getPokemon from '../codeJavascript/getPokemon'
const Show = (props) =>{
    const [location,setLocation] = useState(props.match.params.id)
    const [pokemon,setPokemon] = useState([])
    useEffect(()=>{        
        getPokemon(location).then( val => setPokemon(val) )
    },[])
    return (
        <div className="container-board-show">
            <Board 
                pokemon={pokemon}
            />
        </div>
    )

}
export default Show      