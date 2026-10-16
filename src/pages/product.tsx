
import Header from "../components/Header";
import Footer from '../components/Footer ';
import Products from "../components/Products";




function ProductsPage() {

  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />
       <div style={{
        marginTop:"70px",
      }}>
      <Products />

        </div>


      <Footer />
      
    </div>

  )
}

export default ProductsPage
