import React from "react";


const ClientsSection: React.FC = () => {
  const clients = [
   "https://res.cloudinary.com/dababspdo/image/upload/v1773441294/client-1_diaapy.png",
    "https://res.cloudinary.com/dababspdo/image/upload/v1773441383/client-2_uuwdek.png",
   "https://res.cloudinary.com/dababspdo/image/upload/v1773441438/client-3_jnawfu.png",
    "https://res.cloudinary.com/dababspdo/image/upload/v1773441499/client-4_basvxb.png",
    "https://res.cloudinary.com/dababspdo/image/upload/v1773441536/client-5_gfdqui.png",
    "https://res.cloudinary.com/dababspdo/image/upload/v1773441576/client-6_lcjaq8.png"
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container" >
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
