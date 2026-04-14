import React from "react";

const scheduleData = [
  { day: "Lunes",     classes: [{ time: "5:00 AM - 6:00 AM", name: "Cardio",                   trainer: "Coach Daniel" }, { time: "6:00 AM - 7:00 AM", name: "Musculación",        trainer: "Coach Andrea" }, { time: "5:00 PM - 6:00 PM", name: "Funcional",          trainer: "Coach Kevin" }, { time: "6:00 PM - 7:30 PM", name: "Taekwondo",          trainer: "Master Lee"   }] },
  { day: "Martes",    classes: [{ time: "5:00 AM - 6:00 AM", name: "HIIT",                     trainer: "Coach Daniel" }, { time: "6:00 AM - 7:00 AM", name: "Pierna y Glúteo",    trainer: "Coach Andrea" }, { time: "5:00 PM - 6:00 PM", name: "Spinning",           trainer: "Coach Kevin" }, { time: "6:00 PM - 7:30 PM", name: "Taekwondo",          trainer: "Master Lee"   }] },
  { day: "Miércoles", classes: [{ time: "5:00 AM - 6:00 AM", name: "Cardio",                   trainer: "Coach Daniel" }, { time: "6:00 AM - 7:00 AM", name: "Musculación",        trainer: "Coach Andrea" }, { time: "5:00 PM - 6:00 PM", name: "Abdomen y Core",     trainer: "Coach Kevin" }, { time: "6:00 PM - 7:30 PM", name: "Taekwondo",          trainer: "Master Lee"   }] },
  { day: "Jueves",    classes: [{ time: "5:00 AM - 6:00 AM", name: "HIIT",                     trainer: "Coach Daniel" }, { time: "6:00 AM - 7:00 AM", name: "Zumba",              trainer: "Coach Andrea" }, { time: "5:00 PM - 6:00 PM", name: "Funcional",          trainer: "Coach Kevin" }, { time: "6:00 PM - 7:30 PM", name: "Taekwondo",          trainer: "Master Lee"   }] },
  { day: "Viernes",   classes: [{ time: "5:00 AM - 6:00 AM", name: "Cardio",                   trainer: "Coach Daniel" }, { time: "6:00 AM - 7:00 AM", name: "Musculación",        trainer: "Coach Andrea" }, { time: "5:00 PM - 6:00 PM", name: "Spinning",           trainer: "Coach Kevin" }, { time: "6:00 PM - 7:30 PM", name: "Taekwondo",          trainer: "Master Lee"   }] },
  { day: "Sábado",    classes: [{ time: "7:00 AM - 8:00 AM", name: "Entrenamiento Funcional",  trainer: "Coach Daniel" }, { time: "8:00 AM - 9:00 AM", name: "Zumba",              trainer: "Coach Andrea" }, { time: "9:00 AM - 10:00 AM", name: "Pierna y Glúteo",   trainer: "Coach Kevin" }] },
];

const GOLD = "#ffb800";

export default function Shedule() {
  return (
    <div style={s.page}>
      <section style={s.hero}>
        <p style={s.label}>Body Perfect Gym</p>
        <h1 style={s.heroTitle}>Horarios</h1>
        <p style={s.heroSub}>Revisa nuestros horarios y elige la clase que mejor se adapte a tu rutina.</p>
      </section>

      <section style={s.container}>
        <div style={s.topText}>
          <h2 style={s.sectionTitle}>Clases disponibles durante la semana</h2>
          <p style={s.sectionParagraph}>Encuentra sesiones de cardio, musculación, funcional, spinning y taekwondo en horarios de mañana y tarde.</p>
        </div>
        <div style={s.grid}>
          {scheduleData.map((item) => (
            <div key={item.day} style={s.card}>
              <div style={s.cardHeader}><h3 style={s.day}>{item.day}</h3></div>
              <div style={s.cardBody}>
                {item.classes.map((c, i) => (
                  <div key={i} style={s.classBox}>
                    <p style={s.time}>{c.time}</p>
                    <h4 style={s.className}>{c.name}</h4>
                    <p style={s.trainer}>Instructor: {c.trainer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={s.infoBox}>
          <h3 style={s.infoTitle}>Notas importantes</h3>
          <p style={s.infoText}>Los horarios pueden cambiar en días festivos o por eventos especiales. Para mayor información, comunícate con el gimnasio o visita recepción.</p>
        </div>
      </section>
    </div>
  );
}

const s = {
  page:            { backgroundColor: "#0a0a0a", minHeight: "100vh", color: "#fff", fontFamily: "Arial, sans-serif" },
  hero:            { minHeight: "55vh", backgroundImage: "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 20px", textAlign: "center" },
  label:           { fontSize: "12px", letterSpacing: "3px", color: GOLD, textTransform: "uppercase", marginBottom: "12px" },
  heroTitle:       { fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 900, margin: "0 0 16px" },
  heroSub:         { fontSize: "17px", color: "#ccc", lineHeight: 1.6, margin: 0, maxWidth: "600px" },
  container:       { maxWidth: "1200px", margin: "0 auto", padding: "60px 20px" },
  topText:         { textAlign: "center", marginBottom: "40px" },
  sectionTitle:    { fontSize: "28px", marginBottom: "12px" },
  sectionParagraph:{ color: "#aaa", lineHeight: 1.7, maxWidth: "700px", margin: "0 auto" },
  grid:            { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" },
  card:            { backgroundColor: "#141414", borderRadius: "16px", overflow: "hidden", border: "1px solid #2a2a2a" },
  cardHeader:      { backgroundColor: GOLD, padding: "16px 20px" },
  day:             { margin: 0, color: "#000", fontSize: "22px", fontWeight: 800 },
  cardBody:        { padding: "18px" },
  classBox:        { backgroundColor: "#0d0d0d", border: "1px solid #222", borderRadius: "12px", padding: "14px", marginBottom: "12px" },
  time:            { margin: "0 0 8px", color: GOLD, fontWeight: 700, fontSize: "13px" },
  className:       { margin: "0 0 6px", fontSize: "17px", fontWeight: 700 },
  trainer:         { margin: 0, color: "#888", fontSize: "13px" },
  infoBox:         { marginTop: "40px", backgroundColor: "#141414", padding: "28px", borderRadius: "16px", border: `1px solid ${GOLD}` },
  infoTitle:       { marginTop: 0, color: GOLD, fontSize: "18px", fontWeight: 700 },
  infoText:        { marginBottom: 0, color: "#ccc", lineHeight: 1.7 },
};