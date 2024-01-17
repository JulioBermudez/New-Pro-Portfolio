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
      "I couldn't be happier with the website developed by Julio Bermudez. His technical proficiency and problem-solving skills were evident throughout the entire process. The website not only meets but exceeds all our requirements. Julio is a reliable and talented web developer, and I wholeheartedly recommend his services.",
    },
    {
      client_name: "Ethan Marshall",
      img_url: AVTR2,
      review:
      "Working with Mr Bermudez has been an absolute pleasure. Our project was handled with professionalism and efficiency, resulting in a visually stunning and fully functional website. I highly recommend Mr Bermudez for anyone seeking a skilled web developer.",
    },
    {
      client_name: "Jackson Bennett",
      img_url: AVTR3,
      review:
      "We engaged Julio for our web development project, and the experience was fantastic. His ability to balance technical expertise with a creative approach resulted in a website that stands out in our industry. Julio was responsive to our feedback and always went the extra mile to ensure our satisfaction. I recommend his services.",
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
