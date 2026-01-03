import About from "@/sections/About"
import Booking from "@/sections/Booking"
import Hero from "@/sections/Hero"
import Pricing from "@/sections/Pricing"
import Services from "@/sections/Services"
import Testimonial from "@/sections/Testimonial"

const Home = ()=> {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Testimonial/>
      <Booking/>
      <Pricing/>
    </div>
  )
}
export default Home