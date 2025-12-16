import React from 'react';
import CopyrightCss from './Copyright.module.css';

const Copyright = () => {
    return (
        <section className={CopyrightCss.Copyright}>
            <p>
                {' '}
                ©{new Date().getFullYear()} All Rights Reserved By{' '}
                <a href="#">K2info.com</a>
            </p>
        </section>
    );
};

export default Copyright;
