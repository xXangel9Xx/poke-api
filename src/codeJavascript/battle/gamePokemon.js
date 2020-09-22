import attackVsDefense from './attackVs/attackVsDefense'
import attackVsAttack from './attackVs/attackVsAttack'
import conditionalChangeHp from './conditionalChangeHP'
export default function gamePokemon(typeMovementPlayer,movementPlayer,hpPlayer,setHpPlayer,hpMachine,setHpMachine,movementsMachine){
     let random = Math.floor(Math.random()*4)+1 
     let typeMovementMachine = movementsMachine[random]
     console.log(typeMovementPlayer)
     console.log(typeMovementMachine.stat.name)
     if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'attack') {
          attackVsAttack(movementPlayer[1].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'defense' || typeMovementMachine.stat.name == 'special-defense'){
          let result = attackVsDefense(movementPlayer[1].base_stat,typeMovementMachine.base_stat)
          conditionalChangeHp(result,hpMachine,setHpMachine)
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }else if (typeMovementPlayer == 'special-attack' && typeMovementMachine.stat.name == 'special-attack'){
          attackVsAttack(movementPlayer[3].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }else if(typeMovementPlayer == 'special-attack' && typeMovementMachine.stat.name == 'defense' || typeMovementMachine.stat.name == 'special-defense'){
          let result = attackVsDefense(movementPlayer[3].base_stat,typeMovementMachine.base_stat)
          conditionalChangeHp(result,hpMachine,setHpMachine)
     }
}

