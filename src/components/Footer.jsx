import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-8 py-12 text-center border-t-2 border-[#ffb800] mt-20">
      <div className="text-2xl font-black text-[#ffb800] mb-8 tracking-wide">BODY PERFECT GYM</div>

      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <Link to="/#servicios" className="text-white text-sm hover:text-[#ffb800] transition-colors">
          Servicios
        </Link>
        <Link to="/#comentarios" className="text-white text-sm hover:text-[#ffb800] transition-colors">
          Comentarios
        </Link>
        <Link to="/team" className="text-white text-sm hover:text-[#ffb800] transition-colors">
          Entrenadores
        </Link>
        <Link to="/#location" className="text-white text-sm hover:text-[#ffb800] transition-colors">
          Ubicación
        </Link>
        <Link to="/about" className="text-white text-sm hover:text-[#ffb800] transition-colors">
          Misión/Visión
        </Link>
      </div>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.facebook.com/profile.php?id=100063552644155"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
          className="flex items-center justify-center w-10 h-10 bg-[#111] rounded-full text-[#ffb800] hover:bg-[#ffb800] hover:text-black transition-all transform hover:-translate-y-1"
        >
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/bodyperfect0601"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
          className="flex items-center justify-center w-10 h-10 bg-[#111] rounded-full text-[#ffb800] hover:bg-[#ffb800] hover:text-black transition-all transform hover:-translate-y-1"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
      </div>

      <div className="text-xs text-white pt-8 border-t border-gray-700">
        © {new Date().getFullYear()} Body Perfect Gym — Todos los derechos reservados.
      </div>
    </footer>
  );
}