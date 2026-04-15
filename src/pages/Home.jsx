import { useState, useEffect } from "react";
import "./Home.css";

const TRAINERS = [
  { img: "leoimagen.jpg",  name: "Leonardo Sevilla",  role: "Entrenador",               ig: "https://www.instagram.com/leosevillas"  },
  { img: "allanfoto.jpg",  name: "Allan Varella",      role: "Instructor",               ig: "https://www.instagram.com/avarela2015"  },
  { img: "imagenpapa.jpg", name: "Ruben Aroca",        role: "Entrenador",               ig: null                                      },
  { img: "fotooscar.jpg",  name: "Oscar Aroca",        role: "Instructor Taekwondo-ITF", ig: "https://www.instagram.com/arocaaatkd"  },
];

const COMMENTS_INIT = [
  { id: 1, name: "Carlos M.", time: "hace 2 días",    rating: 5, text: "Excelente gimnasio, los entrenadores son muy profesionales y el ambiente es increíble." },
  { id: 2, name: "María L.",  time: "hace 1 semana",  rating: 5, text: "Llevo 6 meses y los resultados son impresionantes. 100% recomendado." },
  { id: 3, name: "José R.",   time: "hace 2 semanas", rating: 4, text: "Muy buenas instalaciones y excelente atención. El mejor gym de la zona." },
];

const Stars = ({ count }) =>
  Array.from({ length: 5 }, (_, i) => (
    <i key={i} className={`fa${i < count ? "s" : "r"} fa-star`} />
  ));

