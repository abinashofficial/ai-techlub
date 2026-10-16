
import Header from "../components/Header";
import Features from '../components/Features';

import Footer from '../components/Footer ';




function FeaturesPage() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />

      {/* <Hero /> */}
      <div style={{
        marginTop:"60px",
      }}>
      <Features />

        </div>
      <Footer />
      
    </div>

  )
}

export default FeaturesPage
