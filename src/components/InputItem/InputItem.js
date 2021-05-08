import React from 'react';
import Item from './Item/Item';
import styles from './InputItem.module.css';
import Box from './Box/Box';
import Icon from './Icon/Icon';


const InputItem = ({items}) => (<div className={styles.wrap}>
    <ul>
    {items.map(item => <li key={item.value} className={styles.item}>
        <Box/>
        <Item value={item.value} isDone={item.isDone}/>
        <Icon/>
        </li>)} 
       
</ul></div>);

export default InputItem;