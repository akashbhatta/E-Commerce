import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import CartProvider from './context/CartContext'
import CartPages from './pages/CartPages'
import Productspage from './pages/Productspage'
import SingleProduct from './pages/SingleProduct'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/common/ProtectedRoute'

function App() {
  return (
    <AuthProvider>

    <CartProvider>
    <Routes>
      <Route
      path='/'
      element={<MainLayout />}>
      <Route index element={<Homepage />}/>
      <Route path='products' element={<Productspage />}/>
      <Route path='products/:id' element={
        <ProtectedRoute>
          <SingleProduct/>
      </ProtectedRoute>}/>  
      <Route path='cart' element={<CartPages />}/>
      <Route path='login' element={<LoginPage />} />
     </Route> 
     <Route path="*" element={<NotFound />} />          

    </Routes>
    </CartProvider>
    </AuthProvider>
  )
}

export default App