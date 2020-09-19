export default function favorite(idPokemon,localStorage){
   if ( localStorage.get('favorite') ) {
        let favorite = localStorage.get('favorite')
        localStorage.set('favorite',[...favorite,idPokemon])
        console.log(localStorage.get('favorite'))
    } else {
        localStorage.set('favorite',[idPokemon])
    }
    console.log(localStorage.get('favorite'))
}