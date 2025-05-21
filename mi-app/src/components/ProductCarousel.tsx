import React, { useState } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Venta Online',
    image: '/img/VentaOnline.jpg',
    description: 'Ofrecemos una amplia gama de productos electrónicos a través de Falabella y Sodimac, facilitando tu compra de tecnología desde casa.'
  },
  {
    id: 2,
    title: 'Garantía de Productos',
    image: '/img/Garantia.jpg',
    description: 'Todos nuestros productos cuentan con garantía, asegurando que disfrutes de tu tecnología sin preocupaciones.'
  },
  {
    id: 3,
    title: 'Envíos a Todo Chile',
    image: '/img/EnvioChile.jpg',
    description: 'Realizamos envíos rápidos y seguros a cualquier rincón de Chile, para que recibas tu pedido sin complicaciones.'
  },
  {
    id: 4,
    title: 'Variedad de Productos Tecnológicos',
    image: '/img/VariedadProductos.jpg',
    description: 'Encuentra accesorios, videojuegos y artículos gamer para todos los gustos y necesidades tecnológicas.'
  },
];

export const ProductCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel" style={{ maxWidth: '900px', margin: 'auto' }}>
      <div
        className="carousel-images"
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
          width: `${products.length * 100}%`,
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            style={{
              flex: '0 0 100%',
              margin: '0 10px',
              boxSizing: 'border-box',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="card-img-top"
              style={{ borderRadius: '10px', height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-buttons">
        <button onClick={prev} aria-label="Anterior">&#10094;</button>
        <button onClick={next} aria-label="Siguiente">&#10095;</button>
      </div>
    </div>
  );
};
