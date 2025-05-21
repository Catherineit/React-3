// src/pages/Services.tsx
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import img5 from "../assets/img/VentaOnline.jpg";
import img6 from "../assets/img/Garantia.jpg";
import img7 from "../assets/img/EnvioChile.jpg";
import img8 from "../assets/img/VariedadProductos.jpg";

const Services: React.FC = () => {
  const services = [
    {
      title: 'Venta Online',
      description:
        'Ofrecemos una amplia gama de productos electrónicos a través de las plataformas de Falabella y Sodimac, facilitando tu compra de tecnología de calidad desde la comodidad de tu hogar.',
      image: img5,
      alt: 'Venta Online',
    },
    {
      title: 'Garantía de Productos',
      description:
        'Todos nuestros productos cuentan con garantía, asegurando que disfrutes de tu tecnología sin preocupaciones.',
      image: img6,
      alt: 'Garantía de Productos',
    },
    {
      title: 'Envíos a Todo Chile',
      description:
        'Realizamos envíos rápidos y seguros a cualquier rincón de Chile, para que recibas tu pedido sin complicaciones.',
      image: img7,
      alt: 'Envíos a Todo Chile',
    },
    {
      title: 'Variedad de Productos Tecnológicos',
      description:
        'Encuentra desde accesorios hasta videojuegos y artículos gamer, con opciones para todos los gustos y necesidades tecnológicas.',
      image: img8,
      alt: 'Variedad de Productos',
    },
  ];

  return (
    <>
      <div className='altura'>

        <section className="banner text-center bg-light">
          <h1 className="mb-3">Nuestros Servicios</h1>
          <p className="lead">Descubre lo que ofrecemos para ti 💙.</p>
        </section>

      {/* Servicios */}
        <section className="container-fluid">
            <Row className="g-4">
              {services.map((service, index) => (
                <Col md={6} lg={3} key={index}>
                  <Card className="h-100 shadow-sm">
                    <Card.Img variant="top" src={service.image} alt={service.alt} />
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                      <Card.Text>{service.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
        </section>
      </div>

    </>
  );
};

export default Services;
