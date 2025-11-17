import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import Approach from './pages/Approach'
import Contact from './pages/Contact'
import StartProject from './pages/StartProject'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/start" element={<StartProject />} />
    </Routes>
  )
}

export default App
