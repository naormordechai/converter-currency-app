import React, { useEffect } from 'react';
import Preview from '../Preview/Preview';
import injectSheet from 'react-jss';

const styles = {
    list: {
        listStyle: 'none',
        textAlign: 'center',
        margin: '0 auto',
        overflowY: 'scroll',
        color:'#ccc',
        fontSize:'20px'
    }
}

const list = ({ countries, side, classes, countryActive, setCountryClicked }) => {

    useEffect(() => {
        console.log('LIST', countryActive);
        
    }, [countryActive])

    return (
        <ul className={classes.list}>
            {countries.map((country, i) => (
                <li key={country.name + i}>
                    <Preview country={country} side={side} countryNameActive={countryActive} setCountry={setCountryClicked}/>
                </li>
            ))}
        </ul>
    )
}
    ;

export default injectSheet(styles)(list);