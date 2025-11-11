import React, { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setStatus("loading");
        toast.success("Your message was sent successfully.");

        setFormData({ name: "", email: "", subject: "", message: "" });
    

    // try {
    //   // Replace with your backend API endpoint
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) throw new Error("Failed to send message");

    //   // setStatus("success");
    //   setFormData({ name: "", email: "", subject: "", message: "" });
    // } catch (error) {
    //   console.error(error);
    //   // setStatus("error");
    // }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>We’d love to hear from you! Whether you have questions, need support, or want to explore a partnership, our team is here to help.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>W5VJ+953, 2nd St, Veeramani Nagar, Kovilambakkam, Chennai, Tamil Nadu 600129</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-telephone"></i>
              <h3>Call Us</h3>
              <p>+91 9940463927</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div
              className="info-item d-flex flex-column justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-envelope"></i>
              <h3>Email Us</h3>
              <p>aitechlub@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7776.879309634316!2d80.18063289999999!3d12.943694799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e7d952ffe51%3A0xfdb285b0e7928738!2sW5VJ%2B953%2C%202nd%20St%2C%20Veeramani%20Nagar%2C%20Kovilambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600129!5e0!3m2!1sen!2sin!4v1760887547125!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>

          <div className="col-lg-6">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="400">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={6}
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {/* {status === "loading" && <div className="loading">Loading</div>}
                  {status === "error" && <div className="error-message">Failed to send message.</div>}
                  {status === "success" && <div className="sent-message">Your message has been sent. Thank you!</div>} */}

                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
