export default function attackVsDefense(powerAttack,defense){
        let total = powerAttack / 3 - defense / 3 
        if (total > 0){ 
            return parseInt(total)
        }
        return false
}