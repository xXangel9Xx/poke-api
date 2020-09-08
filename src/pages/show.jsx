import React, {useState,useEffect} from 'react';
const Show = (props) =>{
    const [location,setLocation] = useState(props.match.params.id)
    const [pokemon,setPokemon] = useState([])
    useEffect(()=>{
        async function getPokemon(){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${location}/`);
            let dataResponse = await response.json()
            return setPokemon(dataResponse)
        }
        getPokemon()
    },[])

    useEffect(()=>{
        console.log(pokemon)
    },[pokemon])
    return (
        <div>

        </div>
    )

}
export default Show       //     console.log(dataResponse)