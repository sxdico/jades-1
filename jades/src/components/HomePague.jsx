import { Hero } from './Hero.jsx'
import { QuienesSomos } from './QuienesSomos'
import { Navbar } from './Navbar.jsx'
import { useState, useEffect } from 'react';
import { Carga } from './Carga.jsx';

export function HomePague(){

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

