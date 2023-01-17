import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import demoData from './demo-data.json';

function App(props) {

  const [step, setStep] = useState(0);

  const kata = props.kata;

  function increaseStep(step) {
    const maxStep = kata.steps.length;
    const nextStep = (step + 1) >= maxStep ? 0 : step + 1;
    setStep(nextStep);
  }

  return (
    <main>
      <h1>Kata Navigator</h1>
      <Instructions name={kata.name} />
      <Solution step={kata.steps[step]} />
      <Navigation onClick={() => increaseStep(step)} step={step}/>
    </main>
  );
}

function Instructions(props) {

  return(
    <section>
      <h2>{props.name}</h2>
      <p>Placeholder for <i>Instructions</i></p>
    </section>
  );
}

function Solution(props) {
  const hints = setHints(props.step);
  const notes = setNotes(props.step);

  return(
    <section>
      <h2>{props.step.name}</h2>
      {hints}
      <code id="code-solution">{props.step.solution}</code>
      {notes}
      <p>Placeholder for <i>Solution</i></p>
    </section>
  );
}

function Navigation(props) {

  return(
    <section>
      <h2>Placeholder for Navigation section</h2>
      <button
        onClick={props.onClick}
      >Current Step: {props.step} - Increase</button>
    </section>
  );
}

function pickKata() {
  // TODO: business logic, pick kata
  return demoData.katas[0];
}

function setHints(step) {
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

function setNotes(step) {
  if (!step.notes) return "";

  const notes = step.notes.map((note, index) => 
    <li key={index}>{note}</li>
  );

  return (
    <div>
      <p><b>Notes:</b></p>
      <ul>{notes}</ul>
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