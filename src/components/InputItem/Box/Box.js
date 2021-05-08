import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Box = () => (<div>
    <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      /></div>
);

export default Box;