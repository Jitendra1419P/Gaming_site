import React, { useRef } from 'react';
import NavCss from './Nav.module.css';
import { navData } from '../../assets/Data/Data';
import SearchBox from '../SearchBox/SearchBox';

const Nav = () => {
    const menubar = useRef();

    const openMenu = () => {
        menubar.current.classList.toggle(NavCss.openMenu);
    };

    return (
        <div className={NavCss.nav}>
            <div className={NavCss.menu} ref={menubar}>
                {navData.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href="#">{item.label}</a>
                        </li>
                    );
                })}
            </div>
            <div className={NavCss.bars}>
                <i
                    className={`${NavCss.nav_icon} ri-menu-2-fill`}
                    onClick={openMenu}
                ></i>
            </div>
            <div className={NavCss.logo}>
                <a href="#">
                    Zex<span>ora</span>
                </a>
            </div>
            <div className={NavCss.right_menu}>
                <h2>INFO@EXAMPLE.COM</h2>
                <div className={NavCss.nav_icon}>
                    <SearchBox />
                    {/* <i className={`${NavCss.nav_icon} ri-search-2-line`}></i> */}
                </div>
            </div>
        </div>
    );
};

export default Nav;
