import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from "./components/Experience";
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-gray-200">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
