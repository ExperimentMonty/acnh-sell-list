import React from 'react';
import ItemRow from './ItemRow'
import './App.css';

function App() {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('en', {month: 'short'}).toLowerCase();
    let bugs = require('./bugs.json');
    console.log(bugs);
    const bugsList = Object.entries(bugs).map((rawItem) => rawItem[1]) // Gets the details as the top level object
        .filter((itemDetails) => {
            console.log(itemDetails.seasonsNorthernHemisphere)
            return itemDetails.seasonsNorthernHemisphere[currentMonth];
        })
        .map((itemDetails) => {
                // const itemDetails = item[1];
                // console.log(itemDetails)
                return <ItemRow key={itemDetails.name} {...itemDetails} />;
            }
        )

    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {bugsList}
                </tbody>
            </table>
        </div>
    );
}

export default App;
