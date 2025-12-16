import HeaderCss from '../Header/Header.module.css';
import HeroImg from '../../assets/Image/hero.png';
import { socialIconsData } from '../../assets/Data/Data';

const Header = () => {
    return (
        <header>
            <div className={HeaderCss.hero_content}>
                <h1 className={HeaderCss.hero_title}>
                    NEXORA <span>GAMING</span>
                </h1>
                <div className={HeaderCss.hero_boxs}>
                    <p>*Based in Paris, available worldwide</p>
                    <div className={HeaderCss.hero_social}>
                        {socialIconsData.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                aria-label={item.name}
                                target="_blank"
                            >
                                <i
                                    className={`${HeaderCss.hero_icon} ${item.iconClass}`}
                                ></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={HeaderCss.hero_bottom}>
                    <div className={HeaderCss.hero_bottom_content}>
                        <h2>SOME COOL & DROP CHARETERS</h2>
                        <p>
                            Driven by innovation and creativity, we're
                            constantly evolving and expanding our platform to
                            bring you the latest and greatest in gaming. From
                            exciting new releases to classic favorites.
                        </p>
                        <button className={HeaderCss.hero_button}>
                            NEXT CAN BE YOU
                            <i className={`ri-arrow-right-line`}></i>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div className={HeaderCss.hero_img}>
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className={HeaderCss.shape}></div>
                    <div className={HeaderCss.shape2}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
