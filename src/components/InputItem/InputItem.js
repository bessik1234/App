import React from "react";
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css'


const InputItem = () => (
    <div className={styles.wrap}>
            <TextField
                id="standard-with-placeholder"
                label="Добавим?"
                placeholder="Напиши, забудешь!"
                margin="normal"
                fullWidth
                variant="outlined"

            />
    </div>
        );


export default InputItem
