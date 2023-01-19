import React from 'react';
import { Link } from 'react-router-dom';
import demoData from '../demo-data.json';

export const Home = () => {
    const options = demoData.katas.map((kata, index) => <option ket={index}>{kata.id} - {kata.name}</option>);

    return (
        <main>
            <h1>Welcome to Kata Navigator</h1>
            <h2>Please select a Kata to get Started</h2>

            <form>
                <select>
                    {options}
                </select>
                <Link to="/kata-nav/1">
                    <button>Submit</button>
                </Link>
            </form>
        </main>
    );
}