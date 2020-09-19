import React, {useState,useEffect} from 'react';
import localStorage from 'local-storage';
import '../assets/pages/favorite.css'
import Nav from '../components/nav';
import Board from '../components/componentsIndex/board'
const Favorite = () =>{
    const [pokemonsFavorites,setPokemonsFavorites] = useState(localStorage.get('favorite'))
    const [pokemons,setPokemons] = useState()
    async function favorite(){
        let array = []
        for(let i=0;i<=pokemonsFavorites.length-1;i+=1){
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonsFavorites[i]}/`);
            let dataResponse = await response.json()
            array.push(dataResponse)
        }
        setPokemons(array)
    }

    useEffect(()=>{
        if (pokemonsFavorites) {
            favorite()
        }
    },[])
    return(
        <div className="favorite-page">
            <Nav />
            <div className="container-text-favorite">
                <p className="text-favorite-pokemons"><strong>Pokemones Favoritos.</strong></p>
            </div>
            {pokemons? <Board pokemons={pokemons}/>: <p className="container-text">No tiene Pokemones favoritos.</p> }

        </div>
    )
}
export default Favorite