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
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo" onClick={closeMenu}>
        <img src="/img/imagensinfondo.png" alt="Body Perfect Gym" />
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <i className="fas fa-bars"></i>
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/#servicios" onClick={closeMenu}>Servicios</Link>
        <Link to="/#trainers" onClick={closeMenu}>Entrenadores</Link>
        <Link to="/#comentarios" onClick={closeMenu}>Comentarios</Link>
        <Link to="/#location" onClick={closeMenu}>Ubicación</Link>
        <Link to="/about" onClick={closeMenu}>¿Quiénes somos?</Link>
        <a
          href="https://wa.me/50499015521?text=Hola!%20Quiero%20información%20sobre%20BodyPerfectGym"
          className="nav-wha"
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