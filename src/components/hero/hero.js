import React from 'react';
import scroll from "../../assests/img/scroll.svg";



const Hero = () => {
    return (
        <div className="sidebar">
            <section id="scroll">
                <div className="scroll">
                    <div className="scroll--general">
                        <h1>Motion Web LLC</h1>
                        <h2>KEE <br/>P <br/>SCR<br/>OLL <br/>ING</h2>
                    </div>
                    <img src={scroll} alt=""/>

                </div>
            </section>
            <section id="hero">
                <div className="hero">
                    <div className="hero--general">
                        <h1>OUR SERVICE</h1>
                        <div className="hero--general__block">
                            <h2>The <span>Motion Web </span>team constantly monitors <br/>the development and trends in the field of IT. <br/>We actively apply the latest technologies in <br/>practice.</h2>
                        </div>

                    </div>
                    <div className="hero--block">
                        <div className="hero--title">
                            <div className="hero--title__block">
                                <h3>E-Commerce</h3>
                                <div className="hero--title__block--gee"></div>
                            </div>
                            <div className="hero--title__icon">
                                <h4>E-commerce is an area of <br/>the digital economy, which <br/>includes all the financial and <br/>trading scales that arise <br/>with the help of computer <br/>networks, and the business <br/>processes associated with <br/>such transactions.</h4>
                                <div className="hero--title__icon--block"></div>
                            </div>
                            <div className="hero--title__cube"></div>
                        </div>
                        <div className="hero--title">
                            <div className="hero--title__block">
                                <h3>E-Learning</h3>
                                <div className="hero--title__block--circle"></div>
                            </div>
                            <div className="hero--title__icon">
                                <h4>E-commerce is an area of <br/>the digital economy, which <br/>includes all the financial and <br/>trading scales that arise <br/>with the help of computer <br/>networks, and the business <br/>processes associated with <br/>such transactions.</h4>
                                <div className="hero--title__icon--block"></div>
                            </div>
                            <div className="hero--title__small"></div>
                        </div>

                    </div>
                </div>
            </section>

        </div>

    );
};

export default Hero;