import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { KataCard } from '../components/kata-card';
import demoData from '../demo-data.json';

export const Home = () => {

    return (
        <React.Fragment>
            <Header hasHomeLink={false} />
            <main>
                <section className='home-section'>
                    <h2>Select Kata</h2>
                    <KataSelect />
                </section>
                <section className='home-section' id="info-section">
                    <h2>Info</h2>
                    <KataInfo />
                </section>

            </main>
        </React.Fragment>
    );
}

function KataSelect() {
    const [kataId, setKataId] = useState(demoData.katas[0].id);

    const options = demoData.katas.map((kata, index) => {
        const languages = kata.steps.reduce((string, current) => {
            if (string === "") return current.solution.language;
            if (!string.includes(current.solution.language)) return `, ${current.solution.language}`;
            return "";
        }, "");
        console.log(languages);
        return <KataCard key={index} name={kata.name} languages={languages} />;
    });

    return (
        <React.Fragment>
            {options}
        </React.Fragment>
    );

    /*     const options = demoData.katas.map((kata, index,) => <option key={index} value={kata.id}>{kata.id} - {kata.name}</option>);
    
        return (
            <form>
                <select onChange={(event) => setKataId(event.target.value)}>
                    {options}
                </select>
                <Link to={"/kata-nav/" + kataId}>
                    <button>Go</button>
                </Link>
            </form>
        ); */
}

function KataInfo() {

}