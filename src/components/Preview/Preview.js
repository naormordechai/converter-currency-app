import React, { useEffect } from 'react';
import injectSheet from 'react-jss';
import { AuthContextLeft } from '../../App';

const styles = {
    active: {
        fontWeight: '700'
    }
};

class Preview extends React.Component {
    shouldComponentUpdate(prevProps) {
        if (prevProps.countryNameActive !== this.props.countryNameActive) {
            return true
        } else return false
    }

    render() {
        console.log('PREVIEW');
        
        let marked = false
        const { country, side, countryNameActive, classes, setCountry } = this.props
        if (country.name === countryNameActive) marked = true
        return (
            <div className={marked ? classes.active : null} onClick={() => setCountry(country, side)}>{country.name}</div>
        )
    }
}

export default injectSheet(styles)(Preview);