import React from "react";

const scheduleData = [
  {
    day: "Lunes",
    classes: [
      { time: "5:00 AM - 6:00 AM", name: "Cardio", trainer: "Coach Daniel" },
      { time: "6:00 AM - 7:00 AM", name: "Musculación", trainer: "Coach Andrea" },
      { time: "5:00 PM - 6:00 PM", name: "Funcional", trainer: "Coach Kevin" },
      { time: "6:00 PM - 7:30 PM", name: "Taekwondo", trainer: "Master Lee" }
    ]
  },
  {
    day: "Martes",
    classes: [
      { time: "5:00 AM - 6:00 AM", name: "HIIT", trainer: "Coach Daniel" },
      { time: "6:00 AM - 7:00 AM", name: "Pierna y Glúteo", trainer: "Coach Andrea" },
      { time: "5:00 PM - 6:00 PM", name: "Spinning", trainer: "Coach Kevin" },
      { time: "6:00 PM - 7:30 PM", name: "Taekwondo", trainer: "Master Lee" }
    ]
  },
  {
    day: "Miércoles",
    classes: [
      { time: "5:00 AM - 6:00 AM", name: "Cardio", trainer: "Coach Daniel" },
      { time: "6:00 AM - 7:00 AM", name: "Musculación", trainer: "Coach Andrea" },
      { time: "5:00 PM - 6:00 PM", name: "Abdomen y Core", trainer: "Coach Kevin" },
      { time: "6:00 PM - 7:30 PM", name: "Taekwondo", trainer: "Master Lee" }
    ]
  },
  {
    day: "Jueves",
    classes: [
      { time: "5:00 AM - 6:00 AM", name: "HIIT", trainer: "Coach Daniel" },
      { time: "6:00 AM - 7:00 AM", name: "Zumba", trainer: "Coach Andrea" },
      { time: "5:00 PM - 6:00 PM", name: "Funcional", trainer: "Coach Kevin" },
      { time: "6:00 PM - 7:30 PM", name: "Taekwondo", trainer: "Master Lee" }
    ]
  },
  {
    day: "Viernes",
    classes: [
      { time: "5:00 AM - 6:00 AM", name: "Cardio", trainer: "Coach Daniel" },
      { time: "6:00 AM - 7:00 AM", name: "Musculación", trainer: "Coach Andrea" },
      { time: "5:00 PM - 6:00 PM", name: "Spinning", trainer: "Coach Kevin" },
      { time: "6:00 PM - 7:30 PM", name: "Taekwondo", trainer: "Master Lee" }
    ]
  },
  {
    day: "Sábado",
    classes: [
      { time: "7:00 AM - 8:00 AM", name: "Entrenamiento Funcional", trainer: "Coach Daniel" },
      { time: "8:00 AM - 9:00 AM", name: "Zumba", trainer: "Coach Andrea" },
      { time: "9:00 AM - 10:00 AM", name: "Pierna y Glúteo", trainer: "Coach Kevin" }
    ]
  }
];

function Shedule() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.badge}>BODY PERFECT GYM</span>
          <h1 style={styles.title}>Horarios</h1>
          <p style={styles.subtitle}>
            Revisa nuestros horarios y elige la clase que mejor se adapte a tu rutina.
          </p>
        </div>
      </section>

      <section style={styles.container}>
        <div style={styles.topText}>
          <h2 style={styles.sectionTitle}>Clases disponibles durante la semana</h2>
          <p style={styles.sectionParagraph}>
            Nuestro gimnasio ofrece diferentes horarios para que puedas entrenar con comodidad.
            Encuentra sesiones de cardio, musculación, funcional, spinning y taekwondo.
          </p>
        </div>

        <div style={styles.grid}>
          {scheduleData.map((item) => (
            <div key={item.day} style={styles.card}>
              <div style={styles.cardHeader}>
                <h3 style={styles.day}>{item.day}</h3>
              </div>

              <div style={styles.cardBody}>
                {item.classes.map((gymClass, index) => (
                  <div key={index} style={styles.classBox}>
                    <p style={styles.time}>{gymClass.time}</p>
                    <h4 style={styles.className}>{gymClass.name}</h4>
                    <p style={styles.trainer}>Instructor: {gymClass.trainer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>Notas importantes</h3>
          <p style={styles.infoText}>
            Los horarios pueden cambiar en días festivos o por eventos especiales. Para mayor
            información, comunícate con el gimnasio o visita recepción.
          </p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#0a0a0a",
    minHeight: "100vh",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif"
  },
  hero: {
    minHeight: "55vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    textAlign: "center"
  },
  heroContent: {
    maxWidth: "800px"
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#16c47f",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "18px"
  },
  title: {
    fontSize: "52px",
    margin: "0 0 16px"
  },
  subtitle: {
    fontSize: "18px",
    color: "#dddddd",
    lineHeight: "1.6",
    margin: 0
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px"
  },
  topText: {
    textAlign: "center",
    marginBottom: "40px"
  },
  sectionTitle: {
    fontSize: "34px",
    marginBottom: "12px"
  },
  sectionParagraph: {
    color: "#cfcfcf",
    lineHeight: "1.7",
    maxWidth: "800px",
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px"
  },
  card: {
    backgroundColor: "#141414",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,.25)",
    border: "1px solid rgba(255,255,255,.06)"
  },
  cardHeader: {
    backgroundColor: "#16c47f",
    padding: "18px 20px"
  },
  day: {
    margin: 0,
    color: "#fff",
    fontSize: "24px"
  },
  cardBody: {
    padding: "20px"
  },
  classBox: {
    backgroundColor: "#0d0d0d",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "14px",
    padding: "16px",
    marginBottom: "14px"
  },
  time: {
    margin: "0 0 10px",
    color: "#16c47f",
    fontWeight: "bold"
  },
  className: {
    margin: "0 0 8px",
    fontSize: "20px"
  },
  trainer: {
    margin: 0,
    color: "#bdbdbd"
  },
  infoBox: {
    marginTop: "40px",
    backgroundColor: "#141414",
    padding: "28px",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,.06)"
  },
  infoTitle: {
    marginTop: 0,
    color: "#16c47f"
  },
  infoText: {
    marginBottom: 0,
    color: "#d0d0d0",
    lineHeight: "1.7"
  }
};

export default Shedule;