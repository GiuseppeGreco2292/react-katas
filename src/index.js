import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { KataNavigator } from './pages/kata-nav';
import { Page404 } from './pages/404';
import './index.css';
import demoData from './demo-data.json';

function App(props) {

  return (
    <Routes>
      <Route path={"/"} element={<KataNavigator kata={props.kata} />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
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
    <BrowserRouter>
      <App kata={kata} />
    </BrowserRouter>
  </React.StrictMode>
);