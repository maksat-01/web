import React from 'react';

const Vacancies = ({active, setActive, children}) => {


    // const btn = document.querySelector(".vacancies--general__block--title__click")
    // btn.addEventListener("click", () => {
    //     document.querySelector(".vacancies--modal").style.display = "block"
    // })
    //
    // const btnClose = document.querySelector(".vacancies--general__block--modal__block2--square__close")
    // btnClose.addEventListener("click", () => {
    //     document.querySelector(".vacancies--modal").style.display = "block"
    // })
    return (
        <section id="vacancies">
            <div className="vacancies">
                <div className="vacancies--general">
                    <h1>OPEN VACANCIES</h1>
                    <div className="vacancies--general__block">
                        <div className="vacancies--general__block--lines"></div>
                        <div className="vacancies--general__block--title">
                            <h2>Mobile/Flutter developer</h2>
                            <div className="vacancies--general__block--title__circle">
                             <h3>view</h3>
                            </div>
                            <div>
                                <span className="vacancies--general__block--title__click">Actual</span>
                            </div>
                        </div>
                        <div className={active ? "modal__active" : "modal"} onClick={() => setActive(false)}>
                            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                                {children}
                            </div>
                        </div>

                        <div className="vacancies--general__block--lines"></div>
                        <div className="vacancies--general__block--title">
                            <h2>Mobile/Flutter developer</h2>
                            <div>
                                <span>Actual</span>
                            </div>
                        </div>
                        <div className="vacancies--general__block--lines"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vacancies;