export default function gamePokemon(typeMovementPlayer,movementPlayer,hpPlayer,setHpPlayer,hpMachine,setHpMachine,movementsMachine){
     let random = Math.floor(Math.random()*4)+1 
     let typeMovementMachine = movementsMachine[random]
     if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'attack') {
     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'defense'){

     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-attack'){

     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-defense'){
          
     }
}