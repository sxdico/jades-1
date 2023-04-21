
import '../src/css/style.css'
import { Hero } from './components/Hero.jsx'
import { QuienesSomos } from './components/QuienesSomos'
import { Navbar } from './components/Navbar.jsx'
function App() {

  return (
    <div className="layaout">
      <Navbar></Navbar>
      <Hero></Hero>
      <QuienesSomos></QuienesSomos>
    </div>

  )
}

export default App
