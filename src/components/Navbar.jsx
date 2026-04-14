import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/95 z-[1000] shadow-lg">

      {/* LOGO */}
      <Link to="/" onClick={closeMenu}>
        <img src="/img/imagensinfondo.png" alt="Body Perfect Gym" className="h-14 w-auto" />
      </Link>

      {/* HAMBURGUESA — solo en móvil */}
      <button
        className="md:hidden text-white text-2xl cursor-pointer z-[1001]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
      </button>

      {/* LINKS */}
      <div className={`
        ${menuOpen ? "flex" : "hidden"} md:flex
        flex-col md:flex-row items-center gap-6 md:gap-8
        absolute md:static top-[72px] left-0
        w-full md:w-auto bg-black/98 md:bg-transparent p-6 md:p-0
      `}>
        <Link to="/"        onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">Inicio</Link>
        <Link to="/about"   onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">¿Quiénes somos?</Link>
        <Link to="/team"    onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">Nuestro Equipo</Link>
        <Link to="/gallery" onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">Galería</Link>
        <Link to="/shedule" onClick={closeMenu} className="text-white font-medium text-lg hover:text-[#ffb800] transition-colors">Horarios</Link>
        <a
          href="https://wa.me/50499015521?text=Hola!%20Quiero%20información%20sobre%20BodyPerfectGym"
          target="_blank" rel="noreferrer" onClick={closeMenu}
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded text-white flex items-center gap-2 font-semibold transition-colors"
        >
          <i className="fab fa-whatsapp" /> Escríbenos
        </a>
      </div>
    </nav>
  );
}