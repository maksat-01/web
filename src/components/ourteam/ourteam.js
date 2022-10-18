import React from 'react';
import team from './../../assests/img/team.png'
import team2 from './../../assests/img/team2.png'
import team3 from './../../assests/img/team3.png'
import team4 from './../../assests/img/team4.png'
import team5 from './../../assests/img/team5.png'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'


const Ourteam = () => {
    return (
        <section id="our-team">
            <div className="our-team">
                <div className="our-team--general">
                    <h1>OUR TEAM</h1>
                </div>
                <div className="our-team--block">
                    <div className="our-team--block__item">
                        <div className="our-team--block__item--group">
                            <img src={team} alt=""/>
                            <div className="our-team--block__item--group__icon">
                                <h6>Kanatbek Askerov</h6>
                                <span>Founder</span>
                                <div className="our-team--block__item--group__icon--gmail">
                                    <FaLinkedinIn className="our-team--block__item--group__icon--gmail__in"/>
                                    <AiFillInstagram className="our-team--block__item--group__icon--gmail__in"/>
                                    <SiGmail className="our-team--block__item--group__icon--gmail__in"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--block__item--group">
                            <img src={team2} alt=""/>
                            <div className="our-team--block__item--group__icon">
                                <h6>Kanatbek Askerov</h6>
                                <span>Founder</span>
                                <div className="our-team--block__item--group__icon--gmail">
                                    <FaLinkedinIn className="our-team--block__item--group__icon--gmail__in"/>
                                    <AiFillInstagram className="our-team--block__item--group__icon--gmail__in"/>
                                    <SiGmail className="our-team--block__item--group__icon--gmail__in"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--block__item--group">
                            <img src={team3} alt=""/>
                            <div className="our-team--block__item--group__icon">
                                <h6>Kanatbek Askerov</h6>
                                <span>Founder</span>
                                <div className="our-team--block__item--group__icon--gmail">
                                    <FaLinkedinIn className="our-team--block__item--group__icon--gmail__in"/>
                                    <AiFillInstagram className="our-team--block__item--group__icon--gmail__in"/>
                                    <SiGmail className="our-team--block__item--group__icon--gmail__in"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--block__item--group">
                            <img src={team4} alt=""/>
                            <div className="our-team--block__item--group__icon">
                                <h6>Kanatbek Askerov</h6>
                                <span>Founder</span>
                                <div className="our-team--block__item--group__icon--gmail">
                                    <FaLinkedinIn className="our-team--block__item--group__icon--gmail__in"/>
                                    <AiFillInstagram className="our-team--block__item--group__icon--gmail__in"/>
                                    <SiGmail className="our-team--block__item--group__icon--gmail__in"/>
                                </div>
                            </div>
                        </div>
                        <div className="our-team--block__item--group">
                            <img src={team5} alt=""/>
                            <div className="our-team--block__item--group__icon">
                                <h6>Kanatbek Askerov</h6>
                                <span>Founder</span>
                                <div className="our-team--block__item--group__icon--gmail">
                                    <FaLinkedinIn className="our-team--block__item--group__icon--gmail__in"/>
                                    <AiFillInstagram className="our-team--block__item--group__icon--gmail__in"/>
                                    <SiGmail className="our-team--block__item--group__icon--gmail__in"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ourteam;