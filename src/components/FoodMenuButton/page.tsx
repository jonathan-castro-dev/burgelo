import { ButtonHTMLAttributes, ReactElement } from 'react'
import { Button } from './styles'

interface FoodMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  title: string
}

export function FoodMenuButton({ icon, title, ...rest }: FoodMenuButtonProps) {
  return (
    <Button type="button" {...rest}>
      {icon}
      {title}
    </Button>
  )
}
