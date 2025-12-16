import React from 'react';
import InstaCss from './Insta.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { instaFeedData } from '../../assets/Data/Data';

const Insta = () => {
    return (
        <Swiper
            className={InstaCss.TeamSlider}
            slidesPerView={6}
            loop={true}
            breakpoints={{
                1400: { slidesPerView: 6 },
                1200: { slidesPerView: 5 },
                900: { slidesPerView: 3 },
                500: { slidesPerView: 3 },
            }}
        >
            {instaFeedData.map((post) => (
                <SwiperSlide key={post.id}>
                    <div className={InstaCss.insta_Img}>
                        <img src={post.image} alt={post.alt} />
                        <i className="ri-instagram-line"></i>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Insta;
