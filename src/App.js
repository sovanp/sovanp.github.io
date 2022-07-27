import About from "./components/About"
import { Home } from "./components/Home"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience"
import Work from "./components/Work"
import Contact from "./components/Contact"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  )
}

export default App
