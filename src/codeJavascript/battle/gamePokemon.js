import attackVsDefense from './attackVs/attackVsDefense'
import attackVsAttack from './attackVs/attackVsAttack'
import conditionalChangeHp from './conditionalChangeHP'
export default function gamePokemon(typeMovementPlayer,movementPlayer,hpPlayer,setHpPlayer,hpMachine,setHpMachine,movementsMachine){
     let random = Math.floor(Math.random()*4)+1 
     let typeMovementMachine = movementsMachine[1]
     console.log('movimiento de jugador ' + typeMovementPlayer)
     console.log('movimiento de la pc '+typeMovementMachine.stat.name)
     if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'attack') {
          attackVsAttack(movementPlayer[1].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }else if (typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'defense' || typeMovementPlayer == 'attack' && typeMovementMachine.stat.name == 'special-defense'){
          let result = attackVsDefense(movementPlayer[1].base_stat,typeMovementMachine.base_stat)
          conditionalChangeHp(result,hpMachine,setHpMachine)
          console.log("2to if")
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }else if (typeMovementPlayer == 'special-attack' && typeMovementMachine.stat.name == 'special-attack'){
          attackVsAttack(movementPlayer[3].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)
          console.log("3to if")
          /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     }else if (typeMovementPlayer == 'special-attack' && typeMovementMachine.stat.name == 'attack'){
          attackVsAttack(movementPlayer[3].base_stat,hpPlayer,setHpPlayer,typeMovementMachine.base_stat,hpMachine,setHpMachine)
          console.log("3to if")
     }
     else if(typeMovementPlayer == 'special-attack' && typeMovementMachine.stat.name == 'defense' || typeMovementPlayer == 'special-attack' && typeMovementMachine.stat.name == 'special-defense'){
          console.log("4to if")
          let result = attackVsDefense(movementPlayer[3].base_stat,typeMovementMachine.base_stat)
          conditionalChangeHp(result,hpMachine,setHpMachine) 
     }else if(typeMovementPlayer == 'defense' && typeMovementMachine.stat.name == 'attack' || typeMovementPlayer == 'defense' && typeMovementMachine.stat.name == 'special-attack'){
          let result = attackVsDefense(typeMovementMachine.base_stat,movementPlayer[2].base_stat)
          conditionalChangeHp(result,hpPlayer,setHpPlayer)
     }else if (typeMovementPlayer == 'special-defense' && typeMovementMachine.stat.name == 'attack' || typeMovementPlayer == 'special-defense' && typeMovementMachine.stat.name == 'special-attack'){
          let result = attackVsDefense(typeMovementMachine.base_stat,movementPlayer[4].base_stat)
          conditionalChangeHp(result,hpPlayer,setHpPlayer)
     }else if (typeMovementPlayer == 'defense' || typeMovementPlayer == 'special-defense'  && typeMovementMachine.stat.name == 'defense' || typeMovementMachine.stat.name == 'special-defense'){
          return      
     }
}

