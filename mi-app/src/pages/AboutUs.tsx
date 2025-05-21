import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


import MisionImg from '../assets/img/Mision.png';
import VisionImg from '../assets/img/Vision.png';
import ValoresImg from '../assets/img/Valores.png';
import HistoriaImg from '../assets/img/Historia.jpg';
import EquipoImg from '../assets/img/EquipoTrabajo.jpg';

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <main className="margeninferior">
        <section className="sobre-nosotros py-5">
          <div className="container">
            <h1 className="text-center mb-5">Sobre Nosotros 💜</h1>
            <div className="row">
              {/* Misión */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <img src={MisionImg} className="card-img-top img-fluid about-us-img" alt="Nuestra Misión" />
                  <div className="card-body">
                    <h2 className="card-title">Nuestra Misión</h2>
                    <p className="card-text">
                      En TechHome, nuestra misión es mejorar la vida de las personas mediante el acceso fácil y confiable a la tecnología.
                    </p>
                  </div>
                </div>
              </div>
              {/* Visión */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <img src={VisionImg} className="card-img-top img-fluid about-us-img" alt="Nuestra Visión" />
                  <div className="card-body">
                    <h2 className="card-title">Nuestra Visión</h2>
                    <p className="card-text">
                      Ser la empresa líder en distribución de tecnología en América Latina, reconocida por su excelencia en atención al cliente.
                    </p>
                  </div>
                </div>
              </div>
              {/* Valores */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <img src={ValoresImg} className="card-img-top img-fluid about-us-img" alt="Nuestros Valores" />
                  <div className="card-body">
                    <h2 className="card-title">Valores</h2>
                    <ul className="card-text list-unstyled">
                      <li>Calidad</li>
                      <li>Innovación</li>
                      <li>Compromiso</li>
                      <li>Transparencia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Historia */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 text-center">
                  <img src={HistoriaImg} className="card-img-top img-fluid about-us-img" alt="Nuestra Historia" />
                  <div className="card-body">
                    <h2 className="card-title">Nuestra Historia</h2>
                    <p className="card-text">
                      TechHome nace en 2015 en Santiago de Chile, con la visión de acercar la tecnología de punta a todos los hogares del país.
                    </p>
                  </div>
                </div>
              </div>
              {/* Equipo */}
              <div className="col-md-6 mb-4">
                <div className="card h-100 text-center">
                  <img src={EquipoImg} className="card-img-top img-fluid about-us-img" alt="Nuestro equipo" />
                  <div className="card-body">
                    <h2 className="card-title">El Equipo</h2>
                    <p className="card-text">
                      Nuestro equipo está compuesto por profesionales apasionados por la tecnología, listos para ayudar a nuestros clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
