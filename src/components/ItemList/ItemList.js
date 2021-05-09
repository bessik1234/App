import React from "react";
import Item from "../Item/Item"
import List from '@material-ui/core/List';
import styles from './ItemList.module.css'

const ItemList = ({items, onClickDone, onClickDelete}) => (<List className={styles.wrap}>
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