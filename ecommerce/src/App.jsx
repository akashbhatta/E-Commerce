import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import CartProvider from './context/CartContext'
import CartPages from './pages/CartPages'
import Productspage from './pages/Productspage'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <CartProvider>
    <Routes>
      <Route
      path='/'
      element={<MainLayout />}>
      <Route index element={<Homepage />}/>
      <Route path='products' element={<Productspage />}/>
      <Route path='products/:id' element={<SingleProduct />}/>
      <Route path='cart' element={<CartPages />}/>
     </Route> 
     <Route path="*" element={<NotFound />} />          

    </Routes>
    </CartProvider>
  )
}

export default App