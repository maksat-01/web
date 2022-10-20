import React from 'react';

const Vacancies = () => {
    return (
        <section id="vacancies">
            <div className="vacancies">
                <div className="vacancies--general">
                    <h1>OPEN VACANCIES</h1>
                    <div className="vacancies--general__block">
                        <div className="vacancies--general__block--lines"></div>
                        <div className="vacancies--general__block--title">
                            <h2>Mobile/Flutter developer</h2>
                            <div>
                                <span className="vacancies--general__block--title__click">Actual</span>
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