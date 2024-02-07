import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { globalCss, getCssText } from '../../stitches.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Burgelo',
}

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
})

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
