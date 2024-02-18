import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'

import { Card } from './styles'

interface FoodCardProps {
  image: string
  title: string
  price: number
}

export function FoodCard({ image, title, price }: FoodCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)

  return (
    <Card>
      <Image src={image} alt="" width={180} height={150} quality={100} />

      <div className="food-content">
        <h3>{title}</h3>
        <strong>{formattedPrice}</strong>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        <button>
          <FaShoppingCart size={13} />
          adicionar ao carrinho
        </button>
      </div>
    </Card>
  )
}
