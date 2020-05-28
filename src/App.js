// import React from 'react';
import React from 'react';
import ItemTable from './ItemTable';
import './App.css';
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
                return itemDetails.seasonsNorthernHemisphere[currentMonth];
            });

        // Load fish
        let fish = require('./fish.json');
        const fishList = Object.entries(fish).map((rawItem) => rawItem[1]) // Gets the details as the top level object
            .filter((itemDetails) => {
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
                <TableHeader
                    bugsIncluded={this.state.bugsIncluded}
                    fishIncluded={this.state.fishIncluded}
                    bugsOnClick={() => this.toggleBugs()}
                    fishOnClick={() => this.toggleFish()}
                />
                <ItemTable
                    itemLists={
                        [this.state.bugsIncluded ? this.state.bugsList : [],
                        this.state.fishIncluded ? this.state.fishList: []]
                    }
                />
            </div>
        );
    }
}

export default App;
