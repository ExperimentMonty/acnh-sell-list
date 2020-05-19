// import React from 'react';
import React from 'react';
import ItemTable from './ItemTable';
import './App.css';
import HeaderToggle from "./HeaderToggle";
import TableHeader from "./TableHeader";

class App extends React.Component {
    constructor(props) {
        super(props);
        const currentDate = new Date();
        const currentMonth = currentDate.toLocaleString('en', {month: 'short'}).toLowerCase();

        // Load bugs
        let bugs = require('./bugs.json');
        console.log(bugs);
        const bugsList = Object.entries(bugs).map((rawItem) => rawItem[1]) // Gets the details as the top level object
            .filter((itemDetails) => {
                //console.log(itemDetails.seasonsNorthernHemisphere)
                return itemDetails.seasonsNorthernHemisphere[currentMonth];
            });

        // Load fish
        let fish = require('./fish.json');
        const fishList = Object.entries(fish).map((rawItem) => rawItem[1]) // Gets the details as the top level object
            .filter((itemDetails) => {
                //console.log(itemDetails.seasonsNorthernHemisphere)
                return itemDetails.seasonsNorthernHemisphere[currentMonth];
            });

        this.state = {
            bugsIncluded: true,
            fishIncluded: true,
            bugsList: bugsList,
            fishList: fishList,
        };
    }

    toggleBugs() {
        this.setState({bugsIncluded: !this.state.bugsIncluded})
    }

    toggleFish() {
        this.setState({fishIncluded: !this.state.fishIncluded})
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h2>Animal Crossing Prices</h2>
                </header>
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
                <TableHeader
                    bugsIncluded={this.state.bugsIncluded}
                    fishIncluded={this.state.fishIncluded}
                    bugsOnClick={() => this.toggleBugs()}
                    fishOnClick={() => this.toggleFish()}
                />
                <ItemTable
                    bugsList={this.state.bugsIncluded ? this.state.bugsList : []}
                    fishList={this.state.fishIncluded ? this.state.fishList: []}
                />
            </div>
        );
    }
}

export default App;
