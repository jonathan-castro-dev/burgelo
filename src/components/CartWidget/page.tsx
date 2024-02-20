'use client'

import { FaShoppingCart } from 'react-icons/fa'

import { Cart } from './styles'
import { useCart } from '@/contexts/cart-context'

export function CartWidget() {
  const { items } = useCart()

  return (
    <Cart>
      <FaShoppingCart color="#333333" size={19} />
      <div className="items-in-cart">{items.length}</div>
    </Cart>
  )
}
