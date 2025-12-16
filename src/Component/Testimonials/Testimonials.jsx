import React from 'react';
import TestimonialsCss from './Testimonials.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { testimonialsData } from '../../assets/Data/Data';

const Testimonials = () => {
    return (
        <section className={TestimonialsCss.testimonial}>
            <div className="Headings">
                <h2>testimonials</h2>
                <h1>WHAT PEOPLE ARE SAYING ABOUT US</h1>
            </div>
            <Swiper
                className={TestimonialsCss.teamSlider}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    1400: { slidesPerView: 4 },
                    1200: { slidesPerView: 4 },
                    900: { slidesPerView: 2 },
                    500: { slidesPerView: 1 },
                }}
            >
                {testimonialsData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className={TestimonialsCss.test_box}>
                            <div className={TestimonialsCss.test_card}>
                                <div className={TestimonialsCss.test_info}>
                                    <h2>{testimonial.name}</h2>
                                    <h3>{testimonial.role}</h3>
                                </div>

                                <p>{testimonial.message}</p>
                            </div>

                            <div className={TestimonialsCss.client_img}>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
