import React from 'react';
import List from '@material-ui/core/List';
import Item from '../Item/Item';
import PropTypes from 'prop-types';

const ItemsList = ({items, onClickDone, onClickDelete}) => (
    <List>
        {items.map(item => (
            <Item
                key={item.value}
                value={item.value}
                isDone={item.isDone}
                id={item.id}
                onClickDone={onClickDone}
                onClickDelete={onClickDelete}
            />
        ))}
    </List>
);

ItemsList.defaultProps = {
    items: [{
        value: 'Упс, задачи не найдены.',
        isDone: false,
    }]
};

ItemsList.propTypes = {
    items: PropTypes.array.isRequired
};


export default ItemsList;