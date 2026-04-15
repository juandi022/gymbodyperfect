import "./Taekwondo.css";

export default function Taekwondo() {
  return (
    <>
      {/* HERO */}
      <header className="tkd-hero">
        <span className="tkd-badge">🥋 Escuela de Taekwon-Do ITF</span>
        <h1>Gral. Choi Hong Hi <span>Más que una escuela, una enseñanza de vida 🙏</span></h1>
        <p className="tkd-hero-sub">Formando campeones desde 2019 en Choluteca, Honduras</p>
      </header>

      <main>
        {/* STATS */}
        <section className="tkd-stats">
          {[
            { n: "6",   l: "📅 Años de experiencia" },
            { n: "40+", l: "👥 Alumnos inscritos"   },
            { n: "4",   l: "🥋 Cinturones negros"   },
          ].map(({ n, l }) => (
            <div className="tkd-stat" key={l}>
              <span>{n}</span>
              <p>{l}</p>
            </div>
          ))}
        </section>

        {/* HISTORIA */}
        <section className="tkd-section" id="historia">
          <div className="section-header">
            <p className="label">📖 Nuestra historia</p>
            <h2>¿Quiénes somos?</h2>
            <p className="sub">De un sueño a representar a Honduras en el mundo 🌎</p>
          </div>
          <div className="tkd-history">
            <div className="img-frame">
              <img src="/img/fotooscar.jpg" alt="Taekwondo ITF" />
            </div>
            <div className="tkd-timeline">
              <div className="t-row">
                <div className="t-dot">📅</div>
                <div>
                  <h4>2019 — El inicio</h4>
                  <p>Inició la escuela "General Choi Hong Hi", nombrada en honor al fundador del Taekwon-Do ITF. Con 4 cinturones negros certificados por la ITF y la AOHT.</p>
                </div>
              </div>
              <div className="t-row">
                <div className="t-dot">🏆</div>
                <div>
                  <h4>Logros internacionales</h4>
                  <ul className="tkd-list">
                    <li>🥇 Campeonato Panamericano — Ocala 2019</li>
                    <li>🥇 Copa Mundo — Argentina 2022</li>
                    <li>🥇 Panamericano — Puerto Rico 2024</li>
                    <li>🥇 Mundial — Jesolo, Italia</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLASES + INSTRUCTOR */}
        <section className="tkd-section dark" id="clases">
          <div className="section-header">
            <p className="label">🗓️ Clases</p>
            <h2>Horarios y equipo</h2>
          </div>
          <div className="tkd-bottom">
            <div className="tkd-classes">
              {[
                { icon: "👥", title: "Clases regulares",  schedule: "Lun–Jue · 6:00 PM – 7:00 PM", desc: "Para todos los niveles, desde principiantes hasta avanzados." },
                { icon: "🎓", title: "Exámenes de grado", schedule: "Cada 3 meses · Según programación", desc: "Evaluaciones oficiales para ascenso de cinturones." },
              ].map(({ icon, title, schedule, desc }) => (
                <div className="tkd-class-card" key={title}>
                  <div className="tkd-class-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p className="tkd-schedule">🕐 {schedule}</p>
                  <p>{desc}</p>
                </div>
              ))}
            </div>

            <div className="tkd-instructor">
              <div className="instructor-img">
                <img src="/img/fotooscar.jpg" alt="Oscar Aroca" />
              </div>
              <h3>Oscar Aroca</h3>
              <p className="rank">🥋 IV Dan — Instructor Jefe</p>
              <p className="cert">🏅 Certificado ITF Internacional</p>
              <a href="https://www.instagram.com/arocaaatkd" target="_blank" rel="noreferrer" className="insta-btn">
                <i className="fab fa-instagram" /> Instagram
              </a>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="tkd-section" id="beneficios">
          <div className="section-header">
            <p className="label">✨ ¿Por qué practicarlo?</p>
            <h2>Beneficios del Taekwon-Do</h2>
            <p className="sub">Más que un deporte, un estilo de vida 🙌</p>
          </div>
          <div className="tkd-benefits">
            {[
              { icon: "❤️",  title: "Salud física",      desc: "Mejora la resistencia, fuerza y flexibilidad del cuerpo." },
              { icon: "🧠",  title: "Desarrollo mental",  desc: "Concentración, disciplina y confianza en uno mismo."       },
              { icon: "🤝",  title: "Valores morales",    desc: "Respeto, humildad, perseverancia y espíritu indomable."    },
              { icon: "🛡️", title: "Defensa personal",   desc: "Técnicas efectivas de autodefensa para situaciones reales."},
            ].map(({ icon, title, desc }) => (
              <div className="tkd-benefit" key={title}>
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}