import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/about/About'
import SignUp from './pages/auth/SignUp'
import Navbar from './components/Navbar'
import CategoryAll from './pages/CategoryAll'
import NotFound from './pages/error/NotFound'
import { LogIn } from 'lucide-react'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/by-category/:categoryName ' element={<CategoryAll />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

{
  /* <Route path="/:lan/:fatherCategory/:innerCategory/:id"/> */
}
// https://olcha.uz/ru/manufacturer/acer/noutbuki

export default App
