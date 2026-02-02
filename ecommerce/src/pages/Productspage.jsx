import React, { useEffect, useState } from 'react'
import ProductCard from '../components/products/ProductCard'
import { useCart } from '../hooks/useCart';

export default function Productspage() {

  const { items, loading } = useCart();

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">All Products</h1>
          <p className="text-gray-600 text-lg">Browse our full catalog</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}