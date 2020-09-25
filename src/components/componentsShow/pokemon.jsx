import React, {useState,useEffect} from 'react';
import localStorage from 'local-storage';
import { Link } from 'react-router-dom';
import favoriteFunction from '../../codeJavascript/localStorage/favoriteFunction'
import '../../assets/componentsShowAssets/pokemon.css';
import '../../assets/colorTypePokemon/colorTypePokemon.css';
import back from '../../images/Back.png';
import favorite from '../../images/favorite.png';


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
        };
    },[props.pokemonTypes]);
    useEffect(()=>{
    },[type1]);

    return(
        <>
        {type1 &&
        
        <div className={"container-pokemon "+ props.pokemonTypes[0].type.name}>
            <div className={"date-pokemon "  }>
                    <div className="container-back">
                        <Link to="/">
                        <img src={back} alt=""/>                        
                        </Link>

                    </div>
                    <p>{props.pokemonName}</p>
                <div className="container-information-basic">
                    {type1 &&
                    <p className="background">{props.pokemonTypes[0].type.name}</p>                    
                    }
                    {type2 && 
                    <p className="background">{props.pokemonTypes[1].type.name}</p>                    
                    }
                </div>
            </div>

            <div className="container-image-pokemon-show">
                <img src={"https://pokeres.bastionbot.org/images/pokemon/"+props.pokemonId+".png"} alt="" className="pokemon-image-show"/>
            </div>

            <div className="container-favorites">
                <img src={favorite} alt="" className="favorite" onClick={(e)=>favoriteFunction(props.pokemonId,localStorage)}/>
                {props.pokemonId < 10 &&
                <p>#00{props.pokemonId}</p>
                }
                {props.pokemonId >= 10 && props.pokemonId < 100 &&
                <p>#0{props.pokemonId}</p>                
                }
                {props.pokemonId >= 10 && props.pokemonId >= 100 && props.pokemonId <= 999&&
                <p>#{props.pokemonId}</p>                
                }
            </div>
        </div>            

        }

        </>
    );
};
export default Pokemon;