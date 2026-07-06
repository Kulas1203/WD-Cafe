import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Spotlight from './components/Spotlight.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Gallery from './components/Gallery.jsx'
import Reviews from './components/Reviews.jsx'
import Visit from './components/Visit.jsx'
import CtaBanner from './components/CtaBanner.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <Spotlight />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Visit />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
