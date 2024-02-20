'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  foodId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (foodId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(foodId: number) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.foodId === foodId)

      if (productInCart) {
        return state.map((item) => {
          if (item.foodId === foodId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        return [...state, { foodId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
