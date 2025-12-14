import React  from "react";
// import company1 from "../assets/img/about-company-1.jpg"
// import company2 from "../assets/img/about-company-2.jpg"
// import company3 from "../assets/img/about-company-3.jpg"
import Gmeet from "./gmeet"


const About: React.FC = () => {
    // const [startDate, setDate] = useState<string>("");

  
// const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     date:"",
//   });





  return (

    <section id="about" className="about section">

      <div className="container">

        <div  style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-around",
          flexWrap:"wrap",
          gap:"20px"
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
                
                

          </div>
<Gmeet/>
          </div>


                

      </div>


    </section>
);
};

export default About;
