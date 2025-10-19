import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from 'swiper/modules';
import testimg1 from "../assets/img/testimonials/testimonials-1.jpg"
import testimg2 from "../assets/img/testimonials/testimonials-2.jpg"
import testimg3 from "../assets/img/testimonials/testimonials-3.jpg"
import testimg4 from "../assets/img/testimonials/testimonials-4.jpg"
import testimg5 from "../assets/img/testimonials/testimonials-5.jpg"





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const testimonials = [
  {
    stars: 5,
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    img: testimg1,
    name: "Saul Goodman",
    title: "Ceo & Founder",
  },
  {
    stars: 5,
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    img: testimg2,
    name: "Sara Wilsson",
    title: "Designer",
  },
  {
    stars: 5,
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    img: testimg3,
    name: "Jena Karlis",
    title: "Store Owner",
  },
  {
    stars: 5,
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    img: testimg4,
    name: "Matt Brandon",
    title: "Freelancer",
  },
  {
    stars: 5,
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    img: testimg5,
    name: "John Larson",
    title: "Entrepreneur",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
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
