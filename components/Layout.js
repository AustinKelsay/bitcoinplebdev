import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
      <div className='layout'>
        <Header />
        {children}
        <Footer />
        <style jsx>{`
          .layout {

          }
        `}</style>
      </div>
  )
}