export default function Home() {
  const [comments, setComments] = useState(COMMENTS_INIT);
  const [form, setForm]         = useState({ name: "", email: "", comment: "" });
  const [stars, setStars]       = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) return;
    setComments([{ id: Date.now(), name: form.name, time: "ahora mismo", rating: stars, text: form.comment }, ...comments]);
    setForm({ name: "", email: "", comment: "" });
    setStars(5);
  };

  return (
    <>
      {/* HERO */}
      <header className="hero" style={{ background: `linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 100%), url(/gymbodyperfect/img/fondodepantallagym.jpg) center/cover no-repeat` }}>
        <div className="hero-content">
          <span className="hero-badge">💪 BodyPerfect Gym</span>
          <h1>El mejor lugar <span>Para estar en forma 🏋️</span></h1>
          <p className="hero-desc">🕐 Más de 12 años transformando vidas en Choluteca. Únete a nuestra familia.</p>
          <div className="hero-btns">
            <a href="#explore" className="btn-gold">Explorar 👇</a>
            <a href="#comentarios" className="btn-outline">Ver opiniones ⭐</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat"><span>12+</span><p>📅 Años</p></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span>1000+</span><p>👥 Miembros</p></div>
            <div className="hero-stat-divider" />
            <div className="hero-stat"><span>4</span><p>🏅 Entrenadores</p></div>
          </div>
        </div>
      </header>

      <main>
        {/* NAV CARDS */}
          <section className="nav-cards" id="explore">
          {[
            { href: "#/services",  icon: "🏋️", label: "Servicios",  desc: "Planes y equipos para todos los niveles" },
            { href: "#/about",     icon: "👥", label: "Nosotros",   desc: "Historia, misión y valores del gym"      },
            { href: "#/taekwondo", icon: "🥋", label: "Taekwondo",  desc: "Clases ITF para todas las edades"        },
          ].map(({ href, icon, label, desc }) => (
            <a href={href} className="nav-card" key={label}>
              <div className="nav-card-icon">{icon}</div>
              <h3>{label}</h3>
              <p>{desc}</p>
              <span className="nav-card-link">Ver más →</span>
            </a>
          ))}
        </section>

        {/* ENTRENADORES */}
        <section className="trainers-section" id="trainers">
          <div className="section-header">
            <p className="label">🏅 El equipo</p>
            <h2 className="title">Nuestros Entrenadores</h2>
            <p className="sub">Certificados y apasionados por tu progreso 💪</p>
          </div>
          <div className="trainers-grid">
            {TRAINERS.map((t) => (
              <div className="trainer-card" key={t.name}>
                <div className="trainer-img-wrap">
                  <div className="trainer-img">
                    <img src={`/gymbodyperfect/img/${t.img}`} alt={t.name} />
                  </div>
                  {t.ig && (
                    <a href={t.ig} target="_blank" rel="noreferrer" className="trainer-ig">
                      <i className="fab fa-instagram" />
                    </a>
                  )}
                </div>
                <h3>{t.name}</h3>
                <p className="trainer-role">🎯 {t.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMENTARIOS */}
        <section className="comments-section" id="comentarios">
          <div className="section-header">
            <p className="label">⭐ Opiniones</p>
            <h2 className="title dark">Lo que dicen nuestros miembros</h2>
            <p className="sub dark">Experiencias reales de personas que transformaron su vida 🙌</p>
          </div>
          <div className="comments-grid">
            {comments.map((c) => (
              <div className="comment-card" key={c.id}>
                <div className="comment-top">
                  <div className="comment-stars"><Stars count={c.rating} /></div>
                  <i className="fas fa-quote-right comment-quote" />
                </div>
                <p className="comment-text">"{c.text}"</p>
                <div className="comment-footer">
                  <div className="comment-avatar">
                    <img src="/gymbodyperfect/img//imagenicono.png" alt={c.name} />
                  </div>
                  <div>
                    <h4>{c.name}</h4>
                    <span>🕐 {c.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form className="comment-form" onSubmit={handleSubmit}>
            <h3>✍️ Deja tu comentario</h3>
            <div className="form-row">
              <input type="text"  placeholder="👤 Tu nombre" value={form.name}    onChange={(e) => setForm({ ...form, name: e.target.value })}  required />
              <input type="email" placeholder="📧 Tu email"  value={form.email}   onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="form-stars">
              <span>⭐ Calificación:</span>
              {[1,2,3,4,5].map((s) => (
                <i key={s} className={`${s <= stars ? "fas" : "far"} fa-star`} onClick={() => setStars(s)} />
              ))}
            </div>
            <textarea placeholder="💬 Escribe tu comentario..." rows="4" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} required />
            <button type="submit" className="btn-gold full">📨 Enviar comentario</button>
          </form>
        </section>

        {/* UBICACIÓN */}
        <section className="location-section" id="location">
          <div className="section-header">
            <p className="label">📍 Encuéntranos</p>
            <h2 className="title">Ubicación</h2>
          </div>
          <div className="location-container">
            <div className="location-info">
              {[
                { icon: "📍", title: "Dirección", lines: ["Ave Vijil, Blvr. Chorotega, Choluteca"] },
                { icon: "🕐", title: "Horarios",  lines: ["Lun–Vie: 6:00 AM – 10:00 PM", "Sábados: 8:00 AM – 8:00 PM", "Domingos: Cerrado ❌"] },
                { icon: "📞", title: "Contacto",  lines: ["9531-6341"] },
              ].map(({ icon, title, lines }) => (
                <div className="info-item" key={title}>
                  <div className="info-icon">{icon}</div>
                  <div><h4>{title}</h4>{lines.map((l) => <p key={l}>{l}</p>)}</div>
                </div>
              ))}
            </div>
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.978506396673!2d-87.1886974238956!3d13.999603586353443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5fe0b0f5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sBody%20Perfect%20Gym!5e0!3m2!1ses!2shn!4v1699999999999!5m2!1ses!2shn"
                width="100%" height="100%" style={{ border: 0, borderRadius: "14px", minHeight: "320px" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Body Perfect Gym"
              />
              <a href="https://maps.app.goo.gl/beaDnbAfubLWJe5t5" target="_blank" rel="noreferrer" className="btn-gold full" style={{ marginTop: "14px" }}>
                🗺️ Abrir en Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
