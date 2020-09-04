import React, {useState,useEffect} from 'react';
import '../assets/main/nav.css'
import logo from '../images/Logo.png'

const Nav = () =>{

    return (
        <div className="container-Nav">
            <div className="container-logo"><img src={logo} alt=""/></div>
            <div className="container-link">
                <a href="" className="links"><strong>Listado</strong></a>
                <a href="" className="links"><strong>Favoritos</strong></a>
                <a href="" className="links"><strong>Batalla</strong></a>
            </div>
            <div id="pokeBola"></div>
        </div>
    )

}
export default Nav