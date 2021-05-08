import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Box = () => (<div>
    <Checkbox
    checked={checked}
    onChange={handleChange}
    inputProps={{ 'aria-label': 'primary checkbox' }}
  /></div>
);

export default Box;