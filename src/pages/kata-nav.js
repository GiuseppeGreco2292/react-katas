import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Page404 } from './404';
import MarkdownView from 'react-showdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import demoData from '../demo-data.json';

export const KataNavigator = () => {
    const [stepNumber, setStep] = useState(0);
    const { id } = useParams()

    const kata = demoData.katas.find(kata => kata.id === Number(id));
    if (!kata)
        return (
            <Page404 />
        );
    const step = kata.steps[stepNumber];

    function increaseStep(stepNumber) {
        const maxStep = kata.steps.length;
        const nextStep = (stepNumber + 1) >= maxStep ? 0 : stepNumber + 1;
        setStep(nextStep);
    }

    return (
        <main>
            <h1>Kata Navigator</h1>
            <Link to="/"><button>Home</button></Link>
            <h2>{kata.name}</h2>
            <Instructions step={step} />
            <Solution step={step} />
            <Navigation onClick={() => increaseStep(stepNumber)} stepNumber={stepNumber} />
        </main>
    );
}

function Instructions(props) {
    const hints = getHints(props.step);

    return (
        <section>
            <h3>{props.step.name}</h3>
            {hints}
            <p><i>Placeholder for Instructions</i></p>
        </section>
    );
}

function Solution(props) {
    const questions = getQuestions(props.step);

    return (
        <section>
            <SyntaxHighlighter
                language={props.step.solution.langue}
                style={atomOneDark}
                wrapLongLines={true}
            >{props.step.solution.code}</SyntaxHighlighter>
            {questions}
            <p><i>Placeholder for Solution</i></p>
        </section>
    );
}

function Navigation(props) {
    const label = `Current Step: ${props.stepNumber} - Increase`;

    return (
        <section>
            <button onClick={props.onClick}>{label}</button>
            <p><i>Placeholder for Navigation</i></p>
        </section>
    );
}

function getHints(step) {
    if (!step.hints) return "";

    const hints = step.hints.map((hint, index) => {
        const markdown = <MarkdownView
            key={index}
            markdown={hint}
        />

        return (
            <li key={index}><i>{markdown}</i></li>
        );
    });

    return (
        <div>
            <p><b>Hints:</b></p>
            <ul>{hints}</ul>
        </div>
    );
}

function getQuestions(step) {
    if (!step.questions) return "";

    const questions = step.questions.map((question, index) => {

        const markdown = <MarkdownView
            key={index}
            markdown={`${question.question}  ${question.answer}`}
        />

        return (
            <li key={index}>{markdown}</li>
        );
    });

    return (
        <div>
            <p><b>Questions:</b></p>
            <ul>{questions}</ul>
        </div>
    );
}