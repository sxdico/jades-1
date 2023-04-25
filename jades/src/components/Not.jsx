import mundo from "/src/assets/404 img.svg";
export function Not() {
  return (
    <> 
    <p className="text_404">Esta pagina no existe</p>
      <div className="container_404">
        <img className="img_404" src={mundo} alt="" />
        <div className="caja_404">
          <h1 className="title_404">404</h1>
        </div>
      </div>
    </>
  );
}

