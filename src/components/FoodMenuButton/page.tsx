import { ButtonHTMLAttributes, ReactElement } from 'react'
import { Button } from './styles'

interface FoodMenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement
  title: string
  activeButton: string
}

export function FoodMenuButton({
  icon,
  title,
  activeButton,
  ...rest
}: FoodMenuButtonProps) {
  return (
    <Button active={activeButton === title} type="button" {...rest}>
      {icon}
      {title}
    </Button>
  )
}
