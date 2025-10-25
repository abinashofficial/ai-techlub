import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';
import testimg1 from "../assets/img/testimonials/testimonials-1.jpg"
// import testimg2 from "../assets/img/testimonials/testimonials-2.jpg"
import testimg3 from "../assets/img/testimonials/testimonials-3.jpg"
import testimg4 from "../assets/img/testimonials/testimonials-4.jpg"
import testimg5 from "../assets/img/testimonials/testimonials-5.jpg"





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = [
  // {
  //   stars: 5,
  //   text: "AI-Techlub’s innovative approach and dedicated support have been instrumental in growing our business. Their expertise and commitment made every project smooth, effective, and impactful.",
  //   img: testimg1,
  //   name: "Saul Goodman",
  //   title: "Ceo & Founder",
  // },
    {
    stars: 5,
    text: "I’m truly impressed with the professionalism and efficiency of the team. Their dedication and innovative approach made a real difference in streamlining my work process. Highly recommended!",
    img: testimg1,
    name: "Krishna Dhas",
    title: "Anesthesiologistner",
  },
    {
    stars: 5,
    text: "Their team understood my business needs perfectly and delivered results that exceeded expectations. I truly appreciate their professionalism and commitment to quality.",
    img: testimg5,
    name: "Selvaraj",
    title: "Constructor & Builder",
  },

  {
    stars: 5,
    text: "AI-techclub delivered exactly what I needed with professionalism and efficiency. Their team’s expertise and attention to detail made the entire process seamless and reliable. Highly recommended!",
    img: testimg3,
    name: "Jena Karlis",
    title: "Advocate",
  },
  {
    stars: 5,
    text: "AI-Techlub provided exceptional support and innovative solutions that helped me achieve my goals efficiently. Their professionalism and expertise made the entire experience seamless and rewarding.",
    img: testimg4,
    name: "Unni Krishnan",
    title: "Freelancer",
  },

];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Hear from our satisfied clients who have experienced growth and success through our innovative solutions. Their feedback inspires us to keep delivering excellence.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item">
                <div className="stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
                <p>{t.text}</p>
                <div className="profile mt-auto">
                  <img src={t.img} className="testimonial-img" alt={t.name} />
                  <h3>{t.name}</h3>
                  <h4>{t.title}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
