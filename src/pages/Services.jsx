export default function Services() {
  return (
    <section className="py-20 px-5 bg-[#0a0a0a]">
      <h2 className="section-title">SERVICIOS</h2>
      <p className="section-subtitle">Entrenamiento personalizado para todos los niveles.</p>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          <div className="bg-[#111] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#ffb800] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffb800]/20 flex flex-col h-full">
            {/* Espacio para imagen */}
            <div className="h-40 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center border-b border-gray-800">
              <div className="text-5xl text-[#ffb800]">
                <i className="fas fa-dumbbell"></i>
              </div>
            </div>
            {/* Contenido */}
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-bold text-white mb-3">Entrenadores personales</h3>
              <p className="text-white mb-6 flex-grow">Contamos con los mejores instructores de la zona sur</p>
              <a href="#/team" className="btn">conoce más</a>
            </div>
          </div>
          <div className="bg-[#111] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#ffb800] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffb800]/20 flex flex-col h-full">
            {/* Espacio para imagen */}
            <div className="h-40 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center border-b border-gray-800">
              <div className="text-5xl text-[#ffb800]">
                <i className="fas fa-users"></i>
              </div>
            </div>
            {/* Contenido */}
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-bold text-white mb-3">Clases Grupales</h3>
              <p className="text-white mb-6 flex-grow">Descubre nuestras clases grupales</p>
              <a href="#/class" className="btn">conoce más</a>
            </div>
          </div>
          <div className="bg-[#111] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#ffb800] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffb800]/20 flex flex-col h-full">
            {/* Espacio para imagen */}
            <div className="h-40 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center border-b border-gray-800">
              <div className="text-5xl text-[#ffb800]">
                <i className="fas fa-dumbbell"></i>
              </div>
            </div>
            {/* Contenido */}
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-bold text-white mb-3">Instalaciones</h3>
              <p className="text-white mb-6 flex-grow">Contamos con más de 100 máquinas para que te puedas ejercitar</p>
              <a href="#/machines" className="btn">conoce más</a>
            </div>
          </div>
          <div className="bg-[#111] rounded-lg overflow-hidden border-2 border-transparent hover:border-[#ffb800] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-[#ffb800]/20 flex flex-col h-full">
            {/* Espacio para imagen */}
            <div className="h-40 bg-gradient-to-b from-[#1a1a1a] to-[#111] flex items-center justify-center border-b border-gray-800">
              <div className="text-5xl text-[#ffb800]">
                <i className="fas fa-users"></i>
              </div>
            </div>
            {/* Contenido */}
            <div className="p-8 flex flex-col flex-grow text-center">
              <h3 className="text-xl font-bold text-white mb-3">Clases de Taekwondo-ITF</h3>
              <div className="flex-grow">
                <p className="text-white mb-2">Contamos con clases de Taekwon-Do-ITF</p>
                <p className="text-white text-sm mb-2">Horarios: Lunes - Martes - Miércoles - Jueves</p>
                <p className="text-white text-sm mb-6">6pm - 7pm</p>
              </div>
              <a href="#/taekwondo" className="btn">conoce más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}