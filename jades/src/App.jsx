import '../src/css/style.css'
import { Hero } from './components/Hero.jsx'
import { QuienesSomos } from './components/QuienesSomos'
import { Navbar } from './components/Navbar.jsx'
import { useState, useEffect } from 'react';
import { Carga } from './components/Carga.jsx';
//import { Ecopads } from './components/Ecopads.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Carga></Carga>
      ) : (
        <div className="layaout">
          <header>
            <Navbar></Navbar>
          </header>
          <Hero></Hero>
          <section>
            <QuienesSomos></QuienesSomos>
          </section>

        </div>

      )}
    </div>


  )
}

export default App
