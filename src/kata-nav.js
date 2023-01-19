import React, { useState } from 'react';
import MarkdownView from 'react-showdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const KataNavigator = (props) => {

    const [stepNumber, setStep] = useState(0);
    const kata = props.kata;
    const step = kata.steps[stepNumber];

    function increaseStep(stepNumber) {
        const maxStep = kata.steps.length;
        const nextStep = (stepNumber + 1) >= maxStep ? 0 : stepNumber + 1;
        setStep(nextStep);
    }

    return (
        <main>
            <h1>Kata Navigator</h1>
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
                language="css"
                style={atomOneDark}
                wrapLongLines={true}
            >{props.step.solution}</SyntaxHighlighter>
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