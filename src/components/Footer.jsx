import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-title">BODY PERFECT GYM</div>

      <div className="footer-links">
        <Link to="/#servicios">Servicios</Link>
        <Link to="/#comentarios">Comentarios</Link>
        <Link to="/#trainers">Entrenadores</Link>
        <Link to="/#location">Ubicación</Link>
        <Link to="/about">Misión/Visión</Link>
      </div>

      <div className="footer-social">
        <a
          href="https://www.facebook.com/profile.php?id=100063552644155"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://www.instagram.com/bodyperfect0601"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div className="copy">
        © {new Date().getFullYear()} Body Perfect Gym — Todos los derechos reservados.
      </div>
    </footer>
  );
}