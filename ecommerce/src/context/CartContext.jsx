import React, { createContext, useEffect, useState } from 'react'
export const CartContext = createContext();

function CartProvider({ children }) {
    const [items,setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
      const exists = cartItems.find (item=> item.id===product.id);

      if (exists) return;
        setCartItems((prev)=>[...prev,product]);
    }

    function removeFromCart(productId) {
      const currentItems=cartItems;
      const updatedItems=currentItems.filter(item=> item.id !== productId);
      setCartItems(updatedItems);}

function isInCart(productId){
  return cartItems.some((item)=> item.id ===productId);
}
    const cartCount = cartItems.length;

      useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setItems(data);
            setLoading(false);  
          }
          catch(error) {
            console.error('Error fetching products', error);
            setLoading(false);
          }
        }
        fetchProducts();
      }, []);

      const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, cartCount,isInCart, cartItems, cartTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider