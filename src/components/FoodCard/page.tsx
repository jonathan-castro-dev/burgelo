import Image from 'next/image'
import { AddToCartButton } from '../AddToCartButton/page'

import { Card } from './styles'

interface FoodCardProps {
  id: number
  image: string
  title: string
  price: number
}

export function FoodCard({ id, image, title, price }: FoodCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return (
    <Card>
      <Image
        src={image}
        alt=""
        width={180}
        height={150}
        quality={100}
        priority
      />

      <div className="food-content">
        <h3>{title}</h3>
        <strong>{formattedPrice}</strong>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <AddToCartButton foodId={id} />
      </div>
    </Card>
  )
}
