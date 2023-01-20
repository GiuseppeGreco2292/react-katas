import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import demoData from '../demo-data.json';

export const Home = () => {

    return (
        <main>
            <h1>Welcome to Kata Navigator</h1>
            <h2>Please select a Kata to get Started</h2>

            <SelectKata />
        </main>
    );
}

function SelectKata() {
    const [kataId, setKataId] = useState(demoData.katas[0].id);

    const options = demoData.katas.map((kata, index,) => <option key={index} value={kata.id}>{kata.id} - {kata.name}</option>);

    return (
        <form>
            <select onChange={(event) => setKataId(event.target.value)}>
                {options}
            </select>
            <Link to={"/kata-nav/" + kataId}>
                <button>Go</button>
            </Link>
        </form>
    );
}