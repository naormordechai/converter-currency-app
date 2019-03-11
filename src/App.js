import React from 'react';
import injectSheet from 'react-jss'
import currencyService from './services/currencyService';
import List from './components/List/List';
import Input from './components/UI/Input/Input';
import Button from './components/UI/Button/Button';
import Spinner from './components/UI/Spinner/Spinner';


const styles = {
  container: {
    background: 'rgba(0, 0, 255, 0.05)',
    height: '100vh',
    textAlign: 'center',
    borderRadius: '5px',
  },
  containerList: {
    display: 'flex',
    height: '80vh',
    position: 'absolute',
    top: '15%',
    width: '100vw',
  },
  test: {
  },
  subContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    maxWidth: '600px',
    margin: '0 auto'
  },
  paaidng: {
    padding: '5px 20px',
    fontSize: '20px',
    textAlign: 'center'
  },
  active: {
    color: 'red'
  }
}

export const AuthContextLeft = React.createContext({
  setCountry: () => { },
  countryActive: ''
})


export const AuthContextRight = React.createContext({
  setCountryTo: () => { }
})

class App extends React.Component {

  state = {
    countries: [],
    fromCountry: {
      currency: '',
      name: '',
      symbol: ''
    },
    toCountry: {
      currency: '',
      name: '',
      symbol: ''
    },
    afterConvert: 0,
    data: {},
    sumAfterConvert: 0,
    num: 0,
    countryActiveLeft: '',
    countryActiveRight: '',
    isLoading: false,
    isError: false
  }

  componentDidMount() {
    currencyService.query()
      .then(({ data }) => {
        this.setState({
          countries: data
        })
      })
  }

  setCountry = async (country, side) => {
    const copyFromCountry = { ...this.state.fromCountry };
    const copyToCountry = { ...this.state.toCountry };
    let data = null;
    let dataCurrency = await currencyService.getByName(country.name);
    let currency = await dataCurrency;
    data = currency.data[0].currencies[0].code;

    copyFromCountry.currency = data;
    copyFromCountry.name = country.name;
    copyFromCountry.symbol = currency.data[0].currencies[0].symbol;

    copyToCountry.currency = data;
    copyToCountry.name = country.name
    copyToCountry.symbol = currency.data[0].currencies[0].symbol;


    if (side === 'left') {
      this.setState({ fromCountry: copyFromCountry, countryActiveLeft: country.name, isError: false }, () => {
        this.convertCurrencyHandler()
      })
    }
    else this.setState({ toCountry: copyToCountry, countryActiveRight: country.name, isError: false }, () => {
      this.convertCurrencyHandler()

    })
  }

  convertCurrencyHandler = () => {
    this.setState({ isLoading: true, isError: false })
    currencyService.converterCurrency(this.state.fromCountry.currency, this.state.toCountry.currency)
      .then(({ data }) => {
        this.setState({ data }, () => {
          this.handleValue()
          this.setState({ isLoading: false, isError: false })
        })
      }).catch(err => {
        this.setState({ isLoading: false, isError: true })
      })
  }

  handleNumberConvert = e => {
    this.setState({ num: e.target.value })
  }

  handleValue = () => {
    const values = Object.values(this.state.data);
    const sumAfterConvert = values[1] / values[0];
    this.setState({ sumAfterConvert })

  }

  render() {
    const { countries, fromCountry, toCountry } = this.state;
    const { classes } = this.props;
    let sumConvert = this.state.isLoading ? <Spinner /> :
      <p>
        {this.state.num && this.state.sumAfterConvert ?
          <span><b>{fromCountry.symbol}{this.state.num}</b> of {this.state.fromCountry.name} =
      <b> {toCountry.symbol}{(this.state.sumAfterConvert * this.state.num).toFixed(1)}</b> of {this.state.toCountry.name}</span> : null}
      </p>
    return (
      <div className={classes.container}>
        <Input type="number" setNumber={this.handleNumberConvert} placeholder="sun to convert" />
        <Button convertFunc={this.convertCurrencyHandler}>CONVERT</Button>
        <div style={{ height: '130px' }}>
          {this.state.isError ? <b>ERROR REQUEST TRY LATER</b> : <>{sumConvert}</>}
        </div>
        <div className={classes.containerList}>
          <List countries={countries} side="left" countryActive={this.state.countryActiveLeft} setCountryClicked={this.setCountry} />
          <List countries={countries} side="right" countryActive={this.state.countryActiveRight} setCountryClicked={this.setCountry} />
        </div>
      </div>

    )
  }
}


export default injectSheet(styles)(App)



