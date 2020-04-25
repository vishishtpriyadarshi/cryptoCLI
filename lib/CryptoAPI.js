const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
	}
	
	async getPriceData(coin, curr) {
		try{
			const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coin}&convert=${curr}`);
			
			let output = '';
			
			res.data.forEach(coinData => {
				output += `Coin: ${coinData.symbol.purple} (${coinData.name}) | Price: ${coin.price.purple} | Rank: ${coinData.rank.purple}\n`;
			});
			
			return output;
			
		}	catch(err){
				handleAPIError(err);
		}
	}
}

function handleAPIError(err){
	if(err.response.status === 401)
		throw new Error('Your API Key is Invalid');
	else if(err.response.status === 404)
		throw new Error('Your API is not Responding');
	else
		throw new Error('Something went wrong !');
}

module.exports = CryptoAPI;