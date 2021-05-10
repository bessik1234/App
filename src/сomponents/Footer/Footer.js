import React from "react";
import styles from './Footer.module.css'
import PropTypes from 'prop-types';

const Footer = ( { count, onClickFooter }) => (
    <div className={styles.tasks} onClick={onClickFooter}> Осталось выполнить: {count} дел</div>
);

Footer.defaultProps = {

    count: 0

};
Footer.propTypes = {

    count: PropTypes.number
};
export default Footer