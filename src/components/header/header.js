import React from 'react';
import {VscArrowRight} from  'react-icons/vsc'
import scroll from "../../assests/img/scroll.svg";

const Header = () => {
    return (
<>
    <section id="about">
        <div className="about">
            <div className="about--general">
                <h1>MOTION WEB IT <br/>STUDIO</h1>
                <div className="about--general__line"></div>
                <div className="about--general__title">
                    <p>We will develop a project for your <br/>business as if our own money and <br/>success are at stake.</p>
                    <div className="about--general__title--btn">
                        <button >ROLAN </button>
                        <VscArrowRight className="about--general__title--btn__click"/>
                    </div>
                    <div className="about--general__title--block"></div>
                </div>

            </div>
        </div>
    </section>


</>

    );
};

export default Header;