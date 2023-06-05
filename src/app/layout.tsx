import './globals.css'
import localFont from 'next/font/local';
import Providers from './providers';

const ancizar = localFont({
  src:[
    {
      path: '../../public/fonts/Ancizar Sans-Regular.otf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-ancizar'
})

export const metadata = {
  title: 'PyGo',
  description: 'A Python to Go translator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${ancizar.variable} `}>
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
