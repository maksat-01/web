import React from 'react';
import scroll from "../../assests/img/scroll.svg";
import tool from '../../assests/img/tool.png'
import toolfigma  from '../../assests/img/toolfigma.png'
import tool2 from '../../assests/img/tool2.png'


const Tool = () => {
    return (
        <>
            <section id="tool">
                <section id="scroll">
                    <div className="scroll">
                        <div className="scroll--general">
                            <h1>Motion Web LLC</h1>
                            <h2>KEE <br/>P <br/>SCR<br/>OLL <br/>ING</h2>
                        </div>
                        <img src={scroll} alt=""/>

                    </div>
                </section>
                <div className="tool">
                    <div className="tool--general">
                        <img src={tool} alt="" className="tool--general__image"/>
                        <h1>TECHNOLOGIES and TOOLS</h1>
                        <img src={toolfigma} alt="" className="tool--general__image2"/>
                        <div className="tool--general__image4"></div>
                        <div className="tool--general__image5"></div>
                        <div className="tool--general__block">
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <div className="tool--general__block--title"></div>
                            <img src={tool2} alt="" className="tool--general__block--title__image3"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Tool;