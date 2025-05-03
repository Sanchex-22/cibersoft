import AboutMe from "../about_me/about_me"
import Proyects from "../projects/projects"
import Services from "../services/services"
import Banner from "./components/banner"

function Home() {

  return (
    <>
      <Banner/>      
      <Proyects/>
      <Services/>      
      <AboutMe/>
    </>
  )
}

export default Home
