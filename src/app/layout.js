import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manpreet Singh - Portfolio (MERN Stack Developer)',
  description: 'Explore my portfolio of Manpreet Singh, a MERN Stack Developer skilled in MongoDB, Express, React, and Node.js to build dynamic web applications.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  )
}