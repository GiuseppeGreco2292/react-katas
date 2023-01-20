import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
    <header>
        <h1>Simple Kata Navigator</h1>
        <Link to="/"><button>Home</button></Link>
    </header>
);