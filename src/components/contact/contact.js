import React from 'react';
import {FaLinkedinIn, FaTelegramPlane} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {IoLogoWhatsapp, IoMdCall} from "react-icons/io";
import {SiGmail} from "react-icons/si";
import maps from '../../assests/img/maps.png'
const Contact = () => {
    return (
        <section id="contact">
            <div className="contact">
                <div className="contact--general">
                    <h2>CONTACTS</h2>
                    <div className="contact--general__block">
                        <div className="contact--general__block--email">
                            <FaTelegramPlane className="contact--general__block--email__icon"/>
                            <a href="#">thedastan_official</a>
                        </div>
                        <div className="contact--general__block--email">
                            <FaLinkedinIn className="contact--general__block--email__icon"/>
                            <a href="#">motion-web</a>
                        </div>
                        <div className="contact--general__block--email">
                            <AiFillInstagram className="contact--general__block--email__icon"/>
                            <a href="#">motionweb.io</a>
                        </div>
                        <div className="contact--general__block--email">
                            <IoLogoWhatsapp className="contact--general__block--email__icon"/>
                            <a href="#">motion-web</a>
                        </div>
                        <div className="contact--general__block--email">
                            <SiGmail className="contact--general__block--email__icon"/>
                            <a href="#">motionwebteam@gmail.com</a>
                        </div>
                        <div className="contact--general__block--email">
                            <IoMdCall className="contact--general__block--email__icon"/>
                            <a href="#">+996 559-69-26-26</a>
                        </div>
                        <div className="contact--general__block--title"></div>
                    </div>
                    <div className="contact--general__circle2"></div>
                </div>
                <div className="contact--image">
                    <img src={maps} alt=""/>
                </div>
            </div>
        </section>

    );
};

export default Contact;