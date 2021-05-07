import React from 'react';
import styles from './Input.module.css';
import TextField from '@material-ui/core/TextField';

const Input = () => (<div > 
<TextField 
  id="outlined-full-width"
  label="Запиши"
  style={{ margin: 8 }}
  placeholder="Ну давай, бахнем!"
  helperText="Дела делаются"
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
  variant="outlined"
  />
    </div>
);

export default Input;