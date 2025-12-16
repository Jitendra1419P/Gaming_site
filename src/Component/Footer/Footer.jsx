import React from 'react';
import FooterCss from './Footer.module.css';
import { navData, socialIconsData } from '../../assets/Data/Data';

const Footer = () => {
    return (
        <section className={FooterCss.footer}>
            <div className={FooterCss.footer_logo}>
                <a href="#">
                    Zex<span>ora</span>
                </a>
            </div>
            <ul className={FooterCss.footer_menu}>
                {navData.map((item) => (
                    <li key={item.id}>
                        <a href={item.url}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className={FooterCss.footer_inputs}>
                <input type="text" placeholder="Your E-mail" />
                <i className="ri-mail-line"></i>
            </div>
            <div className={FooterCss.footer_social}>
                {socialIconsData.map((social, index) => (
                    <i key={index} className={`${social.iconClass}`}></i>
                ))}
            </div>
        </section>
    );
};

export default Footer;
