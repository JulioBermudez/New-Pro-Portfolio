import "./testimonials.css";
import AVTR1 from "../../assets/avatar_fashion_girl.png";
import AVTR2 from "../../assets/avatar_hipster_guy.png";
import AVTR3 from "../../assets/avatar_nerd_guy.png";
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Testimonials = () => {
  const items = [
    {
      client_name: "Olivia Rodriguez",
      img_url: AVTR1,
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, omnis cupiditate repellendus provident doloribus ex?",
    },
    {
      client_name: "Ethan Marshall",
      img_url: AVTR2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum culpa adipisci doloremque reiciendis. Aut totam veritatis hic, vero adipisci explicabo impedit nulla!",
    },
    {
      client_name: "Jackson Bennett",
      img_url: AVTR3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit accusamus dolorem dignissimos non est tempore quis perferendis architecto.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      >
        {items.map(({ client_name, img_url, review }) => {
          return (
            <>
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={img_url} alt="" />
                </div>
                <h5 className="client__name">{client_name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
