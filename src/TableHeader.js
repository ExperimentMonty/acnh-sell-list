import React from "react";
import HeaderToggle from "./HeaderToggle";

export default class TableHeader extends React.Component {

    render() {
        return (
            <>
                <HeaderToggle
                    title="Bugs"
                    status={this.props.bugsIncluded}
                    onClick={this.props.bugsOnClick}
                />
                <HeaderToggle
                    title="Fish"
                    status={this.props.fishIncluded}
                    onClick={this.props.fishOnClick}
                />
                <HeaderToggle
                    title="Forage"
                    status={this.props.forageIncluded}
                    onClick={this.props.forageOnClick}
                />
                <HeaderToggle
                    title="Show Stacked Item Values"
                    status={this.props.showStacks}
                    onClick={this.props.showStacksOnClick}
                />
            </>
        )
    }
}