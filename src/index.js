import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { KataNavigator } from './pages/kata-nav';
import { Page404 } from './pages/404';
import './index.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/kata-nav/:id"} element={<KataNavigator />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
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