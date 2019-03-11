import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    button: {
        width: '250px',
        borderRadius: '5px',
        border: '1px solid grey',
        cursor: 'pointer',
        outline: 'none'
    }
}

const button = ({ children, convertFunc, classes }) => (
    <button className={classes.button} onClick={convertFunc}>{children}</button>
);

export default injectSheet(styles)(button);