import React from 'react';
import VideoBgCss from './VideoBg.module.css';

const VideoBg = () => {
    return (
        <div className={VideoBgCss.bg_video}>
            <i className={`${VideoBgCss.play_icon} ri-play-large-fill`}></i>
        </div>
    );
};

export default VideoBg;
