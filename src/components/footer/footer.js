import React from 'react';
import logo2 from '../../assests/img/logo2.png'
import logo3 from '../../assests/img/logo3.png'

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer">
                <div className="footer--general">
                    <div className="footer--general__block">
                        <h1>Form <br/>us <br/>about <br/>your project</h1>
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="footer--general__title">
                        <div className="footer--general__title--name">
                            <h2>Full name:</h2>
                            <div className="footer--general__title--name__group">
                                <input type="name" />
                                <div className="footer--general__title--name__group--line"></div>
                            </div>
                        </div>
                        <div className="footer--general__title--name">
                            <h2>Phone number:</h2>
                            <div className="footer--general__title--name__group">
                                <input type="number" />
                                <div className="footer--general__title--name__group--line"></div>
                            </div>
                        </div>
                        <div className="footer--general__title--name">
                            <h2>Your massage</h2>
                            <div className="footer--general__title--name__group">
                                <input type="name" />
                                <div className="footer--general__title--name__group--line"></div>
                            </div>
                        </div>
                        <div className="footer--general__title--btn">
                            <button>Submit</button>
                            <p>© Copyright "Motion Web LLC" 2022</p>
                        </div>
                        <img src={logo3} alt="" className="footer--general__title--image"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;