import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/images/avatar1.png'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Shoeb Baghwan',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptate odio in, nostrum perspiciatis error. Recusandae repellat reprehenderit nam. Maxime ea, labore sed recusandae minima neque fugit rem! Odit, non."
  },
  {
    avatar: AVTR1,
    name: 'Shoeb Baghwan',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptate odio in, nostrum perspiciatis error. Recusandae repellat reprehenderit nam. Maxime ea, labore sed recusandae minima neque fugit rem! Odit, non."
  },
  {
    avatar: AVTR1,
    name: 'Shoeb Baghwan',
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptate odio in, nostrum perspiciatis error. Recusandae repellat reprehenderit nam. Maxime ea, labore sed recusandae minima neque fugit rem! Odit, non."
  },
  
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                  </div>
                  <h5 className='client__name'>{ name }</h5>
                  <small className='client__review'>{ review }</small>
              </SwiperSlide>
            )
          })
        } 
      </Swiper>
    </section>
  )
}

export default Testimonials