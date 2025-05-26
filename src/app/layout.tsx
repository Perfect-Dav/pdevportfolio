import Footer from "@/components/Footer/Footer"
import "./globals.css"
import { Navbar } from "@/components/Navbar/Navbar" 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0c1121]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}