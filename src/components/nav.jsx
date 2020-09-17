import React, {useState,useEffect} from 'react';
import '../assets/main/nav.css'
import logo from '../images/Logo.png'
import { Link } from 'react-router-dom';
const Nav = () =>{

    return (
        <div className="container-Nav">
            <div className="container-logo"><img src={logo} alt=""/></div>
            <div className="container-link">
                <Link to="/" className="links">
                    <strong>Listado</strong>
                </Link>
                
                <a href="" className="links"><strong>Favoritos</strong></a>
                
                <Link to="/battle" className="links">
                    <strong>Batalla</strong>
                </Link>
            </div>
            <div id="pokeBola"></div>
        </div>
    )

}
export default Nav