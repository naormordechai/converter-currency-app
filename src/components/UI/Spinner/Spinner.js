import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    loader: {
        color: '#400040',
        textIndent: '-9999em',
        margin: '10px auto',
        position: 'relative',
        fontSize: '11px',
        '-webkit-transform': 'translateZ(0)',
        '-ms-transform': 'translateZ(0)',
        transform: 'translateZ(0)',
        '-webkit-animation-delay': '-0.16s',
        animationDelay: '-0.16s',
        background: '#400040',
        '-webkit-animation': 'load1 1s infinite ease-in-out',
        animation: 'load1 1s infinite ease-in-out',
        width: '1em',
        height: '4em',
        '&:before, &:after': {
            background: '#400040',
            '-webkit-animation': 'load1 1s infinite ease-in-out',
            animation: 'load1 1s infinite ease-in-out',
            width: '1em',
            position: 'absolute',
            top: '0',
            content: '',
            height: '4em',
        },
        '&:before': {
            left: '-1.5em',
            '-webkit-animation-delay': '-0.32s',
            animationDelay: '-0.32s',
        },
        '&:after': {
            left: '1.5em',
        }
    },
    '@keyframes load1': {
        '0%,80%,100%': {
            boxShadow: '0 0',
            // height: '4em',
        },
        '40%': {
            boxShadow: '0 -2em',
            // height: '5em',
        }
    },
    ' @keyframes load1': {
        '0%,80%,100%': {
            boxShadow: '0 0',
            // height: '4em',
        },
        '40%': {
            boxShadow: '0 -2em',
            // height: '5em',
        }
    }

};

const spinner = ({ classes }) => (
    <div className={classes.loader}></div>
);

export default injectSheet(styles)(spinner);