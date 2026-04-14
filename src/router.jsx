import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Pricing from './pages/Pricing'
import Services from './pages/Services'
import Shedule from './pages/Shedule'
import Taekwondo from './pages/Taekwondo'
import Team from './pages/Team'
import TeamDetail from './pages/TeamDetail'
import Class from './pages/class'
import Machines from './pages/machines'



export default function Router() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shedule" element={<Shedule />} />
            <Route path="/taekwondo" element={<Taekwondo />} />
            <Route path="/class" element={<Class />} />
            <Route path="/machines" element={<Machines />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}