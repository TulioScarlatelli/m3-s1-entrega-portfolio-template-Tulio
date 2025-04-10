import './styles/index.css'
import { AboutMeSection } from "./documents/About"
import { Banner } from "./documents/Banner"
import { Footer } from "./documents/Footer"
import { Header } from "./documents/Header"
import { ProjectSection } from "./documents/Project"
import { TechSection } from "./documents/Tech"

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <AboutMeSection/>
      <TechSection/>
      <ProjectSection/>
      <Footer/>
    </>
  )
}

export default App
