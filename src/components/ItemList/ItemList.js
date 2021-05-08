import React from "react";
import Item from "../Item/Item"
import List from '@material-ui/core/List';


const ItemList = ({items, onClickDone}) => (
        <List>
            {items.map(item => (
                <Item key={item.value} value={item.value} isDone={item.isDone} onClickDone={onClickDone} />
            ))}
        </List>
    );


export default ItemList;