import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Contact: React.FC = () => {
  return (
    <>
      <header className="header-container">
        <div className="logo">
          <img src="/img/LogoEmpresa.png" alt="Logo de la Empresa" />
        </div>
        <nav>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/about-us">Nosotros</a></li>
            <li><a href="/contact" className="active">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main className="my-5">
        <Container>
          {/* Información de contacto */}
          <section className="mb-5">
            <h2 className="mb-3">¿Prefieres hablar directamente? 💙</h2>
            <div className="bg-light p-4 rounded shadow-sm">
              <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
              <p><strong>Correo:</strong> contactoTechHome@empresa.com</p>
              <p><strong>Horario de atención:</strong> Lunes a Viernes, 9:00 - 18:00 hrs</p>
            </div>
          </section>

          {/* Formulario de contacto */}
          <section className="mb-5">
            <h2 className="mb-4">Contáctanos</h2>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="nombre">
                    <Form.Label>Nombre Completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre completo" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="email">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@correo.com" required />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="telefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="tel" placeholder="+56 9 1234 5678" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="asunto">
                    <Form.Label>Asunto</Form.Label>
                    <Form.Control type="text" placeholder="Motivo del mensaje" required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group controlId="mensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." required />
              </Form.Group>
              <Button variant="primary" type="submit">Enviar Mensaje</Button>
            </Form>
          </section>

          {/* Mapa */}
          <section>
            <h2 className="mb-3">Nuestra Ubicación</h2>
            <p>Dirección: Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7535486720667!2d-70.58110130000001!3d-33.5857476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d718a032972d%3A0x45da5699698e2261!2sINACAP%20Puente%20Alto!5e0!3m2!1ses-419!2scl!4v1744246754095!5m2!1ses-419!2scl"
                width="100%" height="450" style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </Container>
      </main>

      <footer className="text-center py-4">
        <p>Dirección: Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
        <p>Email: contactoTechHome@empresa.com</p>
        <div className="redes-sociales">
          <a href="#"><img src="/img/Facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/img/Twitter.jpg" alt="Twitter" /></a>
          <a href="#"><img src="/img/Instagram.png" alt="Instagram" /></a>
        </div>
      </footer>
    </>
  );
};

export default Contact;
