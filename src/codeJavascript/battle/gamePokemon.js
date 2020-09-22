export default function gamePokemon(typeMovementPlayer,movementPlayer,hpPlayer,setHpPlayer,hpMachine,setHpMachine,movementsMachine){
     let random = Math.floor(Math.random()*4)+1 
     let tipeMovementMachine = movementsMachine[random]
     if (typeMovementPlayer == 'attack') {
          alert(tipeMovementMachine.stat.name)
     }
}