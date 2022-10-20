import React, {useState} from 'react';
const Vacancies = () => {
    const [open,setOpen] = useState(false)
    return (
        <section id="vacancies">
            <div className="vacancies">
                <div className="vacancies--general">
                    <h1>OPEN VACANCIES</h1>
                    <div className="vacancies--general__block">
                        <div className="vacancies--general__block--lines"></div>
                        <div className="vacancies--general__block--title">
                            <h2>Mobile/Flutter developer</h2>

                            {/*<div className="vacancies--general__block--title__circle">*/}
                            {/*    <h3>view</h3>*/}
                            {/*</div>*/}

                            <button onClick={() => setOpen(true)}>open modal</button>
                            <modal open = {open} onClose {() => setOpen (false)}>
                                <box position = "absolute" top = "50%" left="50%">
                                    <typography>It is modal</typography>
                                    <button onClick={() => setOpen(false)}>click me</button>

                                </box>
                            </modal>

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