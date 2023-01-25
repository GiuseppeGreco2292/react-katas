import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { InfoRow } from '../components/info-row';
import { KataCard } from '../components/kata-card';
import demoData from '../demo-data.json';

export const Home = () => {
    const [activeId, setActiveId] = useState(null);
    const katas = demoData.katas;
    const activeKata = activeId ? katas.find((kata) => kata.id == activeId) : null;

    return (
        <React.Fragment>
            <Header hasHomeLink={false} />
            <main>
                <KataSelect
                    katas={katas}
                    activeId={activeId}
                    setActive={setActiveId}
                />
                <KataInfo activeKata={activeKata} />
            </main>
        </React.Fragment>
    );
}

function KataSelect({ katas, activeId, setActive }) {

    const options = katas.map((kata, index) => {
        const languages = extractLanguages(kata);
        const isActive = activeId === kata.id;
        return <KataCard
            key={index}
            id={kata.id}
            name={kata.name}
            languages={languages}
            handleClick={setActive}
            isActive={isActive}
        />;
    });

    return (
        <section className='home-section' id="select-section">
            <h2>Select Kata</h2>
            {options}
        </section>
    );
}

function KataInfo({ activeKata }) {
    const info = formatInfo(activeKata);
    const trainBtn = activeKata ?
        <Link to={"/kata-nav/" + activeKata.id} >
            <button className="home-train-btn" type="button">Train</button>
        </Link> :
        null;

    return (
        <section className='home-section' id="info-section">
            <h2>Info</h2>
            {info}
            {trainBtn}
        </section>
    );
}

function formatInfo(kata) {
    let info;

    if (!kata) {
        info = <p>Please select a Kata to show info</p>;
    } else {
        const name = <InfoRow type="name" value={kata.name} />;
        const source = kata.source ?
            <InfoRow type="source" value={kata.source} /> :
            null;
        const languages = <InfoRow type="languages" value={extractLanguages(kata)} />;
        const steps = <InfoRow type="steps" value={kata.steps.length} />;
        const questions = <InfoRow type="questions" value={hasNestedProperty(kata.steps, 'questions') ? '✓' : '✗'} />;
        const hints = <InfoRow type="hints" value={hasNestedProperty(kata.steps, 'hints') ? '✓' : '✗'} />;

        info = <React.Fragment>
            {name}
            {source}
            {languages}
            {steps}
            {questions}
            {hints}
        </React.Fragment>;
    }

    return (
        <div className="infobox">
            {info}
        </div>
    );
}

function extractLanguages(kata) {
    const steps = kata.steps;

    const languages = steps.reduce((accumulator, current) => {

        if (accumulator === '') {
            return current.solution.language;
        }

        if (accumulator.includes(current.solution.language))
            return accumulator;

        return accumulator + ", " + current.solution.language;
    }, '');

    return languages;
}

function hasNestedProperty(haystack, needle) {
    let result = false;
    haystack.forEach(step => {
        console.log(step);
        if (step.hasOwnProperty(needle)) result = true;
    });

    return result;
}