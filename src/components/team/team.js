import React from 'react';
import product from "../../assests/img/product.png";
import product2 from "../../assests/img/product2.png";
import product3 from "../../assests/img/product3.png";
import product4 from "../../assests/img/product4.png";
import product5 from "../../assests/img/product5.png";
import product6 from "../../assests/img/product6.png";
import product7 from "../../assests/img/product7.png";
import scroll from './../../assests/img/scroll.svg'
const Team = () => {
    return (
        <section id="product">
            <div className="product">
                <div className="product--general">
                    <h1>OUR PROJECTS</h1>
                </div>
                <div className="product--scroll">
                    <img src={product} alt=""/>
                    <img src={product2} alt=""/>
                    <img src={product3} alt=""/>
                    <img src={product4} alt=""/>
                    <img src={product5} alt=""/>
                    <img src={product6} alt=""/>
                    <img src={product7} alt=""/>
                    <div className="product--scroll__block">
                        <h1>KEEP SCROLLING</h1>
                        <img src={scroll} alt=""/>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Team;