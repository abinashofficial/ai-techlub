
import Header from "../components/Header";
import  {  useState, useEffect,  } from "react";
import { useNavigate } from "react-router-dom";


import Lottie from "lottie-react";
import Footer from "../components/Footer ";




// import { TawkToChat } from "../hooks/talktochat";
import ChatBot from "./chatbot";
import { Navigate } from "react-router-dom";
  interface Animations {
  [key: string]: any; // JSON object for each Lottie animation
}

  const services = [
                  {
      title: 'web development',
    description: 'Simplify scheduling and eliminate manual coordination with an intelligent smart booking system. Our solution enables seamless appointment management, real-time availability, automated confirmations, and calendar integrations. Designed to enhance user convenience and operational efficiency, Smart Booking reduces no-shows, saves time, and ensures a smooth booking experience for both businesses and customers.',
    url:"/#about",
    jsonLink: "https://res.cloudinary.com/dababspdo/raw/upload/v1763230044/webdesignanime_cw2i6e.json",
    jsonName:"web_dev",
  },

];


function Career() {
         const [animationData, setAnimationData] = useState<Animations>({});
      const navigate = useNavigate()

                useEffect(() => {
              // Fetch all JSONs in parallel
              const fetchAnimations = async () => {
                const anims  :any ={};
                await Promise.all(
                  services.map(async (jsonfile) => {
                    try {
                      const res = await fetch(jsonfile.jsonLink); // each course has its JSON URL
                      const data = await res.json();
                      anims[jsonfile.jsonName] = data; // store by course id
                    } catch (err) {
                      console.error("Failed to load animation:", err);
                    }
                  })
                );
                setAnimationData(anims);
              };
    fetchAnimations();
  }, []);



  return (
    <div  style={{
        width:"100vw"
    }}>


 <Header />

    <section className="about section">

      <div className="container">

        <div  style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-around",
          flexWrap:"wrap",
          gap:"20px",
          marginTop:"40px",
        }}>

                    
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
      
{animationData && (
  <Lottie
    className="lottie-animation"
    animationData={animationData["web_dev"]}
    loop
    autoplay
    style={{
      width: "100%",
      height: "100%",
    }}
  />
)}

<div style={{   
        display:"flex",
        height:"50px",
                justifyContent:"center",
                alignItems:"center"



         }}>
                                            <button style={{   
                                              display:"flex",                    
                                          justifyContent:"center",
                                                           background:"rgb(56, 141, 168)",
                                          borderRadius:"10px",
                                          color:"white",
                                          cursor:"pointer",

                                                alignItems:"center"

                                        }}
                                          onClick={()=>navigate("/internship")}
                                          >
                                            Apply Internship
                                            </button>
               

        </div>
        </div>
        
        
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
                







          </div>



          </div>


                

      </div>


    </section>

      <Footer />
{/* <TawkToChat enabled={true} /> */}
      
<ChatBot/>
    </div>

  )
}

export default Career
