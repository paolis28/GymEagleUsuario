import './Navbar.css';
import Logo from '../img/LogoGym.png';
import { NavLink, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {Row, Image} from 'react-bootstrap';



function Navbar() {
  const { pathname } = useLocation();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  useEffect(() => {
    setActiveLink(pathname); 
  }, [pathname]);

  return (
    <header className='NavbarPrincipal'>
      <Row>
        <div className='contenedorLink'>

          <div className='IconoTitulo'>
            <div className='ContenedorImg'>
              <a href="/">
                <Image className='LogoNav' src={Logo} alt="" />
              </a>
            </div>

            <span>
              <h1 className='tituloNavbar'>BLACK EAGLE GYM</h1>
            </span>
          </div>

      

  
        </div>

      </Row>
    </header>

  );
}

export default Navbar;
