import React, {useState,useEffect} from 'react';
import '../../assets/componentsIndexAssets/letters.css'
import '../../assets/colorTypePokemon/colorTypePokemon.css'
const Letters = (props) =>{
    
useEffect(()=>{
},[props.types])

    return(
        <div className={props.classNameType + " letters"} >
            <div className="container-information">
              <p className="texts">{props.name}</p>  
              <p className="background texts">{props.type[0].type.name}</p>
              {props.type[1] != undefined &&
              <p className="background texts">{props.type[1].type.name}</p>
              }
            </div>
                          
            <div>
                <div className="container-id-pokemon">
                    {props.id < 10 &&
                        <p className="id-pokemon">#00{props.id}</p>    
                    }
                    {props.id < 100 && props.id >= 10 && 
                    <p className="id-pokemon">#0{props.id}</p>    
                    }
                    {props.id >= 10 && props.id >= 100 && props.id <= 999  &&
                    <p className="id-pokemon">#{props.id}</p>                        
                    }
                </div>
 
            <div className="container-images">
              <img src={"https://pokeres.bastionbot.org/images/pokemon/"+props.id+".png"} alt="" className="images-pokemons" />
            </div>
            </div>  
        </div>
    )
}
export default Letters