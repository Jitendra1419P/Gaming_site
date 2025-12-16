import React from 'react';
import WorksCss from './Works.module.css';
import { worksData } from '../../assets/Data/Data';

const Works = () => {
    return (
        <div className={WorksCss.our_work}>
            <div className={WorksCss.work_head}>
                <h1>WORKS</h1>
            </div>

            <div className={WorksCss.work_container}>
                {worksData.map((work) => (
                    <div key={work.id} className={WorksCss.work_card}>
                        <div className={WorksCss.work_box}>
                            <div className={WorksCss.work_text}>
                                <h1>{work.title}</h1>
                                <span>/ {work.subtitle}</span>
                            </div>

                            <h2>{work.category}</h2>
                        </div>

                        <marquee
                            style={{
                                backgroundImage: `url(${work.marqueeBg})`,
                            }}
                            behavior="alternate"
                        >
                            <div className={WorksCss.marquee_text}>
                                {Array.from({ length: 8 }).map((_, index) => (
                                    <React.Fragment key={index}>
                                        <h1>{work.marqueeText}</h1>
                                        <span>/</span>
                                    </React.Fragment>
                                ))}
                            </div>
                        </marquee>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
