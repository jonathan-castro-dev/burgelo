import { ReactNode, createContext, useContext, useState } from 'react'

interface DrawerContextType {
  isOpen: boolean
  toogleDrawer: () => void
}

const DrawerContext = createContext({} as DrawerContextType)

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function toogleDrawer() {
    setIsDrawerOpen((state) => !state)
  }

  return (
    <DrawerContext.Provider value={{ toogleDrawer, isOpen: isDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => useContext(DrawerContext)
