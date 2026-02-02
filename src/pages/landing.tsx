
import Header from "../components/Header";
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Services from '../components/Services';
import Pricing from '../components/Pricing ';
import Contact from '../components/Contact ';
import Footer from '../components/Footer ';
import Faq from '../components/Faq';
import Product from '../components/Products'
// import Testimonials from '../components/Testimonials';
import ClientsSection from '../components/Clients'
import GoogleReviews from "../components/googlereviews";
import { TawkToChat } from "../hooks/talktochat";



function Landing() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />

      <Hero />
      <About />
      <GoogleReviews/>
      <ClientsSection/>
      <Features />
      <Services />
      <Pricing />
      <Product/>
      <Faq/>
      {/* <Testimonials/> */}
      <Contact />
      <Footer />
<TawkToChat enabled={true} />
      

    </div>

  )
}

export default Landing
