export default function Classes() {
  const classes = [
    {
      id: 1,
      name: "Zumba",
      schedule: "Lunes y Miércoles 6pm - 7pm",
      instructor: "María García",
      level: "Todos los niveles",
      icon: "fa-music",
    },
    {
      id: 2,
      name: "CrossFit",
      schedule: "Martes y Jueves 7pm - 8pm",
      instructor: "Juan López",
      level: "Intermedio - Avanzado",
      icon: "fa-fire",
    },
    {
      id: 3,
      name: "Pilates",
      schedule: "Lunes, Miércoles y Viernes 5pm - 6pm",
      instructor: "Laura Rodríguez",
      level: "Todos los niveles",
      icon: "fa-person",
    },
    {
      id: 4,
      name: "Yoga",
      schedule: "Martes y Jueves 6pm - 7pm",
      instructor: "Carlos Pérez",
      level: "Todos los niveles",
      icon: "fa-spa",
    },
    {
      id: 5,
      name: "Boxeo",
      schedule: "Lunes, Miércoles y Viernes 7pm - 8pm",
      instructor: "Roberto Martínez",
      level: "Intermedio - Avanzado",
      icon: "fa-hand-fist",
    },
    {
      id: 6,
      name: "Spinning",
      schedule: "Martes y Jueves 5pm - 6pm",
      instructor: "Andrea Silva",
      level: "Todos los niveles",
      icon: "fa-bicycle",
    },
  ];

  return (
    <section className="py-20 px-5 bg-[#0a0a0a]">
      <h2 className="section-title">NUESTRAS CLASES</h2>
      <p className="section-subtitle">Clases grupales para todos los objetivos</p>
      
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {classes.map((classe) => (
            <div 
              key={classe.id} 
              className="bg-[#111] rounded-lg overflow-hidden border-2 border-gray-800 hover:border-[#ffb800] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffb800]/20 flex flex-col h-full"
            >
              {/* Espacio para imagen */}
              <div className="h-56 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center border-b border-gray-800">
                <div className="text-7xl text-[#ffb800]">
                  <i className={`fas ${classe.icon}`}></i>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">{classe.name}</h3>
                
                {/* Información centrada */}
                <div className="space-y-3 text-white mb-6 flex-grow">
                  <div className="flex items-center justify-center gap-3">
                    <i className="fas fa-clock text-[#ffb800]"></i>
                    <span className="text-sm text-center">{classe.schedule}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <i className="fas fa-user text-[#ffb800]"></i>
                    <span className="text-sm text-center">{classe.instructor}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <i className="fas fa-chart-line text-[#ffb800]"></i>
                    <span className="text-sm text-center">{classe.level}</span>
                  </div>
                </div>

                {/* Botón al final */}
                <button className="w-full bg-[#ffb800] text-black px-6 py-3 rounded font-semibold transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:-translate-y-0.5">
                  Registrarme
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de beneficios */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-[#111] to-[#1a1a1a] rounded-lg p-8 border-2 border-[#ffb800] w-full max-w-7xl">
          <h3 className="text-2xl font-bold text-[#ffb800] mb-8 text-center">¿Por qué unirse a nuestras clases?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-check-circle text-[#ffb800] text-xl"></i>
              <span className="text-white text-center">Entrenamientos guiados por expertos</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-check-circle text-[#ffb800] text-xl"></i>
              <span className="text-white text-center">Comunidad motivadora</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-check-circle text-[#ffb800] text-xl"></i>
              <span className="text-white text-center">Variedad de disciplinas</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <i className="fas fa-check-circle text-[#ffb800] text-xl"></i>
              <span className="text-white text-center">Horarios flexibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
