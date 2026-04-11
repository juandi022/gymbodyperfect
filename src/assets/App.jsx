import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas existentes
import Home from "./pages/Home";
import About from "./pages/About";
import Taekwondo from "./pages/Taekwondo";

// Páginas nuevas (tus compañeros las llenan)
import Services from "./pages/Services";
import Schedule from "./pages/Schedule";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Estilos globales
import "src/global.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/taekwondo" element={<Taekwondo />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;