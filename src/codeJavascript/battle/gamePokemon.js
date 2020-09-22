import attackVsDefense from './attackVs/attackVsDefense'
import attackVsAttack from './attackVs/attackVsAttack'

export default function gamePokemon(typeMovementPlayer,movementPlayer,hpPlayer,setHpPlayer,hpMachine,setHpMachine,movementsMachine){
     let random = Math.floor(Math.random()*4)+1 
     let typeMovementMachine = movementsMachine[2]
     if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'attack') {
          attackVsAttack(movementPlayer[1].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)
     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'defense'){
          let result = attackVsDefense(movementPlayer[1].base_stat,typeMovementMachine.base_stat)
          console.log(result)
          
          if (hpMachine - result <= 0){
               setHpMachine(0) 
          }else if (result != false && hpMachine > 0){
               result = result - hpMachine
               setHpMachine(-result)                
          }

 
     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-attack'){

     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-defense'){

     }
}