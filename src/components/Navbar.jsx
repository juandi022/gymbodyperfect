import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 bg-black/95 z-[1000] shadow-lg transition-all duration-300">
      <Link to="/" className="flex items-center hover:scale-105 transition-transform" onClick={closeMenu}>
        <img src="/img/imagensinfondo.png" alt="Body Perfect Gym" className="h-16 w-auto" />
      </Link>

      <button
        className="hidden md:block text-white text-2xl cursor-pointer z-[1001]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className={`${menuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 absolute md:static top-24 md:top-auto left-0 md:left-auto w-full md:w-auto bg-black/98 md:bg-transparent p-8 md:p-0`}>
        <Link to="/" onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">
          Inicio
        </Link>
        <Link to="/about" onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">
          ¿Quiénes somos?
        </Link>
        <Link to="/team" onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">
          Nuestro Equipo
        </Link>
        <Link to="/gallery" onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">
          Galería
        </Link>
        
        <a
          href="https://wa.me/50499015521?text=Hola!%20Quiero%20información%20sobre%20BodyPerfectGym"
          className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded text-white flex items-center gap-2 font-semibold text-lg transition-colors"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <i className="fab fa-whatsapp"></i> Escríbenos
        </a>
      </div>
    </nav>
  );
}