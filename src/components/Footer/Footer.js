import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Footer = ({count}) => (
    <Typography component="p">
        Осталось сделать: {count}
    </Typography>
);

Footer.defaultProps = {
    count: 0
};

Footer.propTypes = {
    count: PropTypes.number.isRequired
};

export default Footer;