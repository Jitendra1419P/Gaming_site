import React from 'react';
import GameCardsCss from './GameCards.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { gameCardsData } from '../../assets/Data/Data';

const GameCards = () => {
    return (
        <Swiper
            className={GameCardsCss.GameSlider}
            slidesPerView={4}
            loop={true}
            breakpoints={{
                1400: { slidesPerView: 4 },
                1200: { slidesPerView: 3 },
                992: { slidesPerView: 2 },
                576: { slidesPerView: 1 },
            }}
        >
            {gameCardsData.map((card) => (
                <SwiperSlide key={card.id}>
                    <div className={GameCardsCss.gameCard}>
                        <div className={GameCardsCss.game_imag}>
                            <img src={card.image} alt={card.alt} />
                        </div>

                        <button>
                            {card.actionText}
                            <i className="ri-arrow-right-line"></i>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GameCards;
