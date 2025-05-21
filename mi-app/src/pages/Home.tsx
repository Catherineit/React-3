

import React from "react";

const IndexPage: React.FC = () => {
  return (
    <>
      <head>
        <title>TechHome</title>
        <link rel="icon" href="img/Favicon.png" type="image/jpg" />
        <link rel="stylesheet" href="css/styles.css" />
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossOrigin="anonymous"
        />
      </head>

      <header>
        <div className="header-container d-flex align-items-center justify-content-between p-3">
          <div className="logo">
            <img src="img/LogoEmpresa.png" alt="Logo de la Empresa" />
          </div>
          <nav>
            <ul className="list-unstyled d-flex mb-0">
              <li className="mx-3">
                <a href="index.html">Inicio</a>
              </li>
              <li className="mx-3">
                <a href="services.html">Servicios</a>
              </li>
              <li className="mx-3">
                <a href="aboutUs.html">Nosotros</a>
              </li>
              <li className="mx-3">
                <a href="contact.html">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="margeninferior">
        <section className="banner text-center py-5 bg-light">
          <h1>Bienvenidos a TechHome</h1>
          <p>
            Ofrecemos los mejores servicios para ti <span style={{ color: "green" }}>💚</span>.
          </p>
        </section>

        {/* Carrusel Manual (podrías reemplazar por react-slick o Bootstrap Carousel) */}
        <section className="carousel text-center my-4">
          <div className="carousel-images" id="carouselImages">
            <img src="img/TechHome ByFalabella.jpg" alt="Imagen 1" />
            <img src="img/TechHome Juegos.jpg" alt="Imagen 2" />
            <img src="img/TechhomePC.jpg" alt="Imagen 3" />
            <img src="img/TechHome Envios.jpg" alt="Imagen 4" />
          </div>
          <div className="carousel-buttons mt-2">
            <button type="button" onClick={() => alert("prevSlide placeholder")}>
              &#10094;
            </button>
            <button type="button" onClick={() => alert("nextSlide placeholder")}>
              &#10095;
            </button>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="contenido container my-5">
          <article className="primer-articulo text-center">
            <h2>Nuestros Servicios</h2>
            <p>Descripción de los servicios ofrecidos.</p>
            <img src="https://picsum.photos/200/200" alt="Servicio 1" />
          </article>
        </section>

        {/* Sobre Nosotros */}
        <section className="contenido container my-5">
          <article>
            <h2 className="sobre-nosotros-titulo text-center">Sobre Nosotros</h2>
            <p className="sobre-nosotros-texto text-justify">
              TechHome es una empresa chilena dedicada a la venta de productos tecnológicos, ofreciendo una amplia
              gama de dispositivos y accesorios electrónicos a través de plataformas como Falabella y Sodimac.
              Entre su catálogo se incluyen consolas de videojuegos portátiles, audífonos, cargadores y otros
              dispositivos electrónicos de marcas reconocidas como Apple, Samsung y Xbox.
            </p>
          </article>
        </section>

        {/* Carrusel Bootstrap Productos Destacados */}
        <section className="container my-5">
          <h2 className="text-center my-4">Productos Destacados</h2>
          <div
            id="carouselProductos"
            className="carousel slide"
            data-ride="carousel"
            data-interval="5000"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="img/controljuego.jpg"
                  className="d-block w-100"
                  alt="Control de Juego"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Control de Juego</h5>
                  <p>Disfruta de la mejor experiencia de juego con nuestro control de última generación.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/monitorgamer.jpg"
                  className="d-block w-100"
                  alt="Monitor Gamer"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Monitor Gamer</h5>
                  <p>Imágenes nítidas y colores vibrantes para tus sesiones de juego.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/tecladogamer.jpg"
                  className="d-block w-100"
                  alt="Teclado Gamer"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Teclado Gamer</h5>
                  <p>Teclado mecánico con retroiluminación RGB para un rendimiento superior.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/audifono.jpg"
                  className="d-block w-100"
                  alt="Audífonos"
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Audífonos</h5>
                  <p>Sonido envolvente para una experiencia inmersiva.</p>
                </div>
              </div>
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselProductos"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Anterior</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselProductos"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Siguiente</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-light py-4">
        <div className="container text-center">
          <p>Dirección: Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
          <p>Email: contactoTechHome@empresa.com</p>
          <div className="redes-sociales d-flex justify-content-center gap-3">
            <a href="#">
              <img src="img/Facebook.png" alt="Facebook" />
            </a>
            <a href="#">
              <img src="img/Twitter.jpg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="img/Instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>

      {/* Bootstrap JS y dependencias */}
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12hVt6Lp0UAnb9E+IoBpGtnD7j68kBx9K9SmSVHXuA4oB+II"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default IndexPage;
