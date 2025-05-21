import React from 'react';
import RBCarousel from 'react-bootstrap/Carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselItem {
  src: string;
  alt: string;
  caption?: string;
  titulo?: string;
  subtitulo?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <center>
      <RBCarousel
        prevIcon={<FaChevronLeft style={{ color: 'black', fontSize: '2rem' }} />}
        nextIcon={<FaChevronRight style={{ color: 'black', fontSize: '2rem' }} />}
      >
        {items.map((item, index) => (
          <RBCarousel.Item key={index}>
            <img className="d-block h-100" src={item.src} alt={item.alt} />
            {item.caption && item.titulo == null && (
              <RBCarousel.Caption>
                <p>{item.caption}</p>
              </RBCarousel.Caption>
            )}
            {item.titulo && (
              <div className="carousel-caption d-none d-md-block">
                <h5>{item.titulo}</h5>
                <p>{item.subtitulo}</p>
              </div>
            )}
          </RBCarousel.Item>
        ))}
      </RBCarousel>
    </center>
  );
};

export default Carousel;
