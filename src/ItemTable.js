import React from "react";
import ItemRow from "./ItemRow";

export default class ItemTable extends React.Component {
    sortItems(...itemLists) {
        return itemLists[0].concat(...itemLists.slice(1)).sort(((a,b) => a.price - b.price));
    }

    renderItems(itemList) {
        return itemList.map((itemDetails) => {
                // const itemDetails = item[1];
                // console.log(itemDetails)
                return <ItemRow key={itemDetails.name} {...itemDetails} />;
            }
        )
    }

    render() {
        const sortedList = this.sortItems(...this.props.itemLists);
        const sortedItems = this.renderItems(sortedList);
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {sortedItems}
                </tbody>
            </table>
        );
    }
}