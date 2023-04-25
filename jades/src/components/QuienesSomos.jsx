import toallas from '@assets/toallas.png'
export function QuienesSomos() {
  return (
    <section className="quienesSomos">
      <h2 className="quienesSomos_title">¿Quiénes somos?</h2>
      <div className="quienesSomos_container">

        <div className="quienesSomos_contenido">
          <h3 className="quienesSomos_subtitle">
            VISION
          </h3>
          <p className="quienesSomos_text">
            Como visión se tiene la concientización sobre la implementación del habito de reutilización y el cuidado del medio ambiente , además mostrar una mirada
            mas ecológica de artículos de un solo uso.
          </p>
        </div>
        <div className="quienesSomos_contenido">
          <img src={toallas} alt="" className="quienesSomos_img" />
        </div>
        <div className="quienesSomos_contenido">
          <h3 className="quienesSomos_subtitle">
            MISION
          </h3>
          <p className="quienesSomos_text">
            La misión de nuestra empresa será crear productos altamente efectivos y sostenibles mientras que al mismo tiempo educar a los consumidores sobre la importancia de elegir productos ecológicos para el cuidado personal y el hogar.
          </p>
        </div>


      </div>
    </section>
  )
}