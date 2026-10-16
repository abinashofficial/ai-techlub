
import Header from "../components/Header";
import About from '../components/About';
import Features from '../components/Features';

import Footer from '../components/Footer ';

import GoogleReviews from "../components/googlereviews";



function AboutPage() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />

      {/* <Hero /> */}
      <div style={{
        marginTop:"60px",
      }}>
              <About />

        </div>
      <GoogleReviews/>
      {/* <ClientsSection/> */}
      <Features />
      <Footer />
      
    </div>

  )
}

export default AboutPage
