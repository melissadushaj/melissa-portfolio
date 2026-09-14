import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <Footer />
    </div>
  )
}

export default App