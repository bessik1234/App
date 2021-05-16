import React from 'react';
import styles from './Item.module.css';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';


class Item extends React.Component {
    componentDidMount() {
        this.timerID = setInterval(() => console.log('Утечка'), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const {value, isDone, id, onClickDone, onClickDelete} = this.props;

        return (
        <div>
            <ListItem >
                <Checkbox
                    checked={isDone}
                    tabIndex={-1}
                    onClick={() => onClickDone(id)}
                />
                <ListItemText
                    primary={value}
                    classes={{
                        root: isDone && styles.done
                    }}
                />
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={ () => onClickDelete(id) }>
                        <DeleteIcon  />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider light />
        </div>
        );
    }
}

Item.defaultProps = {
    value: "Задача без имени"
};

Item.propTypes = {
    value: PropTypes.string.isRequired
};

export default Item;