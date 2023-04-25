import '../src/css/style.css'
import { HomePague } from './components/HomePague.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Ecopads } from './components/Ecopads'
import { Not } from './components/Not'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePague/>} />
        <Route path='/ecopads' exact element={<Ecopads></Ecopads>} />
        <Route path='*' element={<Not></Not>} />
      </Routes>
    </BrowserRouter>


  </>
  )
}

export default App
