import React from "react";
import Carousel from "../components/Carousel/Carousel";
import img1 from '../assets/img/TechHome ByFalabella.jpg';
import img2 from '../assets/img/TechHome Juegos.jpg';
import img3 from '../assets/img/TechhomePC.jpg';
import img4 from '../assets/img/TechHome Envios.jpg';

import img5 from "../assets/img/controljuego.jpg";
import img6 from "../assets/img/monitorgamer.jpg";
import img7 from "../assets/img/tecladogamer.jpg";
import img8 from "../assets/img/audifono.jpg";

const datos2 = [
  {
    src: img5,
    alt: "Imagen 5",
    caption: "Primera imagen",
    titulo: "Control de Juego",
    subtitulo: "Disfruta de la mejor experiencia de juego con nuestro control de última generación.",
  },
  {
    src: img6,
    alt: "Imagen 6",
    caption: "Primera imagen",
    titulo: "Monitor Gamer",
    subtitulo: "Imágenes nítidas y colores vibrantes para tus sesiones de juego.",
  },
  {
    src: img7,
    alt: "Imagen 7",
    caption: "Primera imagen",
    titulo: "Teclado Gamer",
    subtitulo: "Teclado mecánico con retroiluminación RGB para un rendimiento superior.",
  },
  {
    src: img8,
    alt: "Imagen 8",
    caption: "Primera imagen",
    titulo: "Audífonos",
    subtitulo: "Sonido envolvente para una experiencia inmersiva.",
  },
];

const datos = [
  {
    src: img1,
    alt: "Imagen 1",
    caption: "Primera imagen",
  },
  {
    src: img2,
    alt: "Imagen 2",
    caption: "Segunda imagen",
  },
  {
    src: img3,
    alt: "Imagen 3",
    caption: "Tercera imagen",
  },
  {
    src: img4,
    alt: "Imagen 4",
    caption: "Cuarta imagen",
  },
];

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


      <main className="margeninferior container-fluid">
        <section className="banner text-center py-5 bg-light">
          <h1>Bienvenidos a TechHome</h1>
          <p>
            Ofrecemos los mejores servicios para ti <span style={{ color: "green" }}>💚</span>.
          </p>
        </section>

        {/* Carrusel Manual (podrías reemplazar por react-slick o Bootstrap Carousel) */}
        
        <div className="mt-4">
          <Carousel items={datos} />
        </div>

        {/* Sobre Nosotros */}
        <section className="contenido  my-5">
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
        <section className=" my-5">
          <Carousel items={datos2} />
        </section>
      </main>

      

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
