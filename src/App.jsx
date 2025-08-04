import FaqSection from "./components/Faq"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Part3 from "./components/Part3"
import Part4 from "./components/Part4"


const App = () => {
  return (
   
      <div className='flex flex-col gap-y-16 w-[90vw]'>

      <Navbar />
      <Part3/>
      <Part4/>
      <FaqSection/>
      <Footer/>
      </div>
 
  )
}

export default App
