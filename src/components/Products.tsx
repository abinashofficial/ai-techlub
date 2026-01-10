import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";



const Products: React.FC = () => {
            const navigate = useNavigate();
  

  return (
    <section id="products" className="services section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Products</h2>
        <p>
Our products are built to meet the evolving needs of modern businesses. Whether you’re a startup, growing organization, or enterprise, we provide robust, secure, and scalable solutions that simplify workflows and enhance productivity.
</p>
</div>
      {/* End Section Title */}

      <div className="container">
        <div className="row g-5">


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div 
                style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
                        flexDirection:"column",

        }}
        >
                <img
                style={{
                  borderRadius:"50px",
                  width:"80%"
        }}
        src="https://res.cloudinary.com/dababspdo/image/upload/v1765667840/B2C_excgg0.png"
        alt=""
      />
                                      <button
                className="page-btn"
onClick={()=> navigate("/consumerhub")}
              >
                <span>{"Consumer Hub"}</span>
              </button>
            </div>
          </div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div 
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",

        }}
        >
                <img
                style={{
                  borderRadius:"50px",
                  width:"80%"
        }}
        src="https://res.cloudinary.com/dababspdo/image/upload/v1765667896/B2B_henihk.png"
        alt=""
      />
                                <button
                className="page-btn"
onClick={()=> navigate("/businesshub")}
              >
                <span>{"business Hub"}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
