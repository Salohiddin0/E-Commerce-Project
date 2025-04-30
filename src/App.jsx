import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/about/About'
import SignUp from './pages/auth/SignUp'
import CategoryAll from './pages/CategoryAll'
import NotFound from './pages/error/NotFound'
import Login from './pages/auth/Login'
import ProductDetail from './components/product/ProductDetail'
import Account from './pages/account/Account'
import Wishlist from './pages/wishlist/Wishlist'
import ViewAllProducts from './pages/ViewAllProducts/ViewAllProducts'
import Admin from './admiin/Admin'
import Cart from './pages/cart/Cart'
import Invoices from './admiin/invoices/Invoices'
import Customers from './admiin/carousel/Carousel'
import ShowAllCarousel from './admiin/carousel/components/ShowAllCarousel'
import AdminLayout from './layout/AdminLayout'
import ProductAdmin from './admiin/products/ProductAdmin'

function App () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<Navbar />} /> */}
        {/* <Route path='/' element={<UserDropdown />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/by-category/:categoryName ' element={<CategoryAll />} />
        <Route path='/product-detail/:id' element={<ProductDetail />} />
        <Route path='/account' element={<Account />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/view-all' element={<ViewAllProducts />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/admin' element={<AdminLayout />}>
          <Route index={true} element={<Admin />} />
          <Route path='product-admin' element={<ProductAdmin />} />
          <Route path='invoices' element={<Invoices />} />
          <Route path='carousel' element={<Customers />} />
          <Route path='add-carousel' element={<ShowAllCarousel />} />
        </Route>

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
