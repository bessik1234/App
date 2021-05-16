import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css'; 
const InputItem = ({value, error, onChange}) => (
    <div>
        <TextField id="filled-basic" label="Твое очень важное дело.." variant="filled" 
        className={styles.wrap}/>
    </div>
);

InputItem.propTypes = {
    value: PropTypes.oneOfType ([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ])
};
    


export default InputItem;