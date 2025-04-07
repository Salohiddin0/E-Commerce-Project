import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import CategoryAll from './pages/CategoryAll'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/by-category/:categoryName ' element={<CategoryAll />} />
      </Routes>
    </Router>
  )
}

{
  /* <Route path="/:lan/:fatherCategory/:innerCategory/:id"/> */
}
// https://olcha.uz/ru/manufacturer/acer/noutbuki

export default App
