import React from 'react'
import { useCart } from '../hooks/useCart'
import ProductCard from '../components/products/ProductCard';

function CartPage() {
    const { cartItems = [], cartCount } = useCart();

    console.log("items in cart", cartItems)

    if (!cartItems || cartItems.length === 0) {
      return (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Your cart is empty</h1>
        </div>
      )
    }
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Selected Products: {cartCount}</h1>
            <h1 className="text-2xl font-semibold mb-8 text-gray-800">Total Price: ${cartItems.reduce((total, item) => total + item.price, 0)}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cartItems.map((product) =>(
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
            </div>
  )
}
export default CartPage