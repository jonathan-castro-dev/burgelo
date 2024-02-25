'use client'

import { useDrawer } from '@/contexts/drawer-context'
import { IoClose } from 'react-icons/io5'

import { DrawerContainer, DrawerContent } from './styles'

export function Drawer() {
  const { isOpen, toogleDrawer } = useDrawer()

  function handleCloseDrawer() {
    toogleDrawer()
  }

  if (isOpen) {
    return (
      <DrawerContainer>
        <DrawerContent>
          <header>
            <button type="button" onClick={handleCloseDrawer}>
              <IoClose size={30} />
            </button>
          </header>
          <ul>
            <a href="">
              <li>home</li>
            </a>
            <a href="">
              <li>about</li>
            </a>
            <a href="">
              <li>food</li>
            </a>
            <a href="">
              <li>delivery</li>
            </a>
            <a href="">
              <li>contact</li>
            </a>
          </ul>
        </DrawerContent>
      </DrawerContainer>
    )
  }

  return ''
}
