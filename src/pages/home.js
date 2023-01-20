import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import demoData from '../demo-data.json';

export const Home = () => {
    const options = demoData.katas.map((kata, index,) => <option key={index} value={kata.id}>{kata.id} - {kata.name}</option>);

    return (
        <main>
            <h1>Welcome to Kata Navigator</h1>
            <h2>Please select a Kata to get Started</h2>

            <SelectKata options={options} />
        </main>
    );
}

function SelectKata(props) {
    const [kataId, setKataId] = useState(1);

    return (
        <form>
            <select onChange={(event) => setKataId(event.target.value)}>
                {props.options}
            </select>
            <Link to={"/kata-nav/" + kataId}>
                <button>Submit</button>
            </Link>
        </form>
    );
}