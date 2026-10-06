import React  from "react";

import ConsumerGMeet from "./consumergmeet"


const ConsumerAbout: React.FC = () => {
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

<ConsumerGMeet/>

          <div className="col-lg-6 content"  >
            <p className="who-we-are">Who We Are</p>
            <h3>Trusted Legal Guidance & Representation</h3>
            <p className="fst-italic">
At Abirami Chinnasamy, Advocate, we are committed to providing reliable, practical, and client-focused legal guidance. Our approach combines professional expertise, clear communication, and a strong commitment to protecting our clients’ rights and interests.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Legal Consultation • Documentation • Legal Representation</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Provide clear and practical legal advice tailored to each client’s needs.</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Assist with legal documentation, procedures, and representation with professionalism and confidentiality.</span></li>
              
            </ul>
              {/* <a href="#" className="read-more"><span>Get Started</span><i className="bi bi-arrow-right"></i></a> */}
                
                

          </div>
          </div>


                

      </div>


    </section>
);
};

export default ConsumerAbout;
