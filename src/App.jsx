import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/about/About'
import SignUp from './pages/auth/SignUp'
import Navbar from './components/Navbar'
import CategoryAll from './pages/CategoryAll'
import NotFound from './pages/error/NotFound'
import Login from './pages/auth/Login'
import UserDropdown from './pages/UserDropdown/UserDropdown'
import ProductDetail from './components/product/ProductDetail'
import Account from './pages/account/Account'
import Wishlist from './pages/wishlist/Wishlist'
import ViewAllProducts from './pages/ViewAllProducts/ViewAllProducts'
import Admin from './admiin/Admin'
import Cart from './pages/cart/Cart'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/by-category/:categoryName ' element={<CategoryAll />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<UserDropdown />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/account' element={<Account />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/view-all' element={<ViewAllProducts />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

{
  /* <Route path="/:lan/:fatherCategory/:innerCategory/:id"/> */
}
// https://olcha.uz/ru/manufacturer/acer/noutbuki

export default App
