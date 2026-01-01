import About from "@/components/About"
import Booking from "@/components/Booking"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import Services from "@/components/Services"
import Testimonial from "@/components/Testimonial"

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