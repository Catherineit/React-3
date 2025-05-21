import React, { useState } from 'react';

const images = [
  '../assets/img/TechHome ByFalabella.jpg',
'../assets/img/TechHome Juegos.jpg',
'../assets/img/TechhomePC.jpg',
'../assets/img/TechHome Envios.jpg'
];

export const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Slide ${i + 1}`} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={prevSlide} aria-label="Anterior">&#10094;</button>
        <button onClick={nextSlide} aria-label="Siguiente">&#10095;</button>
      </div>
    </div>
  );
};
