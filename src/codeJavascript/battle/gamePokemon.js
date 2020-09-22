import attackVsAttack from './attackVs/attackVsAttack'

export default function gamePokemon(typeMovementPlayer,movementPlayer,hpPlayer,setHpPlayer,hpMachine,setHpMachine,movementsMachine){
     let random = Math.floor(Math.random()*4)+1 
     let typeMovementMachine = movementsMachine[1]
     if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'attack') {
          attackVsAttack(movementPlayer[1].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)

     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'defense'){

     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-attack'){

     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-defense'){

     }
}