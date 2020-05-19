import React from "react";

export default class HeaderToggle extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClick}>
                {this.props.title}
            </button>
        )
    }
}