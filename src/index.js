import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { KataNavigator } from './pages/kata-nav';
import { Page404 } from './pages/404';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/kata-nav/:id"} element={<KataNavigator />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

// ================================================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*

    const [stepNumber, setStep] = useState(0);
    const kata = props.kata;
    const step = kata.steps[stepNumber];

    function increaseStep(stepNumber) {
        const maxStep = kata.steps.length;
        const nextStep = (stepNumber + 1) >= maxStep ? 0 : stepNumber + 1;
        setStep(nextStep);
    }

*/