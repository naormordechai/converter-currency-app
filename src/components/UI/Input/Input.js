import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    input: {
        width: '200px',
        padding:'5px 25px',
        borderRadius:'5px',
        border:'1px solid grey',
        outline:'none',
        textAlign:'center'
    },
    textAlign: {
        textAlign: 'center',
    }
};

const input = ({ type, setNumber, classes, placeholder }) => (
    <div className={classes.textAlign}>
        <input className={classes.input} type={type} onChange={setNumber} placeholder={placeholder} />
    </div>
);

export default injectSheet(styles)(input);