import React from "react";

import img1 from '../assets/img/clients/client-1.png'
import img2 from '../assets/img/clients/client-2.png'
import img3 from '../assets/img/clients/client-3.png'
import img4 from '../assets/img/clients/client-4.png'
import img5 from '../assets/img/clients/client-5.png'
import img6 from '../assets/img/clients/client-6.png'


const ClientsSection: React.FC = () => {
  const clients = [
   img1,
    img2,
   img3,
    img4,
    img5,
    img6
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          {clients.map((src, index) => (
            <div key={index} className="col-xl-2 col-md-3 col-6 client-logo">
              <img src={src} className="img-fluid" alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
