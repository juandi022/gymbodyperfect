import "./About.css";

export default function About() {
  return (
    <>
      {/* HERO */}
      <header className="hero-header-about">
        <section className="hero-content" style={{ textAlign: "center", padding: "0 20px" }}>
          <h3>Conoce Nuestra Historia</h3>
          <h1>
            BodyPerfect Gym <span>Más que un gimnasio, una familia</span>
          </h1>
        </section>
      </header>

      <main>
        {/* HISTORIA */}
        <section className="history-section" id="historia">
          <h2 className="section-title">Nuestra Historia</h2>
          <p className="section-subtitle">Los Inicios de BodyPerfect Gym</p>
          <p className="section-description">De un sueño familiar a una realidad transformadora</p>

          <div className="history-content">
            <div className="history-img">
              <div className="img-frame">
                <img src="/img/imagengymfuera.jpg" alt="Historia de BodyPerfect Gym" />
              </div>
              <div className="history-stats">
                <div className="stat">
                  <span className="stat-number">12+</span>
                  <span className="stat-label">Años de experiencia</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Miembros transformados</span>
                </div>
              </div>
            </div>

            <div className="history-text">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="timeline-content">
                    <h3>2012 - El Comienzo</h3>
                    <p>
                      BodyPerfect Gym inauguró su primera planta el 15 de noviembre de 2012, con la
                      presencia del entonces alcalde Quintín, marcando el inicio de un proyecto que
                      cambiaría vidas.
                    </p>
                    <p>
                      Nacida de la necesidad de un espacio de calidad donde la disciplina y el
                      bienestar fueran prioridad, la visión familiar se convirtió en un referente
                      fitness en la región.
                    </p>
                    <p>
                      De una sola planta a un centro integral de entrenamiento, manteniendo siempre
                      los valores familiares y el compromiso con cada miembro de nuestra comunidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISIÓN VISIÓN VALORES */}
        <section className="mv-section" id="mvv">
          <h2 className="section-title">Misión • Visión • Valores</h2>
          <p className="section-subtitle">Los pilares que nos definen y nos impulsan cada día</p>

          <div className="mv-container">
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="mv-img">
                <img src="/img/Imagen de WhatsApp 2025-12-04 a las 23.11.59_c81d1579.jpg" alt="Misión" />
              </div>
              <h3>Misión</h3>
              <p>
                Nuestra misión es transformar la vida de cada persona que cruza nuestras puertas,
                ofreciendo un entrenamiento accesible, disciplinado y de calidad, guiado por los
                principios y la dedicación de la familia Aroca.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="mv-img">
                <img src="/img/Imagen de WhatsApp 2025-12-04 a las 23.11.59_c81d1579.jpg" alt="Visión" />
              </div>
              <h3>Visión</h3>
              <p>
                Ser el gimnasio líder y referente de la región, impulsado por la visión de Rubén
                Darío Aroca y su familia: un lugar donde la disciplina, el crecimiento personal y la
                superación constante formen parte del día a día.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-heart"></i>
              </div>
              <div className="mv-img">
                <img src="/img/Imagen de WhatsApp 2025-12-04 a las 23.11.59_c81d1579.jpg" alt="Valores" />
              </div>
              <h3>Valores</h3>
              <p>
                Guiados por principios sólidos que reflejan nuestro compromiso con cada miembro de
                nuestra comunidad fitness.
              </p>
            </div>
          </div>

          {/* DECLARACIÓN */}
          <div className="mv-declaration">
            <div className="declaration-content">
              <i className="fas fa-quote-right"></i>
              <h3>Nuestro Compromiso</h3>
              <p>
                En BodyPerfect Gym, cada día trabajamos para crear un ambiente donde la superación
                personal, el apoyo comunitario y la excelencia en el servicio sean nuestra carta de
                presentación. Nos esforzamos por ofrecer instalaciones, programas y atención de alto
                nivel, fomentando un ambiente donde todos se apoyen, motiven y avancen juntos.
              </p>
              <div className="signature">
                <p>La Familia Aroca</p>
                <span>Fundadores de BodyPerfect Gym</span>
                <img src="/img/firma.jpg" alt="Firma BodyPerfect Gym" className="signature-img" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}