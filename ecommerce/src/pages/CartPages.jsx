import React from 'react'
import { useCart } from '../hooks/useCart'
import ProductCard from '../components/products/ProductCard';

function CartPage() {
    const {items, cartCount} = useCart();

    console.log("items in cart", items)
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Highlighted Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((product) =>(
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