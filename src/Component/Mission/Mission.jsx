import React from 'react';
import MissionCss from './Mission.module.css';
import skullImg from './../../assets/Image/skull-icon3.png';
import { missionData } from '../../assets/Data/Data';

const Mission = () => {
    return (
        <section className={MissionCss.our_mission}>
            <div className={MissionCss.mission_head}>
                <div className={MissionCss.skullImg}>
                    <img src={skullImg} alt="" />
                </div>
                <h2>
                    OUR MISSION IS TO CREATE A VIBRANT AND INCLUSIVE GAMING
                    COMMUNITY
                </h2>
            </div>
            <div className={MissionCss.mission_infos}>
                {missionData.map((item, index) => (
                    <div key={index} className={MissionCss.info_box}>
                        <h1>{item.value}</h1>
                        <h2>{item.description}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Mission;
