import React from 'react';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src="/img/LogoEmpresa.png" alt="Logo de la Empresa" />
        </div>
        <nav>
          <ul className="nav-list">
            <li><a href="/" >Inicio</a></li>
            <li><a href="/services" className="active">Servicios</a></li>
            <li><a href="/about-us">Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

