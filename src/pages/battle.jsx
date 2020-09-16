import React,{useState,useEffect} from 'react';
import getPokemon from '../codeJavascript/getPokemon'
const Battle = (props) =>{
    const [pokemonPlayer, setPokemonPlayer] = useState(props.match.params.id)
    const [pokemonMachine, setPokemonMachine] = useState( Math.floor(Math.random()*999)+1 )
    useEffect(()=>{
         getPokemon(pokemonPlayer).then(val => setPokemonPlayer(val) )
        //
    },[])
    useEffect(()=>{
       console.log(pokemonPlayer)
    },[pokemonPlayer])
/*
    useEffect(()=>{
        let dataResponse = getPokemon(pokemonMachine)
        setPokemonMachine(dataResponse)
    },[])
*/
    return (
        <div className="container-battle">

        </div>
    )

}
export default Battle