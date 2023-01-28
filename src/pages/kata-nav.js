import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Page404 } from './404';
import { KeyIcon } from '../components/key-icon';
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

    function navigateSteps(stepNumber, increase) {
        const maxStep = kata.steps.length - 1;
        const nextStep = stepNumber + increase;

        if (nextStep < 0 || nextStep > maxStep) {
            setStep(0);
        } else {
            setStep(nextStep);
        }

    }

    return (
        <main className="kata-main">
            <h1 className="kata-h1">
                <Link to="/"><span className="h1-icon"></span></Link>
                {kata.name}
            </h1>
            <h2 className="kata-step-name">{step.name}</h2>
            <Instructions step={step} />
            <Solution step={step} />
            <Navigation handleNavigation={navigateSteps} stepNumber={stepNumber} />
        </main>
    );
}

function Instructions(props) {
    const hints = getHints(props.step);

    return (
        <section className="kata-section">
            {hints}
        </section>
    );
}

function Solution(props) {
    const questions = getQuestions(props.step);

    return (
        <section className="kata-section">
            <SyntaxHighlighter
                language={props.step.solution.langue}
                style={atomOneDark}
                wrapLongLines={true}
            >{props.step.solution.code}</SyntaxHighlighter>
            {questions}
        </section>
    );
}

function Navigation(props) {
    const handleKeyPress = useCallback((e) => {
        switch (e.key) {
            case 'ArrowRight':
                props.handleNavigation(props.stepNumber, 1);
                break;
            case 'ArrowLeft':
                props.handleNavigation(props.stepNumber, -1);
                break;
            default:
                break;
        }
    }, [props.handleNavigation]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    const label = `Step: ${props.stepNumber + 1} - Next`;

    return (
        <section className="kata-nav">
            <button onClick={() => props.handleNavigation(props.stepNumber, 1)}>{label}</button>
            <nav>
                <KeyIcon keyboard="←" explanation="Previous Step" />
                <KeyIcon keyboard="→" explanation="Next Step" />
            </nav>
        </section>
    );
}

function getHints(step) {
    if (!step.hints) return <p><i>No further instructions provided for this step</i></p>;

    const hints = step.hints.map((hint, index) => {
        const markdown = <MarkdownView
            key={index}
            markdown={hint}
        />

        return (
            <li key={index}>{markdown}</li>
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