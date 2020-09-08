import React, {useState,useEffect} from 'react';
const Show = (props) =>{
    //const [location,setLocation] = useState()
    useEffect(()=>{
        //let {location} = window.params
      //  let href = new URL(location);   
      //  let params = String(href.pathname)
        console.log(props.match.params.id)
    //console.log(href)
    },[])
    return (
        <div>

        </div>
    )

}
export default Show