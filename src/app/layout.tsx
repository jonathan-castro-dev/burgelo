import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { CartProvider } from '@/contexts/cart-context'

import { getCssText } from '../../stitches.config'
import { globalStyles } from './global'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Burgelo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  globalStyles()

  return (
    <html lang="en">
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body className={roboto.className}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
