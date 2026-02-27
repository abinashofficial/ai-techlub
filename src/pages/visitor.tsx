
import Header from "../components/Header";
import  {  useState, useEffect } from "react";

import Footer from '../components/Footer ';
import Lottie from "lottie-react";
import VisitorForm from "../components/visitorform";




// import { TawkToChat } from "../hooks/talktochat";
import ChatBot from "./chatbot";

  interface Animations {
  [key: string]: any; // JSON object for each Lottie animation
}
  const services = [
                  {
      title: 'web development',
    description: 'Simplify scheduling and eliminate manual coordination with an intelligent smart booking system. Our solution enables seamless appointment management, real-time availability, automated confirmations, and calendar integrations. Designed to enhance user convenience and operational efficiency, Smart Booking reduces no-shows, saves time, and ensures a smooth booking experience for both businesses and customers.',
    url:"/#about",
    jsonLink: "https://res.cloudinary.com/dababspdo/raw/upload/v1772167890/hospital_lobby_hktnzg.json",
    jsonName:"web_dev",
  },

];

function Visitor() {
         const [animationData, setAnimationData] = useState<Animations>({});

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



    // const navigate = useNavigate()
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
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">




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
        </div>



          </div>
<VisitorForm/>
          </div>


                

      </div>


    </section>

      <Footer />
{/* <TawkToChat enabled={true} /> */}
      
<ChatBot/>
    </div>

  )
}

export default Visitor
