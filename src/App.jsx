import HomePage from './pages/HomePage/HomePage'
import ProductCategory from './pages/ProductCategory/ProductCategory'
import ProductDetail from './pages/ProductCategory/ProductDetail/ProductDetail'
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import CartPage from './pages/CartPage/CartPage'
import PaymentPage from './pages/CartPage/PaymentPage/PaymentPage'
import { Routes, Route } from 'react-router-dom'
import { mockData } from '../src/mock-data'
import Navbar from './components/NavBar/NavBar'
import Profile from './pages/Profile/Profile'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage mockData={mockData} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/smartphone" element={<ProductCategory products={mockData.products.smartphone} />} />
        <Route path="/tablet" element={<ProductCategory products={mockData.products.tablet} />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      </Routes>
      {/* <HomePage></HomePage> */}
      {/* <ProductCategory> </ProductCategory> */}
      {/* <ProductDetail></ProductDetail> */}
      {/* <Login></Login> */}
      {/* <CartPage></CartPage> */}
      {/* <PaymentPage></PaymentPage> */}
    </>
  )
}

export default App
