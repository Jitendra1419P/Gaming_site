import React from 'react';
import ContactCss from './Contact.module.css';
import { contactOptionsData, socialIconsData } from '../../assets/Data/Data';

const Contact = () => {
    return (
        <section className={ContactCss.contact}>
            <div className={ContactCss.contact_head}>
                <h1>Contact Us</h1>
                <div className={ContactCss.contact_head_text}>
                    <div className={ContactCss.line}></div>
                    <h1>HAVE A PROJECT ?</h1>
                </div>
            </div>
            <div className={ContactCss.contact_container}>
                <div className={ContactCss.Contact_form}>
                    <div className={ContactCss.Contact_form_head}>
                        <h2>WHAT CAN WE DO FOR YOUR?</h2>
                        <div className={ContactCss.Contact_btns}>
                            {contactOptionsData.map((option) => (
                                <button
                                    key={option.id}
                                    className={ContactCss.Contact_btn}
                                    value={option.value}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className={ContactCss.contact_inputs}>
                        <div className={ContactCss.contact_input_head}>
                            <div className={ContactCss.input}>
                                <input type="text" placeholder="Your Name" />
                                <i className="ri-user-3-line"></i>
                            </div>
                            <div className={ContactCss.input}>
                                <input type="text" placeholder="Your E-mail" />
                                <i className="ri-mail-open-line"></i>
                            </div>
                        </div>
                        <div className={ContactCss.textarea}>
                            <textarea
                                name=""
                                id=""
                                placeholder="Project Details"
                            ></textarea>
                            <i className="ri-pencil-line"></i>
                        </div>
                    </div>
                    <div className={ContactCss.Contact_btns}>
                        <button className="Contact_btn">
                            NEXT CAN BE YOU
                            <i className={`ri-arrow-right-line`}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={ContactCss.Contact_content}>
                    <p>
                        Driven by innovation and creativity, we're constantly
                        evolving and expanding our platform to bring you the
                        latest and greatest in gaming. From exciting new
                        releases to classic favorites.
                    </p>

                    <div className={ContactCss.socials}>
                        {socialIconsData.map((social) => (
                            <a
                                key={social.name}
                                href={social.link}
                                aria-label={social.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i
                                    className={`${social.iconClass} ${ContactCss.social_icon}`}
                                ></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
