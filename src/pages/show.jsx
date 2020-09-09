import React, {useState,useEffect} from 'react';
import Board from '../components/componentsShow/board'
const Show = (props) =>{
    const [location,setLocation] = useState(props.match.params.id)
    const [pokemon,setPokemon] = useState([])

        async function getPokemon(){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${location}/`);
            let dataResponse = await response.json()
            return setPokemon(dataResponse)
        }

    useEffect(()=>{        
        getPokemon()
    },[])
    return (
        <div>
            <Board 
                pokemon={pokemon}
            />
        </div>
    )

}
export default Show      