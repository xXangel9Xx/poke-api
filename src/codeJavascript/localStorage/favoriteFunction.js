export default function favorite(idPokemon,localStorage){
  /*  localStorage.remove('favorite')
    console.log(localStorage.get('favorite'))*/
   if ( localStorage.get('favorite') ) {
        let favorite = localStorage.get('favorite')
        localStorage.set('favorite',[...favorite,idPokemon])
    } else {
        localStorage.set('favorite',[idPokemon])
    }
}