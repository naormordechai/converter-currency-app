import axios from 'axios'

async function query() {
    return await axios.get('https://restcountries.eu/rest/v2/all', { crossdomain: true })
}

async function getByName(name) {
    return await axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
}

async function converterCurrency(from, to) {
    return await axios.get(`https://free.currencyconverterapi.com/api/v6/convert?q=PHP_${from},PHP_${to}&compact=ultra&apiKey=d901d2488ac38f5aed12`)
}

export default {
    query,
    getByName,
    converterCurrency
}