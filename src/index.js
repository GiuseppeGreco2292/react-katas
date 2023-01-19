import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import demoData from './demo-data.json';
import { KataNavigator } from './kata-nav';

function App(props) {

  return (
    <KataNavigator kata={props.kata} />
  );
}

// ================================================================

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