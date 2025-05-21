import React from 'react';
import fb from "../assets/img/Facebook.png";
import tw from "../assets/img/Twitter.jpg";
import insta from "../assets/img/Instagram.png";


export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light text-center py-4 ">
        <p>Dirección: Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
        <p>Email: contactoTechHome@empresa.com</p>
        <div className="redes-sociales d-flex justify-content-center gap-3 mt-3">
          <a href="#"><img src={fb} alt="Facebook" height={30} /></a>
          <a href="#"><img src={tw} alt="Twitter" height={30} /></a>
          <a href="#"><img src={insta} alt="Instagram" height={30} /></a>
        </div>
      </footer>
  );
};
