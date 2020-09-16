import React,{useState,useEffect} from 'react';
import getPokemon from '../codeJavascript/getPokemon'
const Battle = (props) =>{
    const [pokemonPlayer, setPokemonPlayer] = useState(props.match.params.id)
    const [pokemonMachine, setPokemonMachine] = useState( Math.floor(Math.random()*999)+1 )
    useEffect(()=>{
         getPokemon(pokemonPlayer).then(val => setPokemonPlayer(val) )
      
    },[])
    useEffect(()=>{
        getPokemon(pokemonMachine).then(val => setPokemonMachine(val) )  
    },[])

    return (
        <div className="container-battle">

        </div>
    )

}
export default Battle