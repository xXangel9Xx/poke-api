export default function favorite(idPokemon,localStorage){
   if ( localStorage.get('favorite') ) {
        let favorite = localStorage.get('favorite')
        localStorage.set('favorite',[...favorite,idPokemon])
    } else {
        localStorage.set('favorite',[idPokemon])
    }
}