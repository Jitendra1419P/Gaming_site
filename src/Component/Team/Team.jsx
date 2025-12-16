import React from 'react';
import TeamCss from './Team.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { teamData } from '../../assets/Data/Data';

const Team = () => {
    return (
        <section className={TeamCss.our_team}>
            <div className="Headings">
                <h2>Our Team</h2>
                <h1>OUR AVENGERS</h1>
            </div>
            <Swiper
                className={TeamCss.TeamSwiper}
                slidesPerView={4}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    1400: { slidersPerView: 4 },
                    1200: { slidersPerView: 3 },
                    900: { slidersPerView: 2 },
                    500: { slidersPerView: 1 },
                }}
            >
                {teamData.map((member) => (
                    <SwiperSlide key={member.id}>
                        <div className={TeamCss.TeamCard}>
                            <div className={TeamCss.Team_img}>
                                <img src={member.image} alt={member.name} />
                                <span>{member.role}</span>
                            </div>

                            <div className={TeamCss.team_det}>
                                <div className={TeamCss.team_info}>
                                    <h2>{member.name}</h2>
                                    <p>{member.description}</p>
                                </div>

                                <div className={TeamCss.social}>
                                    {member.socials.map((icon, index) => (
                                        <i key={index} className={icon}></i>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Team;
