import React from "react";
import styles from "./Item.module.css"
import classnames from "classnames"
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';


const Item = ({value, isDone, id , onClickDone}) => (
    <ListItem className={
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
            <IconButton aria-label="Comments">
            <Button variant="contained">Del</Button>
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
);

export default Item;