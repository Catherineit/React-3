
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ImageCarousel } from "./components/ImageCarousel";
import { ProductCarousel } from "./components/ProductCarousel";
import Contact from "./pages/Contact";

function Home() {
  return (
    <main style={{ flex: 1, padding: "20px" }}>
      <ImageCarousel />
      <ProductCarousel />
      {/* Aquí puedes agregar más secciones o contenido */}
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
