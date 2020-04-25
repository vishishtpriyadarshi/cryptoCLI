const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');

const check = {
	async price(arg) {
		try{
			keyManager = new KeyManager();
			const key = keyManager.getKey();
			const api = new CryptoAPI(key);
			const priceOutputData = await api.getPriceData(arg.coin, arg.curr);
			
			console.log(priceOutputData);
			
		} catch(err) {
			console.log(err.message.red);
		}
	}
};

module.exports = check;