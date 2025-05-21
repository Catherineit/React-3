// src/pages/Services.tsx
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Venta Online',
      description:
        'Ofrecemos una amplia gama de productos electrónicos a través de las plataformas de Falabella y Sodimac, facilitando tu compra de tecnología de calidad desde la comodidad de tu hogar.',
      image: '/img/VentaOnline.jpg',
      alt: 'Venta Online',
    },
    {
      title: 'Garantía de Productos',
      description:
        'Todos nuestros productos cuentan con garantía, asegurando que disfrutes de tu tecnología sin preocupaciones.',
      image: '/img/Garantia.jpg',
      alt: 'Garantía de Productos',
    },
    {
      title: 'Envíos a Todo Chile',
      description:
        'Realizamos envíos rápidos y seguros a cualquier rincón de Chile, para que recibas tu pedido sin complicaciones.',
      image: '/img/EnvioChile.jpg',
      alt: 'Envíos a Todo Chile',
    },
    {
      title: 'Variedad de Productos Tecnológicos',
      description:
        'Encuentra desde accesorios hasta videojuegos y artículos gamer, con opciones para todos los gustos y necesidades tecnológicas.',
      image: '/img/VariedadProductos.jpg',
      alt: 'Variedad de Productos',
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="header-container d-flex justify-content-between align-items-center p-3">
        <div className="logo">
          <img src="/img/LogoEmpresa.png" alt="Logo de la Empresa" height={50} />
        </div>
        <nav>
          <ul className="nav-list d-flex list-unstyled mb-0">
            <li className="me-3"><a href="/">Inicio</a></li>
            <li className="me-3"><a href="/services" className="active">Servicios</a></li>
            <li className="me-3"><a href="/about-us">Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section className="banner text-center bg-light py-5">
        <h1 className="mb-3">Nuestros Servicios</h1>
        <p className="lead">Descubre lo que ofrecemos para ti 💙.</p>
      </section>

      {/* Servicios */}
      <section className="py-5">
        <Container>
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
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-4">
        <p>Dirección: Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
        <p>Email: contactoTechHome@empresa.com</p>
        <div className="redes-sociales d-flex justify-content-center gap-3 mt-3">
          <a href="#"><img src="/img/Facebook.png" alt="Facebook" height={30} /></a>
          <a href="#"><img src="/img/Twitter.jpg" alt="Twitter" height={30} /></a>
          <a href="#"><img src="/img/Instagram.png" alt="Instagram" height={30} /></a>
        </div>
      </footer>
    </>
  );
};

export default Services;
