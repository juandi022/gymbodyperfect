import { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Carlos M.",
      time: "hace 2 días",
      rating: 5,
      text: "Excelente gimnasio, los entrenadores son muy profesionales y el ambiente es increíble.",
    },
    {
      id: 2,
      name: "María L.",
      time: "hace 1 semana",
      rating: 5,
      text: "Llevo 6 meses y los resultados son impresionantes. 100% recomendado.",
    },
    {
      id: 3,
      name: "José R.",
      time: "hace 2 semanas",
      rating: 4,
      text: "Muy buenas instalaciones y excelente atención. El mejor gym de la zona.",
    },
  ]);

  const [form, setForm] = useState({ name: "", email: "", comment: "", rating: 5 });
  const [stars, setStars] = useState(5);

  useEffect(() => {
    // Scroll a sección si hay hash en la URL
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;
    const newComment = {
      id: Date.now(),
      name: form.name,
      time: "ahora mismo",
      rating: stars,
      text: form.comment,
    };
    setComments([newComment, ...comments]);
    setForm({ name: "", email: "", comment: "", rating: 5 });
    setStars(5);
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa${i < count ? "s" : "r"} fa-star`}></i>
    ));

  return (
    <>
      {/* HERO */}
      <header className="hero-header-home" style={{
  background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(/img/fondodepantallagym.jpg) center/cover no-repeat`
}}>
        <section className="hero-content" style={{ textAlign: "center", padding: "0 20px" }}>
          <h3 style={{ fontSize: "2rem", marginBottom: "20px", color: "#ffb800", animation: "fadeIn 1s ease forwards", opacity: 0, animationDelay: "0.2s" }}>¡Bienvenido a Bodyperfectgym!</h3>
          <h1 style={{ fontSize: "4rem", fontWeight: "900", marginBottom: "30px", animation: "zoomIn 1.2s ease forwards", opacity: 0, animationDelay: "0.5s", lineHeight: "1.2" }}>
            El mejor lugar <span style={{ color: "#ffb800", display: "block", fontSize: "3rem", fontWeight: "600", marginTop: "15px" }}>Para estar en forma</span>
          </h1>
          <a href="#servicios">
            <button className="hero-btn">Conoce nuestros servicios</button>
          </a>
        </section>
      </header>

      <main>
        {/* SERVICIOS */}
        <section className="services-section" id="servicios">
          <h2 className="section-title">SERVICIOS</h2>
          <p className="section-subtitle">Entrenamiento personalizado para todos los niveles.</p>
          <div className="text-center mb-12">
            <a href="/services">
              <button className="services-btn">Ver todos los servicios</button>
            </a>
          </div>
        </section>

        {/* ¿QUIÉNES SOMOS? */}
        <section className="about-section" id="about">
          <div className="about-icon">?</div>
          <h2 className="about-title">¿Quiénes Somos?</h2>
          <a href="/about">
            <button className="about-btn">Conócenos Más</button>
          </a>
        </section>

        {/* ENTRENADORES */}
        <section id="trainers" className="trainers-section">
          <h2 className="section-title">Nuestros Entrenadores</h2>
          <p className="section-subtitle">Entrenadores certificados y apasionados por tu progreso.</p>
          <div className="trainers-container">
            {[
              { img: "leoimagen.jpg", name: "Leonardo Sevilla", role: "Entrenador", ig: "https://www.instagram.com/leosevillas" },
              { img: "allanfoto.jpg", name: "Allan Varella", role: "Instructor", ig: "https://www.instagram.com/avarela2015" },
              { img: "imagenpapa.jpg", name: "Ruben Aroca", role: "Entrenador", ig: null },
              { img: "fotooscar.jpg", name: "Oscar Aroca", role: "Instructor Taekwondo-ITF", ig: "https://www.instagram.com/arocaaatkd" },
            ].map((t) => (
              <div className="trainer-card" key={t.name}>
                <div className="trainer-img">
                  <img src={`/img/${t.img}`} alt={t.name} />
                </div>
                <h3>{t.name}</h3>
                <p className="trainer-role">{t.role}</p>
                {t.ig && (
                  <div className="trainer-social">
                    <a href={t.ig} target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TAEKWONDO */}
        <section className="about-section" id="tkd">
          <div className="about-icon"></div>
          <h2 className="about-title">Clases de Taekwon-Do-ITF</h2>
          <a href="/taekwondo">
            <button className="about-btn">Más información</button>
          </a>
        </section>

        {/* COMENTARIOS */}
        <section id="comentarios" className="comments-section">
          <h2 className="section-title">Lo Que Dicen Nuestros Miembros</h2>
          <p className="section-subtitle">Experiencias reales de personas que transformaron su vida</p>

          <div className="comments-container">
            {comments.map((c) => (
              <div className="comment-card" key={c.id}>
                <div className="comment-header">
                  <div className="comment-avatar">
                    <img src="/img/imagensinfondo.png" alt={c.name} />
                  </div>
                  <div className="comment-info">
                    <h3>{c.name}</h3>
                    <span className="comment-time">{c.time}</span>
                  </div>
                  <div className="comment-rating">{renderStars(c.rating)}</div>
                </div>
                <div className="comment-body">
                  <p>{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FORMULARIO */}
          <div className="comment-form-container">
            <h3>Deja tu comentario</h3>
            <form className="comment-form" onSubmit={handleSubmit}>
              <div className="form-group" style={{ display: "flex", gap: "15px" }}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <div className="rating-input">
                  <span>Calificación:</span>
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <i
                        key={s}
                        className={`${s <= stars ? "fas" : "far"} fa-star`}
                        onClick={() => setStars(s)}
                        style={{ cursor: "pointer", color: "#ffb800", fontSize: "20px" }}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Escribe tu comentario aquí..."
                  rows="4"
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i> Enviar Comentario
              </button>
            </form>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="location" className="location-section">
          <h2 className="section-title">Ubicación</h2>
          <p className="section-subtitle">Visítanos en nuestras instalaciones</p>

          <div className="location-container">
            <div className="location-info">
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h3>Dirección</h3>
                  <p>Ave Vijil, Blvr. Chorotega, Choluteca</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-clock"></i>
                <div>
                  <h3>Horarios</h3>
                  <p>Lunes a Viernes: 6:00 AM - 10:00 PM</p>
                  <p>Sábados: 8:00 AM - 8:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h3>Contacto</h3>
                  <p>Teléfono: 9531-6341</p>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.978506396673!2d-87.1886974238956!3d13.999603586353443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5fe0b0f5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sBody%20Perfect%20Gym!5e0!3m2!1ses!2shn!4v1699999999999!5m2!1ses!2shn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Body Perfect Gym"
              ></iframe>
              <a
                href="https://maps.app.goo.gl/beaDnbAfubLWJe5t5"
                target="_blank"
                rel="noreferrer"
                className="map-link-btn"
              >
                <i className="fas fa-external-link-alt"></i> Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}