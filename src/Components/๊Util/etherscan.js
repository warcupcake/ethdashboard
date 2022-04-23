const apiKey = '';
// enter etherscan API key

const baseUrl = 'https://api.etherscan.io/api';

const etherscan = {
    getGasOracle() {
        const gasOracleUrl = `?module=gastracker&action=gasoracle&apikey=${apiKey}`
        return fetch(baseUrl+gasOracleUrl)
        .then(response => response.json())
        .then(jsonResponse => jsonResponse.result);
    }
}

export default etherscan;