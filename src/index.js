import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import demoData from './demo-data.json';

function App(props) {
  return (
    <main>
      <h1>Kata Navigator</h1>
      <Instructions name={props.kata.name} />
      <Solution step={props.kata.steps[0]} />
      <Navigation />
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