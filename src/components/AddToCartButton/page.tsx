'use client'

import { useCart } from '@/contexts/cart-context'
import { FaShoppingCart } from 'react-icons/fa'

import { Button } from './styles'

interface AddToCartButtonProps {
  foodId: number
}

export function AddToCartButton({ foodId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddFoodToCart() {
    addToCart(foodId)
  }

  return (
    <Button onClick={handleAddFoodToCart}>
      <FaShoppingCart size={13} />
      adicionar ao carrinho
    </Button>
  )
}
