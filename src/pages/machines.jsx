export default function Machines() {
  const machines = [
    { id: 1, name: "Treadmill", category: "Cardio", icon: "fa-person-hiking" },
    { id: 2, name: "Bicicleta Estática", category: "Cardio", icon: "fa-bicycle" },
    { id: 3, name: "Máquina Orbital", category: "Cardio", icon: "fa-ring" },
    { id: 4, name: "Remo", category: "Cardio", icon: "fa-water" },
    { id: 5, name: "Prensa de Pierna", category: "Fuerza", icon: "fa-dumbbell" },
    { id: 6, name: "Banco de Pecho", category: "Fuerza", icon: "fa-expand" },
    { id: 7, name: "Máquina Smith", category: "Fuerza", icon: "fa-lines-leaning" },
    { id: 8, name: "Poleas", category: "Fuerza", icon: "fa-chain" },
  ];

  return (
    <section className="py-20 px-5 bg-[#0a0a0a]">
      <h2 className="section-title">NUESTRAS MÁQUINAS</h2>
      <p className="section-subtitle">Más de 100 máquinas de última generación</p>
      
      <div className="flex justify-center mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {machines.map((machine) => (
            <div 
              key={machine.id} 
              className="bg-[#111] rounded-lg overflow-hidden border-2 border-gray-800 hover:border-[#ffb800] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffb800]/20 flex flex-col h-full"
            >
              {/* Espacio para imagen */}
              <div className="h-48 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center border-b border-gray-800">
                <div className="text-6xl text-[#ffb800]">
                  <i className={`fas ${machine.icon}`}></i>
                </div>
              </div>
              
              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-bold text-white mb-2">{machine.name}</h3>
                <p className="text-sm text-white flex-grow">{machine.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de servicios */}
      <div className="flex justify-center">
        <div className="bg-[#111] rounded-lg p-8 border-2 border-[#ffb800] w-full max-w-7xl">
          <h3 className="text-2xl font-bold text-[#ffb800] mb-6 text-center">Servicios Incluidos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3 justify-center">
              <i className="fas fa-check text-[#ffb800] text-lg"></i>
              <span className="text-white">Acceso 24/7 a todas las máquinas</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <i className="fas fa-check text-[#ffb800] text-lg"></i>
              <span className="text-white">Mantenimiento regular</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <i className="fas fa-check text-[#ffb800] text-lg"></i>
              <span className="text-white">Personal capacitado disponible</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <i className="fas fa-check text-[#ffb800] text-lg"></i>
              <span className="text-white">Área segura y limpia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
