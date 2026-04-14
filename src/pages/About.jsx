import "./About.css";

export default function About() {
  return (
    <>
      <header className="hero-about">
        <span className="hero-badge">🏛️ Nuestra Historia</span>
        <h1>BodyPerfect Gym <span>Más que un gimnasio, una familia 🤝</span></h1>
        <p className="hero-sub">Desde 2012 transformando vidas en Choluteca</p>
      </header>

      <main>
        {/* HISTORIA */}
        <section className="section" id="historia">
          <div className="section-header">
            <p className="label">📅 Desde 2012</p>
            <h2>Nuestra Historia</h2>
            <p className="sub">De un sueño familiar a una realidad transformadora 💪</p>
          </div>

          <div className="history">
            <div className="history-left">
              <div className="img-frame">
                <img src="/img/historia.jpg" alt="BodyPerfect Gym" />
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-n">12+</span>
                  <span className="stat-l">📅 Años</span>
                </div>
                <div className="stat">
                  <span className="stat-n">1000+</span>
                  <span className="stat-l">👥 Miembros</span>
                </div>
              </div>
            </div>

            <div className="timeline">
              <div className="t-row">
                <div className="t-dot">📅</div>
                <div>
                  <h4>2012 — El comienzo</h4>
                  <p>BodyPerfect Gym inauguró el <strong>15 de noviembre de 2012</strong>, marcando el inicio de un proyecto que cambiaría vidas en Choluteca.</p>
                  <p>Nacida de la necesidad de un espacio donde la disciplina fuera prioridad, se convirtió en referente fitness de la región.</p>
                </div>
              </div>
              <div className="t-row">
                <div className="t-dot">🏆</div>
                <div>
                  <h4>Hoy — Un referente regional</h4>
                  <p>Más de 1000 miembros han transformado su vida con nosotros. La visión familiar sigue siendo el corazón de todo lo que hacemos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISIÓN VISIÓN VALORES */}
        <section className="section dark" id="mvv">
          <div className="section-header">
            <p className="label">✨ Lo que nos define</p>
            <h2>Misión · Visión · Valores</h2>
            <p className="sub">Los pilares que nos impulsan cada día 🎯</p>
          </div>

          <div className="cards">
            {[
              { icon: "🎯", title: "Misión",  text: "Transformar la vida de cada persona que cruza nuestras puertas con entrenamiento accesible y de calidad." },
              { icon: "👁️", title: "Visión",  text: "Ser el gimnasio líder de la región donde la disciplina y el crecimiento personal sean parte del día a día." },
              { icon: "❤️", title: "Valores", text: "Principios sólidos que reflejan nuestro compromiso con cada miembro de la comunidad BodyPerfect." },
            ].map(({ icon, title, text }) => (
              <div className="card" key={title}>
                <div className="card-icon">{icon}</div>
                <img src="/img/historia.jpg" alt={title} className="card-img" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>

          <div className="declaration">
            <span className="decl-badge">💬 Nuestro compromiso</span>
            <h3>Una promesa que cumplimos cada día</h3>
            <p>Trabajamos para crear un ambiente donde la superación personal, el apoyo comunitario y la excelencia sean nuestra carta de presentación. Cada miembro es parte de nuestra familia. 🙌</p>
            <div className="signature">
              <img src="/img/historia.jpg" alt="Firma" className="sig-img" />
              <div>
                <p>La Familia Aroca</p>
                <span>🏛️ Fundadores de BodyPerfect Gym</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}