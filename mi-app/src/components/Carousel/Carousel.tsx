import React from 'react';
import RBCarousel from 'react-bootstrap/Carousel';

interface CarouselItem {
  src: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <RBCarousel>
      {items.map((item, index) => (
        <RBCarousel.Item key={index}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          {item.caption && (
            <RBCarousel.Caption>
              <p>{item.caption}</p>
            </RBCarousel.Caption>
          )}
        </RBCarousel.Item>
      ))}
    </RBCarousel>
  );
};

export default Carousel;
