import React from "react";
import HeaderToggle from "./HeaderToggle";

export default class TableHeader extends React.Component {

    render() {
        return (
            <>
                <HeaderToggle
                    title="Bugs"
                    onClick={this.props.bugsOnClick}
                />
                <HeaderToggle
                    title="Fish"
                    onClick={this.props.fishOnClick}
                />
            </>
        )
    }
}