import React, {useState,useEffect} from 'react';
const Pokemon = (props) =>{
    const [type1, setType1] = useState()
    const [type2, setType2] = useState()
    useEffect(()=>{
        try {
            setType1(props.pokemonTypes[0])
            if (props.pokemonTypes[1]) {
                setType2(props.pokemonTypes[1])    
            }
        } catch (error) {
            
        }
    },[props.pokemonTypes])

    useEffect(()=>{
    },[type1])


    return(
        <div className="container-pokemon">
            <div className="date-pokemon">
                    <p>{props.pokemonName}</p>
                <div className="container-information-basic">
                    {type1 &&
                    <p>{props.pokemonTypes[0].type.name}</p>                    
                    }
                    {type2 && 
                     <p>{props.pokemonTypes[1].type.name}</p>                    
                    }
                </div>
            </div>


        </div>
    )
}
export default Pokemon