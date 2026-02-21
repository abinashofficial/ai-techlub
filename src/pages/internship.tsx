
import Header from "../components/Header";
import  {  useState, useEffect } from "react";

import Footer from '../components/Footer ';
import Internshipform from "../components/internshipform";
import Lottie from "lottie-react";




// import { TawkToChat } from "../hooks/talktochat";
import ChatBot from "./chatbot";




function Internship() {
const [animationData, setAnimationData] = useState<any>(null);

useEffect(() => {
  const fetchAnimation = async () => {
    try {
      const res = await fetch(
        "https://res.cloudinary.com/dababspdo/raw/upload/v1763230044/webdesignanime_cw2i6e.json"
      );

      if (!res.ok) throw new Error("Failed to fetch animation");

      const data = await res.json();
      setAnimationData(data);
    } catch (err) {
      console.error("Failed to load animation:", err);
    }
  };

  fetchAnimation();
}, []);



    // const navigate = useNavigate()
  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />

    <section id="about" className="about section">

      <div className="container">

        <div  style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-around",
          flexWrap:"wrap",
          gap:"20px",
          marginTop:"40px",
        }}>
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">

            <p className="who-we-are">Who We Are</p>
            <h3>Unleashing Potential with Creative Strategy</h3>
            <p className="fst-italic">
              At Shindentech, we are driven by innovation and a passion for empowering businesses through technology. Our goal is to help organizations unlock their full potential by combining creative strategy with cutting-edge digital solutions.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Boost your online presence with data-driven marketing campaigns that convert.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Build modern, responsive, and scalable websites that reflect your brand’s identity.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Ensure seamless performance and reliability with 24/7 expert support.</span></li>
              
            </ul>
              {/* <a href="#" className="read-more"><span>Get Started</span><i className="bi bi-arrow-right"></i></a> */}
                




          {/* Lottie Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1, // equal width in row mode, equal height in column mode
            width: "100%",
            flexDirection: "column",
          }}
        >
      
          <Lottie
            className="lottie-animation"
            animationData={animationData}  
            loop
            autoplay
            style={{
              width:  "100%",
              height:  "100%",
            }}
          />
        </div>



          </div>
<Internshipform/>
          </div>


                

      </div>


    </section>

      <Footer />
{/* <TawkToChat enabled={true} /> */}
      
<ChatBot/>
    </div>

  )
}

export default Internship
