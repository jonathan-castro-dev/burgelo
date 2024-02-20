'use client'

import { useState } from 'react'
import { FoodMenuButton } from '../FoodMenuButton/page'
import { FoodCard } from '../FoodCard/page'
import { foods } from '@/services/db'
import { BiSolidDrink } from 'react-icons/bi'
import { LuSoup } from 'react-icons/lu'
import { GiHamburger, GiFullPizza, GiKnifeFork, GiSushis } from 'react-icons/gi'

import { Flex, FoodContainer } from './styles'

export function FoodMenu() {
  const [activeButton, setActiveButton] = useState('burgers')

  return (
    <main>
      <Flex>
        <FoodMenuButton
          activeButton={activeButton}
          onClick={() => setActiveButton('burgers')}
          icon={<GiHamburger />}
          title="burgers"
        />
        <FoodMenuButton
          activeButton={activeButton}
          onClick={() => setActiveButton('pizza')}
          icon={<GiFullPizza />}
          title="pizza"
        />
        <FoodMenuButton
          activeButton={activeButton}
          onClick={() => setActiveButton('drinks')}
          icon={<BiSolidDrink />}
          title="drinks"
        />
        <FoodMenuButton
          activeButton={activeButton}
          onClick={() => setActiveButton('pasta')}
          icon={<GiKnifeFork />}
          title="pasta"
        />
        <FoodMenuButton
          activeButton={activeButton}
          onClick={() => setActiveButton('soup')}
          icon={<LuSoup />}
          title="soup"
        />
        <FoodMenuButton
          activeButton={activeButton}
          onClick={() => setActiveButton('sushi')}
          icon={<GiSushis />}
          title="sushi"
        />
      </Flex>
      <FoodContainer>
        {foods
          .filter((food) => food.type === activeButton)
          .map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              title={food.title}
              image={food.image}
              price={food.price}
            />
          ))}
      </FoodContainer>
    </main>
  )
}
