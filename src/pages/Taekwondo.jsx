import "./Taekwondo.css";

export default function Taekwondo() {
  return (
    <>
      {/* HERO */}
      <header className="hero-header-tkd">
        <section className="hero-content" style={{ textAlign: "center", padding: "0 20px" }}>
          <h3>Escuela de Taekwon-DO ITF</h3>
          <h1>
            Gral. General Choi Hong Hi{" "}
            <span>Más que una escuela, una enseñanza de vida</span>
          </h1>
        </section>
      </header>

      <main>
        {/* HISTORIA */}
        <section className="history-section" id="historia">
          <div className="history-content">
            <div className="history-img">
              <div className="img-frame">
                <img src="/img/imagentkd.jpg" alt="Historia de Taekwon-Do ITF" />
              </div>
              <div className="history-stats">
                <div className="stat">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Años de experiencia</span>
                </div>
                <div className="stat">
                  <span className="stat-number">40+</span>
                  <span className="stat-label">Alumnos inscritos</span>
                </div>
                <div className="stat">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Cinturones negros</span>
                </div>
              </div>
            </div>

            <div className="history-text">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-history"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>2019 - Un poco de historia...</h3>
                    <p>
                      En 2019 inició este proyecto de la escuela de Taekwon-Do ITF "General Choi
                      Hong Hi". El nombre viene del fundador de este bello arte marcial coreano.
                    </p>
                    <p>
                      La escuela cuenta con 4 cinturones negros certificados por la ITF y por la
                      AOHT, garantizando la calidad y autenticidad de la enseñanza.
                    </p>
                    <p>
                      Con 6 años de experiencia, la escuela ha luchado siempre por los primeros
                      puestos a nivel nacional y ha exportado talentos a la selección nacional de
                      Honduras.
                    </p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>Logros Internacionales</h3>
                    <p>Nuestros alumnos han participado en competencias de talla internacional:</p>
                    <ul className="achievements-list">
                      <li><i className="fas fa-medal"></i> Campeonato Panamericano de Ocala 2019</li>
                      <li><i className="fas fa-medal"></i> Copa Mundo de Argentina 2022</li>
                      <li><i className="fas fa-medal"></i> Panamericano de Puerto Rico 2024</li>
                      <li><i className="fas fa-medal"></i> Mundial de Jesolo, Italia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLASES */}
        <section className="classes-section" id="clases">
          <h2 className="section-title">Clases de Taekwon-Do</h2>
          <p className="section-subtitle">Horarios y programas disponibles</p>

          <div className="classes-container">
            <div className="class-card">
              <div className="class-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Clases Regulares</h3>
              <div className="class-schedule">
                <p><i className="fas fa-calendar-alt"></i> Lunes a Jueves</p>
                <p><i className="fas fa-clock"></i> 6:00 PM - 7:00 PM</p>
              </div>
              <p className="class-description">
                Clases para todos los niveles, desde principiantes hasta avanzados.
              </p>
            </div>

            <div className="class-card">
              <div className="class-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Exámenes de Grado</h3>
              <div className="class-schedule">
                <p><i className="fas fa-calendar-alt"></i> Cada 3 meses</p>
                <p><i className="fas fa-clock"></i> Según programación</p>
              </div>
              <p className="class-description">
                Evaluaciones oficiales para ascenso de cinturones.
              </p>
            </div>
          </div>
        </section>

        {/* INSTRUCTORES */}
        <section className="instructors-section" id="instructores">
          <h2 className="section-title">Nuestros Instructores</h2>
          <p className="section-subtitle">Profesionales certificados por la ITF</p>

          <div className="instructors-container">
            <div className="instructor-card">
              <div className="instructor-img">
                <img src="/img/fotooscar.jpg" alt="Oscar Aroca" />
              </div>
              <h3>Oscar Aroca</h3>
              <p className="instructor-rank">IV Dan - Instructor Jefe</p>
              <div className="instructor-cert">
                <i className="fas fa-certificate"></i>
                <span>Certificado ITF Internacional</span>
              </div>
              <div className="instructor-social">
                <a href="https://www.instagram.com/arocaaatkd" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section className="benefits-section" id="beneficios">
          <h2 className="section-title">Beneficios del Taekwon-Do</h2>
          <p className="section-subtitle">Más que un deporte, un estilo de vida</p>

          <div className="benefits-container">
            {[
              { icon: "fa-heartbeat", title: "Salud Física", desc: "Mejora la resistencia, fuerza y flexibilidad. Desarrollo integral del cuerpo." },
              { icon: "fa-brain", title: "Desarrollo Mental", desc: "Fomenta la concentración, disciplina y autocontrol. Mejora la confianza en uno mismo." },
              { icon: "fa-hands-helping", title: "Valores Morales", desc: "Enseña respeto, humildad, perseverancia y espíritu indomable." },
              { icon: "fa-shield-alt", title: "Defensa Personal", desc: "Técnicas efectivas de autodefensa aplicables en situaciones reales." },
            ].map((b) => (
              <div className="benefit-item" key={b.title}>
                <i className={`fas ${b.icon}`}></i>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}