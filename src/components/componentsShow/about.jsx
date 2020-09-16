import React,{useState,useEffect} from 'react';
import '../../assets/componentsShowAssets/about.css'
const About = (props) =>{
    const [abilities1,setAbilities1] = useState([])
    const [abilities2,setAbilities2] = useState([])
useEffect(()=>{
  try {
        setAbilities1(props.pokemonAbilities[0].ability.name)
        if (props.pokemonAbilities[1]) {
            setAbilities2(props.pokemonAbilities[1].ability.name)
        }
    } catch (error) {
    }
},[props.pokemonAbilities])
useEffect(()=>{

},[abilities1])

    return(
        <div className="detail-about">
            
            <p>Height: {props.pokemonHeight}</p>
            <p>weight: {props.pokemonWeight}</p>
            { abilities1 && abilities2 == undefined && 
                <p>Abilities: {abilities1}</p> 
            }
            { abilities1 && abilities2 &&
                <p>Abilities: {abilities1}, {abilities2}</p> 
            }
        </div>
    )
}
export default About