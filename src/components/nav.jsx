import React, {useState,useEffect} from 'react';
import '../assets/main/nav.css'
import logo from '../images/Logo.png'
import menu from '../images/menu.png'
import closer from '../images/closer.png'
import { Link } from 'react-router-dom';
const Nav = () =>{
    const [showNavMovile, setShowNavMovile]=useState(false)
    function showMovile(){setShowNavMovile(!showNavMovile)}
    function ocultNavMovile(){setShowNavMovile(!showNavMovile)}
    return (
        <div className="container-Nav">
            <div className="container-logo"><img src={logo} alt=""/></div>
            <div className="container-link">
                <Link to="/" className="links">
                    <strong>Listado</strong>
                </Link>
                <Link to="/favorite" className="links">
                    <strong>Favoritos</strong>
                </Link>
                <Link to="/battle" className="links">
                    <strong>Batalla</strong>
                </Link>
            </div>
            <div id="pokeBola">
                <img src={menu} alt="" id="menu" onClick={showMovile}/>
            </div>

            { showNavMovile == true &&
            <div className="container-nav-movile" id="container-nav-movile">
                <div className="container-logo-movile">
                    <img src={logo} alt="" id="logo-movile"/>
                    <img src={closer} alt="" id="closer-nav-movile" onClick={ocultNavMovile}/>                
                </div>
             <div className="container-links-movile">
                <Link to="/" className="links links-movile">
                    <strong>Listado</strong>
                </Link>
                <Link to="/favorite" className="links links-movile">
                    <strong>Favoritos</strong>
                </Link>
                <Link to="/battle" className="links links-movile">
                    <strong>Batalla</strong>
                </Link>
              </div>

            </div>
            }
            
        </div>
    )

}
export default Nav