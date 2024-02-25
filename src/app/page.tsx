import { FoodMenu } from '@/components/FoodMenu/page'
import { Header } from '@/components/Header/page'
import { NavMenu } from '@/components/NavMenu/page'
import { Drawer } from '@/components/Drawer/page'

import { Div } from './styles'

export default function Home() {
  return (
    <Div>
      <Header />
      <NavMenu />
      <FoodMenu />
      <Drawer />
    </Div>
  )
}
