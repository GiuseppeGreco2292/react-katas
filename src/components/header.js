import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ hasHomeLink }) => {
    const homeLink = hasHomeLink ?
        <Link to="/" className="home-link"><i>HOME</i></Link> :
        null;

    return (
        <header>
            <h1>{homeLink}Simple Kata Navigator</h1>
        </header>
    );
}