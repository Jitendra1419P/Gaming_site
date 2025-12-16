import React from 'react';
import MarqueeCss from './Marquee.module.css';
import skullImg from './../../assets/Image/skull-icon.png';
import { marqueeData } from '../../assets/Data/Data';

const Marquee = () => {
    const repeatedMarqueeData = Array(6).fill(marqueeData).flat();
    return (
        <marquee behavior="alternate" direction="">
            <div className={MarqueeCss.marquee_text}>
                {repeatedMarqueeData.map((item, index) => (
                    <div key={index} className={MarqueeCss.marquee_info}>
                        <h1>{item}</h1>
                        <img
                            src={skullImg}
                            alt=""
                            className={MarqueeCss.skullImg}
                        />
                    </div>
                ))}
            </div>
        </marquee>
    );
};

export default Marquee;
