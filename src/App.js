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

        // Load forage items (might split this out into shells and others at some point
        // TODO: Make this function handle multiples? Or maybe make the multiple show up as a hover?
        let forage = require('./forage.json');
        const forageList = Object.entries(forage).map((rawItem) => rawItem[1]) // Gets the details as the top level object
            .filter((itemDetails) => {
                return itemDetails.seasonsNorthernHemisphere[currentMonth];
            })
            .reduce((output, item) => {
                // I'm pretty sure there's a cleaner way to show stacked items than this, but oh well,
                // I'm learning a lot by doing it this way
                console.log(item);
                output.push(item)
                for (let i = item.interval; i < item.maxStack; i = i+item.interval) {
                    if (i === 1) {
                        continue;
                    }
                    let stackedItem = {...item};
                    stackedItem.name = stackedItem.name + " x " + i;
                    stackedItem.price = stackedItem.price * i;
                    output.push(stackedItem);
                }
                return output;
            }, []);

        this.state = {
            bugsIncluded: true,
            fishIncluded: true,
            forageIncluded: true,
            bugsList: bugsList,
            fishList: fishList,
            forageList: forageList,
        };
    }

    // TODO: Refactor these toggle functions into one configurable function
    toggleBugs() {
        this.setState({bugsIncluded: !this.state.bugsIncluded})
    }

    toggleFish() {
        this.setState({fishIncluded: !this.state.fishIncluded})
    }

    toggleForage() {
        this.setState({forageIncluded: !this.state.forageIncluded})
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
                    forageIncluded={this.state.forageIncluded}
                    bugsOnClick={() => this.toggleBugs()}
                    fishOnClick={() => this.toggleFish()}
                    forageOnClick={() => this.toggleForage()}
                />
                <ItemTable
                    itemLists={
                        [this.state.bugsIncluded ? this.state.bugsList : [],
                        this.state.fishIncluded ? this.state.fishList: [],
                        this.state.forageIncluded ? this.state.forageList: [],]
                    }
                />
            </div>
        );
    }
}

export default App;
