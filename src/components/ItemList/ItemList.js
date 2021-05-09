import React from "react";
import Item from "../Item/Item"
import List from '@material-ui/core/List';


const ItemList = ({items, onClickDone, onClickDelete}) => (<List>
            {items.map(item => <li key={item.value} >
                 <Item 
                    value={item.value} 
                    isDone={item.isDone}
                    id={item.id} 
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete} 
                    />
                    </li>)}           
        </List>);


export default ItemList;