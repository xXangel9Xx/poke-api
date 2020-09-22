export default function attackVsAttack(powerAttackPlayer,hpPlayer,setHpPlayer,powerAttackMachine,hpMachine,setHpMachine){
        let resultHpPlayer = hpPlayer - powerAttackMachine / 3
        let resultHpMachine = hpMachine - powerAttackPlayer / 3
        if (resultHpPlayer >= 0 && resultHpMachine >= 0 && hpPlayer > 0 && hpMachine > 0) {
            return setHpPlayer(parseInt(resultHpPlayer)), setHpMachine(parseInt(resultHpMachine))
        }else if (resultHpPlayer <= 0 && resultHpMachine > 0 && hpPlayer > 0 && hpMachine > 0){
            return setHpPlayer(0), setHpMachine(parseInt(resultHpMachine))
        }else if (resultHpPlayer > 0 && resultHpMachine <= 0 && hpPlayer > 0 && hpMachine > 0){
            return setHpPlayer(parseInt(resultHpPlayer)), setHpMachine(0)
        }
        else if (resultHpPlayer <= 0 && resultHpMachine <= 0 && hpPlayer > 0 && hpMachine > 0){
            return setHpPlayer(0), setHpMachine(0)
        }
        
}