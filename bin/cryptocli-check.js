const program = require('commander');
const check = require('../commands/check');

program
	.command('price')
	.description('Check price of coins')
	.option(
		'--coin <type>',
		'Add specific coin types in CSV Format',
		'BTC,ETH,XRP'
	)
	.option(
		'--curr <currency>',
		'Change the currency',
		'INR'
	)
	.action((arg) => check.price(arg));

program.parse(process.argv);