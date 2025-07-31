import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Cst300 from './Pages/Cst300.jsx'
import Cst338 from './Pages/Cst338.jsx'
import Cst363 from './Pages/Cst363.jsx'
import Cst311 from './Pages/Cst311.jsx'
import Cst336 from './Pages/Cst336.jsx'
import Cst462 from './Pages/Cst462.jsx'
import Cst383 from './Pages/Cst383.jsx'
import Cst489 from './Pages/Cst489.jsx'
import Cst499 from './Pages/Cst499.jsx'
import Cst334 from './Pages/Cst334.jsx'
import Cst370 from './Pages/Cst370.jsx'
import Cst438 from './Pages/Cst438.jsx'
import Cst328 from './Pages/Cst328.jsx'
import Cst329 from './Pages/Cst329.jsx'

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cst300" element={<Cst300/>} />
            <Route path="/cst338" element={<Cst338/>} />
            <Route path="/cst363" element={<Cst363/>} />
            <Route path="/cst311" element={<Cst311/>} />
            <Route path="/cst336" element={<Cst336/>} />
            <Route path="/cst462" element={<Cst462/>} />
            <Route path="/cst383" element={<Cst383/>} />
            <Route path="/cst489" element={<Cst489/>} />
            <Route path="/cst499" element={<Cst499/>} />
            <Route path="/cst334" element={<Cst334/>} />
            <Route path="/cst370" element={<Cst370/>} />
            <Route path="/cst438" element={<Cst438/>} />
            <Route path="/cst328" element={<Cst328/>} />
            <Route path="/cst329" element={<Cst329/>} />
        </Routes>
    </Router>
  )
}

export default App
