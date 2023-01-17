import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import demoData from './demo-data.json';

function App(props) {

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
      <Navigation onClick={() => increaseStep(stepNumber)} stepNumber={stepNumber}/>
    </main>
  );
}

function Instructions(props) {
  const hints = getHints(props.step);

  return(
    <section>
      <h3>{props.step.name}</h3>
      {hints}
      <p><i>Placeholder for Instructions</i></p>
    </section>
  );
}

function Solution(props) {
  const questions = getQuestions(props.step);

  return(
    <section>
      <code id="code-solution">{props.step.solution}</code>
      {questions}
      <p><i>Placeholder for Solution</i></p>
    </section>
  );
}

function Navigation(props) {
  const label = `Current Step: ${props.stepNumber} - Increase`;

  return(
    <section>
      <button onClick={props.onClick}>{label}</button>
      <p><i>Placeholder for Navigation</i></p>
    </section>
  );
}

function pickKata() {
  // TODO: business logic, pick kata
  return demoData.katas[0];
}

function getHints(step) {
  if (!step.hints) return "";

  const hints = step.hints.map((hint, index) => 
    <li key={index}><i>{hint}</i></li>
  );

  return (
    <div>
      <p><b>Hints:</b></p>
      <ul>{hints}</ul>
    </div>
  );
}

function getQuestions(step) {
  if (!step.questions) return "";

  const questions = step.questions.map((note, index) => 
    <li key={index}>{note.question} {note.answer}</li>
  );

  return (
    <div>
      <p><b>Questions:</b></p>
      <ul>{questions}</ul>
    </div>
  );
}

// ================================================================

const kata = pickKata();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App kata={kata} />
  </React.StrictMode>
);