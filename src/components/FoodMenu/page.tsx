import { GiHamburger, GiFullPizza, GiKnifeFork, GiSushis } from 'react-icons/gi'
import { BiSolidDrink } from 'react-icons/bi'
import { LuSoup } from 'react-icons/lu'

import { Flex } from './styles'
import { FoodMenuButton } from '../FoodMenuButton/page'

export function FoodMenu() {
  return (
    <Flex>
      <FoodMenuButton icon={<GiHamburger />} title="burgers" />
      <FoodMenuButton icon={<GiFullPizza />} title="pizza" />
      <FoodMenuButton icon={<BiSolidDrink />} title="drinks" />
      <FoodMenuButton icon={<GiKnifeFork />} title="pasta" />
      <FoodMenuButton icon={<LuSoup />} title="soup" />
      <FoodMenuButton icon={<GiSushis />} title="sushi" />
    </Flex>
  )
}
