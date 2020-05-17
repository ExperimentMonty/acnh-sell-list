import React from "react";
import ItemRow from "./ItemRow";

class ItemTable extends React.Component {

    renderItems(itemList) {
        return itemList.map((itemDetails) => {
                // const itemDetails = item[1];
                console.log(itemDetails)
                return <ItemRow key={itemDetails.name} {...itemDetails} />;
            }
        )
    }

    render() {
        const bugItems = this.renderItems(this.props.bugsList);
        const fishItems = this.renderItems(this.props.fishList);
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {bugItems}
                    {fishItems}
                </tbody>
            </table>
        );
    }
}

export default ItemTable;