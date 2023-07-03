import './globals.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'


export const metadata = {
  title: 'Cart Hub',
  description: 'discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        < Navbar />
        {children}
        < Footer />
        </body>
    </html>
  )
}
