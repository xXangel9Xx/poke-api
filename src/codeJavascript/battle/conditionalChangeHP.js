export default function conditionalChangeHp(result,hp,setHp){
    if (hp - result <= 0){
        setHp(0) 
   }else if (result != false && hp > 0){
        result = result - hp
        setHp(-result)                
   }
}