import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = () => (<div > 
 <TextField
          id="standard-full-width"
          
          style={{ margin: 0 }}
          placeholder="С чего начнем?"
         
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </div>
);

export default Input;