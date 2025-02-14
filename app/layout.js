import { Inter } from 'next/font/google'
import './globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Navbar from './components/navbar'
import Footer from './components/footer';
import { ToastProvider } from "@/app/components/ui/use_toast";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bibek Timilsina',
  description: 'Full stack Developer from Nepal',
  icons: {
    icon: '/photo.jpg', // /public path
  },

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <ToastProvider>
          {children}
        </ToastProvider>
        <Footer/>
        </body>
    </html>
  )
}
