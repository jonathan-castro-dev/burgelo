import { FoodMenu } from '@/components/FoodMenu/page'
import { Header } from '@/components/Header/page'
import { NavMenu } from '@/components/NavMenu/page'

export default function Home() {
  return (
    <div>
      <Header />
      <NavMenu />
      <FoodMenu />
    </div>
  )
}
