import React from "react";
import styles from './Footer.module.css'

const Footer = ( { count, onClickFooter }) => (
    <div className={styles.tasks} onClick={onClickFooter}> Осталось выполнить: {count} дел</div>
);

Footer.defaultProps = {

    count: 0

};
export default Footer