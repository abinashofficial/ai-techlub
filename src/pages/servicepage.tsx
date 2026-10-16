
import Header from "../components/Header";
import Services from '../components/Services';

import Footer from '../components/Footer ';




function ServicesPage() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />
       <div style={{
        marginTop:"70px",
      }}>
      <Services />

        </div>


      <Footer />
      
    </div>

  )
}

export default ServicesPage
