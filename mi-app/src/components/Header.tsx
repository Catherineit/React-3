import React from 'react';
import Logo from "../assets/img/LogoEmpresa.png";

export const Header: React.FC = () => {
  return (
    <header className='py-0 m-0'>
        <div className="d-flex header-container align-items-center justify-content-between position-relative"> 
            <div className="position-absolute logo mr-0 pr-0">
                <img src={Logo} alt="Logo de la Empresa"  />
            </div>
            <nav className="mx-auto">
                <ul className="nav-list py-2 ">
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/services" className="active">Servicios</a></li>
                    <li><a href="/about-us">Nosotros</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </header>

  );
};

