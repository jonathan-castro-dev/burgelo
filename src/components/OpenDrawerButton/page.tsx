'use client'

import { useDrawer } from '@/contexts/drawer-context'
import { RxHamburgerMenu } from 'react-icons/rx'

import { Button } from './styles'

export function OpenDrawerButton() {
  const { toogleDrawer } = useDrawer()

  function handleOpenDrawer() {
    toogleDrawer()
  }

  return (
    <Button type="button" onClick={handleOpenDrawer}>
      <RxHamburgerMenu size={24} />
    </Button>
  )
}
