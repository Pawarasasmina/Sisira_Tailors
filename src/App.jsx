import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App