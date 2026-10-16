
import Header from "../components/Header";
import Footer from '../components/Footer ';
import Pricing from "../components/Pricing ";




function PricingPage() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />
       <div style={{
        marginTop:"60px",
      }}>
      <Pricing />

        </div>


      <Footer />
      
    </div>

  )
}

export default PricingPage
