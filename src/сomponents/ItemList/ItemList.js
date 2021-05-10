import React from "react";
import Item from "../Item/Item"
import styles from './ItemList.module.css'

const ItemList = ({items, onClickDone, onClickDelete}) => (<div className={styles.wrap}>
            {items.map(item => <span key={item.value} className={styles.item} >
                 <Item 
                    value={item.value} 
                    isDone={item.isDone}
                    id={item.id} 
                    onClickDone={onClickDone}
                    onClickDelete={onClickDelete} 
                    />
                    </span>)}           
        </div>);


export default ItemList;