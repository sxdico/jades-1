import '../src/css/style.css'
import { HomePague } from './components/HomePague.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Ecopads } from './components/Ecopads'

function App() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePague/>} />
        <Route path='/ecopads' exact element={<Ecopads></Ecopads>} />
      </Routes>
    </BrowserRouter>


  </div>
  )


}

export default App
