import React from "react";
import styles from "./Item.module.css"
import classnames from "classnames"
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class Item extends React.Component {
    
        componentDidMount() {
            this.timerID = setInterval(() => console.log('Я краду память'), 500);
        }
    
        componentWillUnmount() {
            clearInterval(this.timerID);
        }
   
    render() {
        const {value, isDone, id, onClickDone, onClickDelete} = this.props;
        return (<ListItem className={
            classnames({
                [styles.item]: true,
                [styles.done]: isDone,
               
    
            })
        } >
            <Checkbox
                 checked = {isDone}
                 tabIndex = {-1}
                 onClick = {() => onClickDone(id)} />
                 
            <ListItemText > {value}</ListItemText>
            <ListItemSecondaryAction className={styles.delete}>
                <Button variant="contained" onClick={() => onClickDelete(id)}  >Del</Button>
            </ListItemSecondaryAction>
        </ListItem>);
}};


Item.defaultProps = {
    isDone: false
};
Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default Item;


