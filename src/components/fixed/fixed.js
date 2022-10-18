import React from 'react';
import logo1 from '../../assests/img/logo1.svg'
import {AiFillInstagram, AiFillLinkedin} from "react-icons/ai";
import {FaTelegramPlane} from "react-icons/fa";
import {IoLogoWhatsapp} from "react-icons/io";

const Fixed = () => {
    return (
        <section id="title">
            <div className="title">
                <img src={ logo1} alt=""/>
                <div className="title--general">
                    <AiFillInstagram className="title--general__icons"/>
                    <AiFillLinkedin className="title--general__icons"/>
                    <FaTelegramPlane className="title--general__icons"/>
                    <IoLogoWhatsapp className="title--general__icons"/>
                </div>


            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox"/>
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                    <h1 className="menu--block">menu</h1>
                </label>

                <ul className="menu__box">
                        <li><a className="menu__item" href="#">Home</a></li>
                        <li><a className="menu__item" href="#">Service</a></li>
                        <li><a className="menu__item" href="#">Our projects</a></li>
                        <li><a className="menu__item" href="#">Our team</a></li>

                </ul>
            </div>
            </div>
        </section>

    );
};

export default Fixed;