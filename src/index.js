import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import demoData from './demo-data.json';

function App(props) {

  const [step, setStep] = useState(0);

  function increaseStep(step) {
    const maxStep = props.kata.steps.length;
    const nextStep = (step + 1) >= maxStep ? 0 : step + 1;

    console.log(nextStep);
    setStep(nextStep);
  }

  return (
    <main>
      <h1>Kata Navigator</h1>
      <Instructions name={props.kata.name} />
      <Solution step={props.kata.steps[step]} />
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

  return(
    <section>
      <h2>{props.step.name}</h2>
      <code id="code-solution">{props.step.solution}</code>
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

// ================================================================

const kata = pickKata();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App kata={kata} />
  </React.StrictMode>
);