import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { globalCss, getCssText } from '../../stitches.config'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
  title: 'Burgelo',
}

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: { paddingInline: '1.2rem', paddingBlock: '0.6rem', color: '$gray700' },
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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
