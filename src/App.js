// JS
import Vacancies from './components/vacancies/vacancies'
import Tool from './components/tool/tool'
import Header from './components/header/header'
import Fixed from './components/fixed/fixed'
import Scroll from './components/scroll/scroll'
import Hero from './components/hero/hero'
import Projects from './components/projects/projects'
import Team from './components/team/team'
import Ourteam from './components/ourteam/ourteam'
import Footer from './components/footer/footer'
import Contact from './components/contact/contact'
// JS

// SASS
import './styles/style.scss'
import './styles/general.css'
// SASS

// REACT
import React, {useRef, useEffect, useState} from 'react';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// REACT

const App = () => {
    const [modalActive, setModalActive] = useState(true)
    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });

    }, []);


    return (
        <>
            <div className="container" ref={panelsContainer}>
                <div className="description panel blue" ref={(e) => createPanelsRefs(e, 0)}>
                    <Header/>
                </div>
                <Fixed/>
                <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
                    <Hero/>
                    <Scroll/>
                </section>
                <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
                    <Projects/>
                </section>
                <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
                    <Team/>
                </section>
                <section className="panel purple" ref={(e) => createPanelsRefs(e, 4)}>
                    <Ourteam/>
                </section>
                <section className="panel green" ref={(e) => createPanelsRefs(e, 5)}>
                    <Tool/>
                </section>
                <section className="panel purple" ref={(e) => createPanelsRefs(e, 6)}>
                    <Vacancies active={modalActive} setActive={setModalActive}/>
                </section>
                <section className="panel purple" ref={(e) => createPanelsRefs(e, 7)}>
                    <Contact/>
                </section>
                <section className="panel purple" ref={(e) => createPanelsRefs(e, 8)}>
                    <Footer/>
                </section>
            </div>
        </>
    );
};

export default App;
