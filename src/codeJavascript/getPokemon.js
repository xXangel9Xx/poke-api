export default async function getPokemon(getPokemon){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${getPokemon}/`);
    let dataResponse = await response.json()
    return dataResponse
}