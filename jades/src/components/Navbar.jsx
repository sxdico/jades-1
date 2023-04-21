export function Navbar() {
  const troll = () => {
    alert('Troll no jala aun jeje, curioso');
  }

  
  return(
  <div className="Navbar">
    <div className="container">
      <div className="title">
        <h1 className="logo">JADES</h1>
      </div>
      <div className="content">
        <nav>

        </nav>
      </div>
      <button className="btn_navbar" onClick={troll}>
        <span className="container_btn">
         <span className="top">
         </span>
         <span className="middle"></span>
        </span>
      </button>


    </div>
  </div>
  )
}