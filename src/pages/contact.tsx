
import Header from "../components/Header";
import Footer from '../components/Footer ';
import Contact from "../components/Contact ";




function ContactPage() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />

      {/* <Hero /> */}
      <div style={{
        marginTop:"60px",
      }}>
      <Contact />

        </div>
      <Footer />
      
    </div>

  )
}

export default ContactPage
