import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container text-center py-4">
        <p>Dirección: Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
        <p>Email: contactoTechHome@empresa.com</p>
        <div className="redes-sociales">
          <a href="#"><img src="/img/Facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/img/Twitter.jpg" alt="Twitter" /></a>
          <a href="#"><img src="/img/Instagram.png" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};
