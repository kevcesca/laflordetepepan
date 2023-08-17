import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Navbar from './components/Navbar/Navbar'

const links = [{
    label: "Home",
    route: "/"
},{
  label: "Menu",
  route: "/menu"
}]

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Flor de Tepepan',
  description: 'Cafetería ubicada en Tepepan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
          <header>
            <Navbar/>
          </header>
          {children}
      </body>
    </html>
  )
}
