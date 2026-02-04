import React, { useState } from 'react'
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

function ProductCard({product}) {
 if (!product) return null;
 const [isAdded, setIsAdded] = useState(false)
 const { addToCart, isInCart, removeFromCart } = useCart();
 const isCart = isInCart(product.id);

 function addProductToCart() {
 if (typeof addToCart === 'function') {
 addToCart(product);
 handleAddCart();
 }
 }

 function removeProductFromCart() {
 if (typeof removeFromCart === 'function') removeFromCart(product.id);
 }

 const handleAddCart = () => {
 setIsAdded(true)
 setTimeout(() => setIsAdded(false), 2000)
 }

 return (
 <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col overflow-hidden group cursor-pointer">
 {/* Image */}
 <div className="relative overflow-hidden bg-gray-50 h-48 shrink-0">
 <img 
 src={product.image} 
 alt={product.title} 
 className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
 />
 <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
 New
 </div>
 </div>

 {/* Content - Flexible area */}
 <div className="p-4 flex flex-col grow">
 {/* Title - Fixed height area */}
 <div className="mb-3 h-12 flex items-start">
 <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight">
 {product.title ? (product.title.length > 50 ? `${product.title.substring(0, 50)}...` : product.title) : 'Product'}
 </h3>
 </div>

 {/* Rating */}
 <div className="flex items-center gap-1 mb-3">
 <span className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</span>
 <span className="text-sm text-gray-600">(128)</span>
 </div>

 {/* Spacer to push price and button to bottom */}
 <div className="grow"></div>

 {/* Price */}
 <div className="flex items-center gap-2 mb-4">
 <p className="text-xl font-bold text-blue-600">${product.price}</p>
 <p className="text-base text-gray-400 line-through">${Math.round(product.price * 1.2)}</p>
 </div>

 {/* Button - Always at bottom */}
 <Link to={`/products/${product.id}`} className="block mb-3">
 <button className="w-full font-semibold py-2 px-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors text-sm">
 View Details
 </button>
 </Link>

 {isCart ? (
 <button 
 onClick={removeProductFromCart} 
 className="w-full font-semibold py-2 px-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors text-sm"
 >
 Remove from Cart
 </button>
 ) : (
 <button 
 onClick={addProductToCart}
 className={`w-full font-semibold py-2 px-3 rounded-lg text-sm transition-colors ${
 isAdded 
 ? 'bg-green-500 text-white' 
 : 'bg-blue-500 text-white hover:bg-blue-600'
 }`}
 >
 {isAdded ? '✓ Added!' : 'Add to Cart'}
 </button>
 )}
 </div>
 </div>
 )
}

export default ProductCard
