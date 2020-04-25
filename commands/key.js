const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validation');

const key = {
	async set(){
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: 'password',
				name: 'key',
				message: 'Enter API Key'.blue + ' https://nomics.com',
				validate: isRequired
			}
		]);
		
		const key = keyManager.setKey(input.key);
		
		if(key){
			console.log('API Key Set'.yellow);
		}
		
		
	},
	
	show(){
		try{
			const keyManager = new KeyManager();
			const key = keyManager.getKey();
			
			console.log('Current API Key: ', key.green);
			return key;
		} catch(err){
			console.log(err.message.red);
		}
	},

	remove(){
		try{
			const keyManager = new KeyManager();
			keyManager.deleteKey();
			console.log('Key Removed'.yellow);
			
			return;
			
		} catch(err){
			console.log(err.message.red);
		}
	}
};

module.exports = key;