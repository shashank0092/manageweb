import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NavbarMobile from "@/components/NavbarMobile";
import Testimonials from "@/components/Testimonials";


const Home=()=>{
  return(
    <>
   
      <Navbar/>
      <Hero/>
      <Features/>      
      <Testimonials/>
      <CTA/>
      <Footer/>      
    </>
  )
}

export default Home;