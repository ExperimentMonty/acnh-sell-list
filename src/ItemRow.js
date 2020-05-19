import React from "react";

export default class ItemRow extends React.Component {
    render() {
        const name = this.props.name;
        const price = this.props.price
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}